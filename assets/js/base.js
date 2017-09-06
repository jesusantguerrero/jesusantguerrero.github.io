$(function () {
  var currentPosition = 0,
    scrollPosition = 0,
    menuState = false,
    sectionsPos = [],
    sectionsPart = {},
    animationsState = [false, false, false],
    $scrollElement = $('html,body'),
    $body = $('body'),
    $indexSection = $('section'),
    $articles = $('article'),
    $nav = $('#nav'),
    $logoCover = $('#logo-cover'),
    $coverPhrase = $('.cover-phrase'),
    $btntoggle = $('#btnToggle'),
    $iSplashComputer = $('#i-splash-computer'),
    $iSplashBooks = $('#i-splash-books'),
    $navButtons = $('.nav-buttons'),
    $btnNext = $('.next')
  $header = $('header')

// main calls
  getSectionsOffset()
  coverAnimations()

// events

  $navButtons.on('click', function (e) {
    goTo(e, $(this))
  })

  function goTo (event, element, type) {
    event.preventDefault()
    var id
    if (type == 'button') {
      id = element.attr('data-href')
    } else {
      id = element.attr('href').slice(1)
    }
    $scrollElement.animate({scrollTop: sectionsPart[id]}, 500, function () {
      currentPosition = getCurrentPosition()
    })
    if (type != 'button') toggleMenu()
  }

  $btntoggle.click(toggleMenu)

  $btnNext.on('click', function (e) {
    goTo(e, $(this), 'button')
  })

  $(window).on('resize', function () {
    getSectionsOffset()
  })

  function scrollDesktopListener(){
    $(window).scroll(function () {
      checkPosition()
    })
  }

  $body.on('keydown', function (event) {
    moveWithKey(event)
  })

// Functions
  function moveWithKey (event) {
    event.stopImmediatePropagation()
    var key = event.which
    if (key == 40 && currentPosition >= 0 && currentPosition < sectionsPos.length - 1) {
					 goDown()
    } else if (key == 38 && currentPosition <= sectionsPos.length - 1 && currentPosition > 0) {
					 goUp()
    }
  }

  function getSectionsOffset () {
    var id, offset, $this

    $('.section-part').each(function (i, value) {
      $this = $(this)
      offset = $this.offset().top
      id = $this.attr('id')

      sectionsPart[id] = offset
      sectionsPos[i] = offset
    })

    currentPosition = getCurrentPosition()
    checkPosition()

    if (window.innerHeight < 638) {
      $body.off('keydown')
    } else {
      $body.on('keydown', function (event) {
        moveWithKey(event)
        scrollDesktopListener()
      })
    }

    if (window.innerWidth < 768){
      $(window).off('scroll')
      mobileFunctions()
    }else{
      quitMobileFunctions()
    }
  }
		// ===== Menu Functions =====

  function toggleMenu () {
    console.log("hola clickado")
    !menuState ? showMenu() : hideMenu()
  }

  function showMenu () {
    let position = getCurrentPosition()
    $nav.removeClass('hidden-xs')
    $nav.animate({right: '0'}, 300)
    $('article').css({filter: 'blur(5px)'})
    if (position < 1) {
      $('header').addClass('just-menu')
    }
    menuState = true
  }

  function hideMenu () {
    var w = $nav.width()
    if (getCurrentPosition() < 2) {
      $('header').removeClass('just-menu')
    }
    $nav.animate({right: '-' + w}, 400)
    $('article').css({filter: 'none'})
    setTimeout(function () {
      $nav.addClass('hidden-xs')
    }, 300)
    menuState = false
  }

		// ==== Navigation movement and scroll ralated functions =====

  function goDown () {
    currentPosition++
    $scrollElement.animate({scrollTop: sectionsPos[currentPosition]}, 500)
  }

  function goUp () {
    currentPosition--
    $scrollElement.animate({scrollTop: sectionsPos[currentPosition]}, 500)
  }

  function getCurrentPosition () {
    var i = 0
    for (i = 0; i < sectionsPos.length - 1; i++) {
			if (sectionsPos[i] >= scrollPosition && scrollPosition < sectionsPos[i + 1]) {
   			return i
 			}
    }

    if (i > 0 && currentPosition == 0) {
      return 5
    }
  }

  function checkPosition () {
    scrollPosition = $(window).scrollTop()

    if (scrollPosition >= 0 && scrollPosition < sectionsPos[1]) {
      $header.removeClass('just-menu menu-overwhite menu-dark')
    }	else if (scrollPosition >= sectionsPos[1] && scrollPosition < sectionsPos[2]) {
      $header.addClass('menu-overwhite')
      $header.removeClass('just-menu menu-dark')

      if (animationsState[1] == false) {
        splashMovement()
        animationsState[1] = true
      }
    }	else if (scrollPosition >= sectionsPos[2] && scrollPosition < sectionsPos[3]) {
      $header.removeClass('menu-overwhite menu-dark')
      $header.addClass('just-menu')

      if (animationsState[2] == false) {
        knowledgeAnimations()
        animationsState[2] = true
      }
    }	else if (scrollPosition >= sectionsPos[3] && scrollPosition < sectionsPos[4]) {
      $header.removeClass('menu-overwhite')
      $header.addClass('just-menu menu-dark')
      workAnimations()
    } else {
      $header.removeClass('menu-dark menu-overwhite')
      $header.addClass('just-menu')
    }
  }

		// ==== Image animation functions ====

  function coverAnimations () {
    if (window.innerWidth < 768) {
      $logoCover.css({left: '-200px'})
      $logoCover.animate({'left': '5%'}, 1700)

      $coverPhrase.css({opacity: '0'})
      $coverPhrase.animate({opacity: '1'}, 1700)
    } else {
      $logoCover.css({left: '-250px'})
      $logoCover.animate({'left': '25%'}, 1700)

      $coverPhrase.css({opacity: '0'})
      $coverPhrase.animate({opacity: '1'}, 1700)
    }
  }

  function splashMovement () {
    $('.splash-i').css({opacity: '0'})
    $iSplashComputer.animate({opacity: '.5'}, 1700)
    $iSplashBooks.animate({opacity: '1'}, 1500)
  }

  function knowledgeAnimations () {
    var $searcher = $('#searcher'),
      $knowledgeCard = $('.knowledge-card'),
      myWord = 'Knowledge',
      $btnSearch = $('.btn-search'),
      timer, count = 0

    $knowledgeCard.css({opacity: '0'})
    timer = setInterval(write, 200)
    setTimeout(searchClick, 2000)
    setTimeout(showKnowledge, 2500)

    function write () {
      count++
      var writing = myWord.slice(0, count)
      $searcher.val(writing)

      if (count > myWord.length) {
        clearInterval(timer)
      }
    }

    function searchClick () {
      $btnSearch.addClass('btn-search-pressed')
      setTimeout(function () {
        $btnSearch.removeClass('btn-search-pressed')
      }, 500)
    }

    function showKnowledge () {
      $knowledgeCard.each(function (i) {
        $(this).animate({opacity: '1'}, 1000)
      })
    }
  }

  function workAnimations () {
    var workExample = $('.work-example')

    workExample.on('mouseover', function () {
      workExample.css({opacity: '.4'})
      $(this).css({opacity: '1'})
    })

    workExample.on('mouseleave', function () {
      workExample.css({opacity: '1'})
    })

    $.each(workExample, function (index, el) {
      setInterval(function () {
        el.className = el.className + ' move-in'
      }, 200)
    })
  }

  (function linksTarget () {
    $('a').attr('target', '_blank')
  })()


  function mobileFunctions(){
    $('body').on('touchmove',function(){
      checkPosition();
    })
  }

  function quitMobileFunctions(){
    $('body').off('touchmove')
  }
})




