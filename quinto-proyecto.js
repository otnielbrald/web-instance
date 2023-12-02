import { animations } from "./files_js/animations.js"
import { btnUp } from "./files_js/btn-up.js"
import { darkMode } from "./files_js/dark-mode.js"
import { menuBar } from "./files_js/menu-bar.js"



const $btnPrevius = document.querySelector('.previus')
const $overlay = document.querySelector('.overlay')






document.addEventListener('DOMContentLoaded', e => {
    btnUp('.subir')
    animations()
    menuBar()
})

darkMode( '.bi-sun-fill' )



let imgClickeada
const $img = document.createElement('img')
const $gallery =document.querySelector('.works__gallery')

document.addEventListener('click', (e) => {

    if (e.target.matches('.works__photo img')) {
        $overlay.classList.add('overlay-mostrar')
        
        let $src = e.target.getAttribute('src')
        $img.setAttribute('src', $src)
        $img.classList.add('gallery-mostrar')
        $btnPrevius.insertAdjacentElement('afterend', $img)
        imgClickeada = e.target
    }
    
})

document.addEventListener('click', (e) => {
    if (e.target.matches('.next') || e.target.matches('.next i')) {
        if (imgClickeada === $gallery.lastElementChild.firstElementChild) {
            imgClickeada = $gallery.firstElementChild.firstElementChild
            let $src = imgClickeada.getAttribute('src')
            $img.setAttribute('src', $src)    
        } else {
            imgClickeada = imgClickeada.closest('.works__photo').nextElementSibling.firstElementChild
            let $src = imgClickeada.getAttribute('src')
            $img.setAttribute('src', $src)    
        }
    }
})

document.addEventListener('click', (e) => {
if (e.target.matches('.previus') || e.target.matches('.previus i')) {
    if (imgClickeada === $gallery.firstElementChild.firstElementChild) {
        imgClickeada = $gallery.lastElementChild.firstElementChild
        let $src = imgClickeada.getAttribute('src')
        $img.setAttribute('src', $src)
    } else {
        imgClickeada = imgClickeada.closest('.works__photo').previousElementSibling.firstElementChild
        let $src = imgClickeada.getAttribute('src')
        $img.setAttribute('src', $src)  
    }
}
})

document.addEventListener('click', (e) => {
    if (e.target.matches('.close') || e.target.matches('.close i')) {
        
        $overlay.classList.remove('overlay-mostrar')
    }
})





    
    
    
    


    

