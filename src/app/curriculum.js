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
    image: './assets/img/calculator.png', 
    link: 'https://codepen.io/freesgen/pen/JOXGrW', 
    type: 'frontend'
  },
  { 
    title: 'Wiki-App',
    technologies: ['javascript', 'vue.js', 'sass', 'wikipedia API','AJAX'],
    description: 'It is a searcher for wikipedia articles using their API ',
    image: './assets/img/wikiapp.png', 
    link: 'https://codepen.io/freesgen/pen/zEgzaL', 
    type: 'frontend'
  },
  { 
    title: 'Promodoro-clock', 
    technologies: ['javascript', 'vue.js', 'sass', 'pug'],
    description: 'timer that allow users to follow the promodoro technique',
    image: './assets/img/promodoro-timer.png', 
    link: 'https://codepen.io/freesgen/pen/bYwpNO', 
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
    link: 'https://jesusantguerrero.github.io/neighborhood-tour/', 
    type: 'most proud'
  },

  { 
    title: 'Stock-Market', 
    technologies: ['React' , 'node.js/express',  'mongoDB', 'API`s'],
    description: 'Application that provide stock market data and allow users to add and remove stocks',
    image: './assets/img/stock-market.png', 
    link: 'https://ic-stock-market.herokuapp.com/', 
    type: 'website'
  },
  { 
    title: 'ICS Web Concept', 
    technologies: ['Responsive' , 'HTML/CSS/SASS',  'Vue.js'],
    description: 'A concept of website for Island Communication Services',
    image: './assets/img/ics-concept-page.png', 
    link: 'https://jesusantguerrero.github.io/ics-concept-page/', 
    type: 'website'
  },
  { 
    title: 'Nightlife', 
    technologies: ['React' , 'Node.js/express',  'MongoDB', 'Yelp-Api'],
    description: 'Look for bars near to you, add yourself to the attendence list and se how many people are going',
    image: './assets/img/nightlife.png', 
    link: 'https://ic-nightlife.herokuapp.com//', 
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