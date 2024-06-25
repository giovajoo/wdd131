var currentyear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;

document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModifiedDate;
