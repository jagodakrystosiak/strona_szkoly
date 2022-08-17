const day_week = document.querySelector('#dzien-tyg');
const day = document.querySelector('#dzien');
const month = document.querySelector('#miesiac');
const year = document.querySelector('#rok');

var date = new Date();

switch (date.getDay()) {
    case 1:
        day_week.innerHTML = 'poniedziałek';
        break;
    case 2:
        day_week.innerHTML = 'wtorek';
        break;
    case 3:
        day_week.innerHTML = 'środa';
        break;
    case 4:
        day_week.innerHTML = 'czwartek';
        break;
    case 5:
        day_week.innerHTML = 'piątek';
        break;
    case 6:
        day_week.innerHTML = 'sobota';
        break;
    case 7:
        day_week.innerHTML = 'niedziela';
        break;
}
day.innerHTML = date.getDate();
switch (date.getMonth()) {
    case 0:
        month.innerHTML = 'stycznia'
        break;
    case 1:
        month.innerHTML = 'lutego'
        break;
    case 2:
        month.innerHTML = 'marca'
        break;
    case 3:
        month.innerHTML = 'kwietnia'
        break;
    case 4:
        month.innerHTML = 'maja'
        break;
    case 5:
        month.innerHTML = 'czerwca'
        break;
    case 6:
        month.innerHTML = 'lipca'
        break;
    case 7:
        month.innerHTML = 'sierpnia'
        break;
    case 8:
        month.innerHTML = 'września'
        break;
    case 9:
        month.innerHTML = 'października'
        break;
    case 10:
        month.innerHTML = 'listopada'
        break;
    case 11:
        month.innerHTML = 'grudnia'
        break;
}
year.innerHTML = date.getFullYear();
