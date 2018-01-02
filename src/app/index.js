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
    const container = document.querySelector('#work-front-end')
    
    portfolio.forEach((item) => {
      if (item.type == 'frontend')
        container.innerHTML += this.renderWorkItem(item)
    })
  },

  CodeOfDay() {
   const pens = controller.getCodePens()
   const i = Math.floor(Math.random() * pens.length)
   const container = document.querySelector('#code-of-day')

   container.innerHTML = this.renderCodeOfDay(pens[i]) + container.innerHTML
  },

  renderCodeOfDay(item) {
    const s = document.createElement('script');
    s.src = item.src
    s.async = true
    document.body.appendChild(s)

    return `
      <div class="div-title">
        <h2>Code of the day : ${item.name}</h2>
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
        <div class="work-title">
          <h2 class="text-center">${workItem.title}</h2>
        </div>
        <div class="work-technologies text-center">${workItem.technologies.join(' | ')}</div>
        <div class="description">${workItem.description}</div>
        <div class="see"><a href="${workItem.link}"> See </a></div>
      </div>  
    `
  }
}

  controller.init()
  base();
