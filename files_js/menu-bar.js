export function menuBar() {
  const $body = document.querySelector('body')
  const $headerIcon = document.querySelectorAll('.header__nav--link i')
  const $headerLinkText = document.querySelectorAll('.header__nav--link p')
  const $menu = document.querySelector('.header__menu')
  const $headerNav = document.querySelector('.header__nav')

  document.addEventListener('scroll', (e) => {
console.log(scrollY);
   
    if (innerHeight < 950 && innerWidth < 768) {
        if (scrollY > 300) {
        $menu.classList.add('header__menu--horizontal')
          if ($body.classList.contains('dark-mode')) {
            $menu.classList.add('header__menu--dark-mode')
          } 
        
        } else {
        $menu.classList.remove('header__menu--horizontal')
        $menu.classList.remove('header__menu--dark-mode')
        }
        if (scrollY > 400) {
            $menu.classList.add('header__menu--horizontal-down') 
        } else {
            $menu.classList.remove('header__menu--horizontal-down')  
        }
        

    }
    if ( innerHeight < 950 && innerWidth > 767 ) {
        if (scrollY > 400) {
            $headerNav.classList.add('header__nav--horizontal')
            if ($body.classList.contains('dark-mode')) {
                $headerNav.classList.add('header__nav--dark-mode')
            }
            
            $headerIcon.forEach(e => {
                e.style.display = "none"
            })
            $headerLinkText.forEach(e=>{
                e.style.display = "flex"
            })
        }
        else {
            $headerNav.classList.remove('header__nav--horizontal')
            $headerNav.classList.remove('header__nav--dark-mode')
            $menu.classList.remove('header__menu--dark-mode')
            $headerIcon.forEach(e => {
                e.style.display = "flex"
            })
            $headerLinkText.forEach(e=>{
                e.style.display = "none"
            })
        }
        if (scrollY > 600) {
            $headerNav.classList.add('header__nav--horizontal-down')
        } else {
            $headerNav.classList.remove('header__nav--horizontal-down')
        }

    } else {
        if (innerWidth > 767) {
            if (scrollY > 700) {
            
                $headerNav.classList.add('header__nav--horizontal')
                if ($body.classList.contains('dark-mode')) {
                    $headerNav.classList.add('header__nav--dark-mode')
                }
                
                $headerIcon.forEach(e => {
                    e.style.display = "none"
                })
                $headerLinkText.forEach(e=>{
                    e.style.display = "flex"
                })
            }else {
                $headerNav.classList.remove('header__nav--horizontal')
                $headerNav.classList.remove('header__nav--dark-mode')
                $menu.classList.remove('header__menu--dark-mode')
                $headerIcon.forEach(e => {
                    e.style.display = "flex"
                })
                $headerLinkText.forEach(e=>{
                    e.style.display = "none"
                })
                          
            }
            if (scrollY > 900) {
                $headerNav.classList.add('header__nav--horizontal-down')
            } else {
                $headerNav.classList.remove('header__nav--horizontal-down')
            }
        }
    }
         
})
}