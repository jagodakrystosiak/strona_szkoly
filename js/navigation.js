/* Pobranie menu oraz przycisków */
var subMenu = document.querySelector('#subMenu');
var menu = document.querySelector('#menu');
var button_menu = document.querySelector('#button_menu');
var button_oSzkole = document.querySelector('#button_oSzkole');
var button_kandydaci = document.querySelector('#button_kandydaci');
var button_uczniowie = document.querySelector('#button_uczniowie');
var button_rodzice = document.querySelector('#button_rodzice');

/* Zawartość menu do wygenerowania */
var menus = {
    oSzkole: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Historia</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Pracownicy</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Dokumenty</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Deklaracja dostępności</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">RODO</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Przydatne linki</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--orange" href="#">Bezpieczny internet</a></li>
        </ul>
    </div>
    `,
    kandydaci: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow" href="#">Rekrutacja 2022/2023</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow" href="#">Rekrutacja 2021/2022</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow" href="#">Dokumenty szkoły</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow" href="#">Sekretariat</a></li>
        </ul>
    </div>
    `,
    uczniowie: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Plan lekcji</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Kalendarz szkolny</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Dzwonki</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Konkursy</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Konsultacje</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Samorząd uczniowski</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">E8 - Egzamin ósmoklasisty</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--yellow-green" href="#">Doradztwo</a></li>
        </ul>
    </div>
    `,
    rodzice: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--green" href="#">Plan lekcji</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--green" href="#">Kalendarz szkolny</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--green" href="#">Dzwonki</a></li>
        </ul>
    </div>
    `
};

/* Funkcja odpowiedzialna za wyświetlenie elementu */
const show = (elem) => {
    return function () {
        elem.classList.add('flex');
        elem.classList.remove('hidden');
    }
}

/* Funkcja odpowiedzialna za ukrycie elementu */
const hide = (elem) => {
    return function () {
        elem.classList.add('hidden');
        elem.classList.remove('flex');
    }
}

const openMenu = () => {
    return function () {
        if (menu.classList.contains('hidden')) {
            show(menu)();
        }
        else {
            hide(menu)();
        }
    }
}

/* Funkcja otwierająca i zmieniająca treść sub nawigacji */
const openSubMenu = (elem) => {
    return function () {
        //Jeżeli sub nawigacja jest schowana
        if (subMenu.classList.contains('hidden')) {
            show(subMenu)();
            switch (elem) {
                case button_oSzkole:
                    subMenu.innerHTML = menus.oSzkole;
                    subMenu.classList.add('c-subnavigation--orange');
                    break;
                case button_kandydaci:
                    subMenu.innerHTML = menus.kandydaci;
                    subMenu.classList.add('c-subnavigation--yellow');
                    break;
                case button_uczniowie:
                    subMenu.innerHTML = menus.uczniowie;
                    subMenu.classList.add('c-subnavigation--yellow-green');

                    break;
                case button_rodzice:
                    subMenu.innerHTML = menus.rodzice;
                    subMenu.classList.add('c-subnavigation--green');
                    break;
            }

        }
        //Jeżeli subnawigacja jest otwarta, ale wciśniemy inny przycisk - więc tylko zawartość się zmienia
        else if (
            (elem !== button_oSzkole && subMenu.classList.contains('c-subnavigation--orange')) ||
            (elem !== button_kandydaci && subMenu.classList.contains('c-subnavigation--yellow')) ||
            (elem !== button_uczniowie && subMenu.classList.contains('c-subnavigation--yellow-green')) ||
            (elem !== button_rodzice && subMenu.classList.contains('c-subnavigation--green'))
        ) {
            switch (elem) {
                case button_oSzkole:
                    subMenu.innerHTML = menus.oSzkole;
                    subMenu.classList.remove('c-subnavigation--yellow');
                    subMenu.classList.remove('c-subnavigation--yellow-green');
                    subMenu.classList.remove('c-subnavigation--green');
                    subMenu.classList.add('c-subnavigation--orange');
                    break;
                case button_kandydaci:
                    subMenu.innerHTML = menus.kandydaci;
                    subMenu.classList.remove('c-subnavigation--orange');
                    subMenu.classList.remove('c-subnavigation--yellow-green');
                    subMenu.classList.remove('c-subnavigation--green');
                    subMenu.classList.add('c-subnavigation--yellow');
                    break;
                case button_uczniowie:
                    subMenu.innerHTML = menus.uczniowie;
                    subMenu.classList.remove('c-subnavigation--orange');
                    subMenu.classList.remove('c-subnavigation--yellow');
                    subMenu.classList.remove('c-subnavigation--green');
                    subMenu.classList.add('c-subnavigation--yellow-green');
                    break;
                case button_rodzice:
                    subMenu.innerHTML = menus.rodzice;
                    subMenu.classList.remove('c-subnavigation--orange');
                    subMenu.classList.remove('c-subnavigation--yellow');
                    subMenu.classList.remove('c-subnavigation--yellow-green');
                    subMenu.classList.add('c-subnavigation--green');
                    break;
            }
        }
        //Jeżeli naciśniemy ponownie przycisk - zamyka się
        else {
            hide(subMenu)();
            subMenu.innerHTML = ' ';
            subMenu.classList.remove('c-subnavigation--orange');
            subMenu.classList.remove('c-subnavigation--yellow');
            subMenu.classList.remove('c-subnavigation--green');
            subMenu.classList.remove('c-subnavigation--yellow-green');
        }
    }
}

/* Obsługa przycisków */
document.querySelector('#button_menu').addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        hide(subMenu)();
        subMenu.innerHTML = ' ';
        subMenu.classList.remove('c-subnavigation--orange');
        subMenu.classList.remove('c-subnavigation--yellow');
        subMenu.classList.remove('c-subnavigation--green');
        subMenu.classList.remove('c-subnavigation--yellow-green');
    }
});
let mql = window.matchMedia('(min-width: 700px)');
window.addEventListener('resize', () => {
    if (mql.matches) {
        menu.style.display = 'flex';
    }
});

document.querySelector('#button_oSzkole').addEventListener('click', openSubMenu(button_oSzkole));
document.querySelector('#button_kandydaci').addEventListener('click', openSubMenu(button_kandydaci));
document.querySelector('#button_uczniowie').addEventListener('click', openSubMenu(button_uczniowie));
document.querySelector('#button_rodzice').addEventListener('click', openSubMenu(button_rodzice));

/* Jeżeli naciśniemy poza menu ma się zamknąć */
document.addEventListener('click', (event) => {
    if (
        (event.target.id !== 'button_menu') &&
        (event.target.id !== 'button_oSzkole') &&
        (event.target.id !== 'button_kandydaci') &&
        (event.target.id !== 'button_uczniowie') &&
        (event.target.id !== 'button_rodzice')
    ) {
        hide(subMenu)();
    }
});


