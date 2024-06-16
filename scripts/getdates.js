document.addEventListener('DOMContentLoaded', function() {
    let currentYearElement = document.getElementById('currentYear');
    
    
    let currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

   
    let lastModifiedElement = document.getElementById('lastModifiedDate');
    
  
    let lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
});

