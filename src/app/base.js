import $ from 'jquery';

export default () => { 
  $(function () {
  
  let currentPosition     = 0;
  let scrollPosition    = 0;
  let menuState         = false;
  const sectionsPos       = [];
  const sectionsPart      = {};
  const animationsState   = [false, false, false];
  const $scrollElement    = $('html,body');
  const $body             = $('body');
  const $indexSection     = $('section');
  const $articles         = $('article');
  const $nav              = $('#nav');
  const $logoCover        = $('#logo-cover');
  const $coverPhrase      = $('.cover-phrase');
  const $btntoggle        = $('#btnToggle');
  const $iSplashComputer  = $('#i-splash-computer');
  const $iSplashBooks     = $('#i-splash-books');
  const $navButtons       = $('.nav-buttons');
  const $btnNext          = $('.next');
  const $header           = $('header');

// main calls
  getSectionsOffset()
  desktopListeners()

// events
  $(window).on('resize', function () {
    getSectionsOffset()
  })

  $(window).on('scroll', function () {
    checkPosition()
  })

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

  $btntoggle.on('click',toggleMenu)

  $btnNext.on('click', function (e) {
    goTo(e, $(this), 'button')
  })

 



// main Functions

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
      $this   = $(this)
      offset  = $this.offset().top
      id      = $this.attr('id')

      sectionsPart[id] = offset
      sectionsPos[i]   = offset
    })

    currentPosition = getCurrentPosition()
    checkPosition()

    desktopListeners()
  }

  function desktopListeners(){
    if (window.innerHeight < 630) {
      $body.off('keydown')
    } else {
      $body.on('keydown', function (event) {
        moveWithKey(event)
      })
    }
  }
  
  // ===== Menu Functions =====

  function toggleMenu () {
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
    scrollPosition = $(window).scrollTop();
    
    if (scrollPosition >= 0 && scrollPosition < sectionsPos[1]) {
      $header.removeClass('just-menu menu-overwhite menu-dark')
    }	else if (scrollPosition >= sectionsPos[1] && scrollPosition < sectionsPos[2]) {
      $header.addClass('menu-overwhite')
      $header.removeClass('just-menu menu-dark')
      
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

  // animations

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
      }, 500)
    })
  }

//   (function initSlick() {
//     $('.work-example-container').slick({
//       centerMode: true,
//       centerPadding: '70px',
//       slidesToShow: 3,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '40px',
//             slidesToShow: 3
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: 'unslick'
//         }
//       ]
//     });
        
//   })()

})
}