window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  ShowBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou na linha
  // quais dados vou precisar ?

  // Topo da seção
  const sectionTop = section.offsetTop

  // altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Informações dos dados e da lógica
  // Verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção terminar aonde?
  const sectionEndAt = sectionTop + sectionHeight

  // o final da seção passou da linha alva ?
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
    // navigation.classList.add('scroll') // o que o video utilizou
  } else {
    document.getElementById('navigation').classList.remove('scroll')
    // navigation.classList.remove('scroll') // o que o video utilizou
  }
}

function ShowBackToTopButtonOnScroll() {
  if (scrollY > 800) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
