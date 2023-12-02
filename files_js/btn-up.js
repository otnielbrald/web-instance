export function btnUp( selector) {
  const $subir = document.querySelector( selector )
  let scrollAxisY = 0

  document.addEventListener('scroll', e=> {
    
    if (scrollY <= 400) $subir.classList.remove('subir-show')
    else {
        if (scrollY > scrollAxisY) {
            scrollAxisY = scrollY
            $subir.classList.remove('subir-show')
        } else {
            $subir.classList.add('subir-show')
            scrollAxisY = scrollY
        }
    }
  })
}