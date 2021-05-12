// проверяет поддерживает ли браузер webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


// бургер меню
let btnBurger = document.querySelector('.header__burger-btn');
let btnClose = document.querySelector('.header__close-btn');
let verticalMenu = document.querySelector('.header__vertical-menu');

function openMenu() {
    verticalMenu.classList.toggle('header__vertical-menu_hidden');
    verticalMenu.classList.toggle('header__vertical-menu_visible');
}
btnBurger.onclick = openMenu;
btnClose.onclick = openMenu;
/*-------------------------------------------ПРОКРУТКА ПО ЯЯКАРЯМ------------------------------------------------------------------------------------------*/
let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        let blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}