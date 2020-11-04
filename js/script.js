let navmenu = document.querySelector('.menu li')
let hamburger = document.querySelector('.hamburger-button');
let searchButton = document.querySelector('.search-mobile-button');


let dropdown = document.querySelector('.dropdown-menu')
let searchmenu = document.querySelector('.search-mobile-menu')

let _navmenu = false
let _searchmenu = false

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

searchButton.addEventListener('click', function() {
    if(!_searchmenu)
    {
        this.classList.add('active')
        searchmenu.classList.add('active')
        _searchmenu = !_searchmenu
    }
    else
    {
        this.classList.remove('active')
        searchmenu.classList.remove('active')
        _searchmenu = !_searchmenu
    }
})


document.querySelectorAll('.search input').forEach(el => {
    el.addEventListener('keydown', () => {
        el.nextElementSibling.nextElementSibling.style='display: block'

        el.addEventListener('focusout', () => {
            el.nextElementSibling.nextElementSibling.style='display: none'
        })
    });
});

document.querySelectorAll('.search-icon.times').forEach(el => {
    el.addEventListener('click', () => {
        el.previousElementSibling.value = '';
    })
})