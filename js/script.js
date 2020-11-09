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
        dropdown.style.display = 'grid'
        setTimeout(() => {
            dropdown.classList.add('active')
        }, 1)
        _navmenu = !_navmenu
    }
    else
    {
        this.classList.remove('active')
        dropdown.classList.remove('active')
        setTimeout(() => {
            dropdown.style.display = 'none'
        }, 500)
        _navmenu = !_navmenu
    }
})

hamburger.addEventListener('click', function() {
    if(!_navmenu)
    {
        this.classList.add('active')
        dropdown.style.display = 'grid'
        setTimeout(() => {
            dropdown.classList.add('active')
        }, 1)
        _navmenu = !_navmenu
    }
    else
    {
        this.classList.remove('active')
        dropdown.classList.remove('active')
        setTimeout(() => {
            dropdown.style.display = 'none'
        }, 500)
        _navmenu = !_navmenu
    }
})

searchButton.addEventListener('click', function() {
    if(!_searchmenu)
    {
        this.classList.add('active')
        searchmenu.style.display = 'grid'
        setTimeout(() => {
            searchmenu.classList.add('active')
        }, 1)
        _searchmenu = !_searchmenu
    }
    else
    {
        this.classList.remove('active')
        searchmenu.classList.remove('active')
        setTimeout(() => {
            searchmenu.style.display = 'none'
        }, 500)
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

document.querySelectorAll('.share-button').forEach(el => {
    el.addEventListener('click', (el) => {
        b = el.toElement;
        if(!b.classList.contains('times')) {
            b.classList.add('times')
            b.nextElementSibling.classList.add('active')
        } else {
            b.classList.remove('times')
            b.nextElementSibling.classList.remove('active')
        }
    })
});

const searchButtonAnother = document.querySelector('.search-button');
let _searchButtonAnother = false;

searchButtonAnother.addEventListener('click', (el) => {
    
    if(!_searchButtonAnother) {
        searchButtonAnother.classList.add('times')
        searchButtonAnother.closest('.search').nextElementSibling.style = 'display: block'
        _searchButtonAnother = !_searchButtonAnother
    }
    else {
        searchButtonAnother.classList.remove('times')
        searchButtonAnother.closest('.search').nextElementSibling.style = 'display: none'
        _searchButtonAnother = !_searchButtonAnother
    }
    
});

