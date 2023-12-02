export function darkMode ( btnDark ) {

  const $sections = document.querySelectorAll('.dm')
  const $path = document.querySelectorAll('path')
  const $subir = document.querySelector('.subir')
  const $menu = document.querySelector('.header__menu')
  const $headerNav = document.querySelector('.header__nav')

  const fnctnDark = () => {
    $sections.forEach( i => i.classList.toggle('dark-mode'))
    if (scrollY > 300) $menu.classList.toggle('header__menu--dark-mode')
   
    if (scrollY > 700) $headerNav.classList.toggle('header__nav--dark-mode')
  

    $subir.classList.toggle('btn-dm')
    $path.forEach(e=>{
      if (e.style.fill === 'rgb(0, 45, 72)') e.style.fill = '#fff'
      else e.style.fill = '#002d48'})
  }
  
  document.addEventListener('click', (e) => {
    if (e.target.matches( btnDark )) {
        if (!localStorage.getItem('dark-mode')) {
            localStorage.setItem('dark-mode', 'true')
            localStorage.setItem('header__menu--dark-mode', 'true')
            localStorage.setItem('header__nav--dark-mode', 'true')
        } else {
            localStorage.removeItem('dark-mode')
            localStorage.removeItem('header__menu--dark-mode')
            localStorage.removeItem('header__nav--dark-mode')
        }
        
        fnctnDark()
    }
  })

  document.addEventListener('DOMContentLoaded', e =>{
    if (localStorage.getItem('dark-mode')) {
      fnctnDark()
    }
  })

}