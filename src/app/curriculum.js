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
    technologies: ['javascript', 'vue.js', 'design-patterns', 'sass'],
    description: 'It is an android calculator clone, it have order precedence and cool animations',
    image: './assets/img/catcliker.png', 
    link: '#', 
    type: 'frontend'
  },
  { 
    title: 'Wikipedia Viewer',
    technologies: ['javascript', 'vue.js', 'design-patterns', 'sass', 'wikipedia API','AJAX'],
    description: 'It is a searcher for wikipedia articles using their API ',
    image: './assets/img/catcliker.png', 
    link: '#', 
    type: 'frontend'
  },
  { 
    title: 'Simon Game', 
    technologies: ['javascript', 'vue.js', 'design-patterns', 'sass', 'custom AI'],
    description: 'The clasic simon game in the web and programmer version',
    image: './assets/img/catclicker.png', 
    link: '#', 
    type: 'frontend'
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