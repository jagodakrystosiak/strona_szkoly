var subMenu = document.querySelector('#subMenu');
var button_oSzkole = document.querySelector('#button_oSzkole');
var button_kandydaci = document.querySelector('#button_kandydaci');
var button_uczniowie = document.querySelector('#button_uczniowie');
var button_rodzice = document.querySelector('#button_rodzice');

var menus = {
    oSzkole: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Historia</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Pracownicy</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Dokumenty</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Deklaracja dostępności</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">RODO</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Przydatne linki</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Bezpieczny internet</a></li>
        </ul>
    </div>
    `,
    kandydaci: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Rekrutacja 2022/2023</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Rekrutacja 2021/2022</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Dokumenty szkoły</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Sekretariat</a></li>
        </ul>
    </div>
    `,
    uczniowie: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Plan lekcji</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Kalendarz szkolny</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Dzwonki</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Konkursy</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Konsultacje</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Samorząd uczniowski</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">E8 - Egzamin ósmoklasisty</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Doradztwo</a></li>
        </ul>
    </div>
    `,
    rodzice: `
    <div class="navbar">
        <ul class="list-unstyled navbar-nav">
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Plan lekcji</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Kalendarz szkolny</a></li>
            <li class="nav-item"><a class="nav-link c-navigation__link c-navigation__link--warning" href="#">Dzwonki</a></li>
        </ul>
    </div>
    `
};

const show = (elem) => {
    return function () {
        elem.classList.add('flex');
        elem.classList.remove('hidden');
    }
}

const hide = (elem) => {
    return function () {
        elem.classList.add('hidden');
        elem.classList.remove('flex');
    }
}

const openMenu = (elem) => {
    return function () {
        if (subMenu.classList.contains('hidden')) {
            show(subMenu)();
            switch (elem) {
                case button_oSzkole:
                    subMenu.innerHTML = menus.oSzkole;
                    subMenu.classList.add('c-subnavigation--success');
                    break;
                case button_kandydaci:
                    subMenu.innerHTML = menus.kandydaci;
                    subMenu.classList.add('c-subnavigation--warning');
                    break;
                case button_uczniowie:
                    subMenu.innerHTML = menus.uczniowie;
                    subMenu.classList.add('c-subnavigation--info');

                    break;
                case button_rodzice:
                    subMenu.innerHTML = menus.rodzice;
                    subMenu.classList.add('c-subnavigation--primary');
                    break;
            }

        }
        else {
            hide(subMenu)();
            subMenu.innerHTML = ' ';
            subMenu.classList.remove('c-subnavigation--info');
            subMenu.classList.remove('c-subnavigation--success');
            subMenu.classList.remove('c-subnavigation--warning');
            subMenu.classList.remove('c-subnavigation--primary');
        }
    }
}

document.querySelector('#button_oSzkole').addEventListener('click', openMenu(button_oSzkole));
document.querySelector('#button_kandydaci').addEventListener('click', openMenu(button_kandydaci));
document.querySelector('#button_uczniowie').addEventListener('click', openMenu(button_uczniowie));
document.querySelector('#button_rodzice').addEventListener('click', openMenu(button_rodzice));
