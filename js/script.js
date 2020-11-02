let navmenu = document.querySelector('.menu li')
let hamburger = document.querySelector('.hamburger-button');


let dropdown = document.querySelector('.dropdown-menu')

let _navmenu = false

function toogleDropdown(el) {

   
        
}


navmenu.addEventListener('click', function() {
    if(!_navmenu)
    {
        this.classList.add('active')
        dropdown.classList.add('active')
        _navmenu = !_navmenu
    }
    else
    {
        this.classList.remove('active')
        dropdown.classList.remove('active')
        _navmenu = !_navmenu
    }
})

hamburger.addEventListener('click', function() {
    if(!_navmenu)
    {
        this.classList.add('active')
        dropdown.classList.add('active')
        _navmenu = !_navmenu
    }
    else
    {
        this.classList.remove('active')
        dropdown.classList.remove('active')
        _navmenu = !_navmenu
    }
})
