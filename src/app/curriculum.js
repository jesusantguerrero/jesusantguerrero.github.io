const about = {
  description: '',
  image: ''
}

const skills = {
  currently: [
    {name: '', description: ''}
  ],

  technologies: [
    {name: '',level: 1}
  ]
}

const portfolio = [
  { 
    title: 'Phone Calculator', 
    technologies: ['javascript', 'vue.js', 'design-patterns', 'sass', 'pug'],
    description: 'It is an android calculator clone, it has order precedence and cool animations',
    image: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1159667.JOXGrW.small.34799fba-8f53-41af-aa06-0677458cccf9.png', 
    link: 'https://codepen.io/freesgen/pen/JOXGrW', 
    type: 'frontend'
  },
  { 
    title: 'Wikipedia Viewer',
    technologies: ['javascript', 'vue.js', 'sass', 'wikipedia API','AJAX'],
    description: 'It is a searcher for wikipedia articles using their API ',
    image: './assets/img/wikiapp.png', 
    link: 'https://codepen.io/freesgen/pen/zEgzaL', 
    type: 'frontend'
  },
  { 
    title: 'Simon Game', 
    technologies: ['javascript', 'vue.js', 'sass', 'custom AI'],
    description: 'The clasic simon game in the web and programmer version',
    image: './assets/img/simon.png', 
    link: 'https://codepen.io/freesgen/pen/EbwvXK?editors=0110', 
    type: 'frontend'
  },

  { 
    title: 'IC Payment', 
    technologies: ['PHP', 'vue.js', 'AJAX', 'sass', 'MySql', 'codeigniter'],
    description: 'Management System for an ISP Company',
    image: './assets/img/home.png', 
    link: 'https://ic-payment-staging.herokuapp.com', 
    type: 'most proud'
  },
  
  { 
    title: 'IC Note',
    technologies: ['javascript', 'electron', 'node.js'],
    description: 'Desktop Markdown note-taker using Electron',
    image: './assets/img/img7.png', 
    link: 'https://github.com/jesusantguerrero/icnote', 
    type: 'most proud'
  },

  { 
    title: 'Tour', 
    technologies: ['MV* Model' , 'Google Maps API',  'Vue.js'],
    description: 'Map Application, with pictures and street viewer powered by Google Maps API',
    image: './assets/img/tour.png', 
    link: 'http://jesusantguerrero.com/neighborhood-tour/', 
    type: 'most proud'
  },

  { 
    title: 'IC Services Concept', 
    technologies: ['Responsive' , 'HTML/CSS/SASS',  'Vue.js'],
    description: 'A concept of website for Island Communication Services',
    image: './assets/img/ics-concept-page.png', 
    link: 'https://jesusantguerrero.com/ics-concept-page/', 
    type: 'website'
  },
]

const contacts = {
  message: '',
  networks: [
    {name: '', link:''}
  ]
}

// my blog, my youtube channel, the company
const work = [
  {
    title: 'IC Note',
    description: '',
    link: '',
    technologies: []
  }
]


export default {
  about,
  skills,
  portfolio,
  work,
  contacts
}