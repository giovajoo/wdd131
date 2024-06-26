var currentyear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;

document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModifiedDate;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click',() => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});