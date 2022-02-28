// Initialize elements
const navMenuButton = document.getElementById('navMenuButton')
const navbar = document.getElementById('navbar')
const responsiveMenu = document.getElementById('responsiveMenu')
const faders = document.querySelectorAll('.fade-in')
const yearElement = document.getElementById('year')
const responsiveMenuItems = document.querySelectorAll('.responsive-menu-item')

// Values
const maxMenuSize = 768 // Max size in px for responsive nav menu
const faderOptions = { threshold: 0, rootMargin: '0px 0px -250px 0px' }
const date = new Date()

// Functions
const closeNavMenu = () => {
  navMenuButton.innerText = 'menu'
  navbar.classList.remove('open')
  responsiveMenu.classList.remove('open')
}

const openNavMenu = () => {
  navMenuButton.innerText = 'close'
  navbar.classList.add('open')
  responsiveMenu.classList.add('open')
}

// Event listeners
navMenuButton.addEventListener('click', () => {
  if (navMenuButton.innerText === 'menu') {
    openNavMenu()
  } else {
    closeNavMenu()
  }
})

window.addEventListener('resize', () => {
  if (window.visualViewport.width + 15 > maxMenuSize) {
    closeNavMenu()
  }
})

window.addEventListener('orientationchange', () => {
  if (window.visualViewport.width + 15 > maxMenuSize) {
    closeNavMenu()
  }
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNavMenu()
  }
})

responsiveMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('working')
    closeNavMenu()
  })
})

// Sticky nav
window.addEventListener('scroll', () => {
  if (
    window.scrollY > navbar.offsetHeight + 150 &&
    !navbar.classList.contains('open')
  ) {
    navbar.classList.add('active')
  } else {
    navbar.classList.remove('active')
  }
})

// Fade in
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
})

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

// Year for copyright at bottom
yearElement.innerText = date.getFullYear()
