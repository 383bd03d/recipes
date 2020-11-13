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

if(window._select) {
    const select = document.querySelector('.dropdown')

    select.addEventListener('click', () => {
        if(!select.classList.contains('open')) {
            select.querySelector('ul').style = "display: block;"
            setTimeout(() => {
                select.classList.add('open');
            }, 1)
            
        } else {
            select.classList.remove('open');
            setTimeout(() => {
                select.querySelector('ul').style = "display: none;"
            }, 50)
        }
    })

    select.querySelectorAll('li').forEach(el => {
        el.addEventListener('click', (e) => {
            select.querySelector('label').innerHTML = e.srcElement.innerText
        })
    })
}

try {

    const searchButtonAnother = document.querySelector('.search-button');
    let _searchButtonAnother = false;
    
    searchButtonAnother.addEventListener('click', (el) => {
        
        if(!_searchButtonAnother) {
            searchButtonAnother.classList.add('times')
            searchButtonAnother
                .closest('.search')
                .parentNode
                .nextElementSibling
                .querySelector('.search')
                .style = 'display: block'
            _searchButtonAnother = !_searchButtonAnother
        }
        else {
            searchButtonAnother.classList.remove('times')
            searchButtonAnother
                .closest('.search')
                .parentNode
                .nextElementSibling
                .querySelector('.search')
                .style = 'display: none'
            _searchButtonAnother = !_searchButtonAnother
        }
        
    })


    const order = document.querySelector('.order')

    order.querySelectorAll('span').forEach(el => {
        el.addEventListener('click', (e) => {
            order.querySelector('.active').classList.remove('active')
            e.toElement.classList.add('active')
        })
    })
    
} catch(e) {
    console.log(e)
}



