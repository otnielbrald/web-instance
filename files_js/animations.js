export function animations() {

const $svg1 = document.querySelector('.section__svg')
const $abs = document.querySelector('.absolute')
const $sec1h3 = document.querySelector('.section__texts h3')
const $sec1p = document.querySelector('.section__texts p')
const $sec1Btn = document.querySelector('.section__texts button')
const $sec2h3 = document.querySelector('.section-2__container h3')
const $sec2p = document.querySelector('.section-2__container p')
const $servH3 = document.querySelector('.services h3')
const $servIcon = document.querySelectorAll('.services__icon')
const $servH4 = document.querySelectorAll('.services h4')
const $servp = document.querySelectorAll('.services p')
const $servBtn = document.querySelectorAll('.serv-btn')
const $servDeign = document.querySelector('.services__design')
const $workH3 = document.querySelector('.works h3')
const $workPhoto =document.querySelectorAll('.works__photo')
const $svg2 = document.querySelector('.svg2')
const $secLastH3 = document.querySelector('.sec-last h3')
const $secLastP = document.querySelector('.sec-last p')
const $secLastBtn = document.querySelector('.sec-last button')

const $form = document.querySelector('.footer__form h3')
const $input = document.querySelectorAll('.footer__input')
const $headerNav = document.querySelector('.header__nav')
const $link = document.querySelectorAll('.link')

const mov = ( animationName, delay, suma, ...element) => {
  element.forEach(el => {
    if (el.getBoundingClientRect().y < innerHeight/1.2) { 
      el.style.animation = `${animationName} .5s ease ${delay}s forwards`
      delay += suma
    }
  })
}


  document.addEventListener('scroll', e=>{
   
    mov('svg1', 0, 0, $svg1, $svg2)
    
    mov('sec1', 0, 0, $abs, $sec1h3, $sec1p, $sec1Btn, $secLastH3, $secLastP, $secLastBtn )

    mov('sec2', 0, 0, $sec2h3, $sec2p, $servH3, $workH3)

    mov('sec1', .1, .08, ...$servIcon)

    mov('sec1', .12, .08, ...$servH4)

    mov('sec1', .14, .08, ...$servp)

    mov('sec1', .16, .08, ...$servBtn)
    
    mov('servDesign', 0, 0, $servDeign)
    
    mov('sec1', .1, .05, ...$workPhoto)
    
    mov('title', .1, .03, ...$input)
    
    mov('title', 0, 0, $form)
                        
  })


  document.addEventListener('click', e=>{
    mov('static', .1, 0, ...$link)

    if (e.target.matches('.bi-list')) {
        $headerNav.classList.toggle('open')
        mov('link', .1, .1, ...$link)
      }
      
    if (!e.target.matches('.bi-list')) $headerNav.classList.remove('open')
  })

}