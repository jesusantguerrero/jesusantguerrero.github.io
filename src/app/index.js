import model from './curriculum';
import pens from './codepen';
import base from './base';

const controller = {
  getPortfolio() {
    return model.portfolio
  },

  getCodePens() {
    return pens
  },

  init() {
    view.init()
  }
}

const view = {
  init() {
    this.FrontEnd()
    this.CodeOfDay()
  },

  FrontEnd() {
    const portfolio = controller.getPortfolio()
    const $frontEnd = document.querySelector('#work-front-end')
    const $mostProud = document.querySelector('#most-proud')
    const $websites = document.querySelector('#work-websites')    
    const content = {
      frontend: [],
      'most proud': [],
      website: []
    }
    
    portfolio.forEach((item) => {
      const theItem = this.renderWorkItem(item)
      const {type} = item

      if (content[type].length < 3) {
        content[type].push(theItem)
      }
    })

    $frontEnd.innerHTML = content.frontend.join('')
    $websites.innerHTML = content.website.join('')
    $mostProud.innerHTML = content['most proud'].join('')
  },

  CodeOfDay() {
   const pens = controller.getCodePens()
   const { codes, src } = pens
   const i = Math.floor(Math.random() * codes.length)
   const container = document.querySelector('#code-of-day')

   container.innerHTML = this.renderCodeOfDay(codes[i], src) + container.innerHTML
  },

  renderCodeOfDay(item, src) {
    const s = document.createElement('script');
    s.src = src
    s.async = true
    document.body.appendChild(s)

    return `
      <div class="div-title">
        <h2 class="div-title">Code of the day : ${item.name}</h2>
      </div>
      ${item.code}
    `
  },

  renderWorkItem(workItem) {
    return `
      <div class="work-example">
        <div class="work-images">
          <img class="project-images" src="${workItem.image}" alt="${workItem.title}">
        </div>
        <div class="work-body">
          <h2 class="work-title">${workItem.title}</h2>
          <div class="work-technologies text-center">${workItem.technologies.join(' | ')}</div>
          <p class="work-description">${workItem.description}</p>
        </div>
        <a target="_blank" class="see btn-work"href="${workItem.link}"> See </a>
      </div>  
    `
  }
}

controller.init()
base();
