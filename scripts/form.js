const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];


function populateProductOptions() {
  const selectElement = document.getElementById('product-name');
  
 
  selectElement.innerHTML = '<option value="" disabled selected>Select a Product ...</option>';
  

  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
  });
}


document.addEventListener('DOMContentLoaded', populateProductOptions);


function updateReviewCounter() {
  
  let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
  
  
  reviewCount++;
  
  
  localStorage.setItem('reviewCount', reviewCount);
  
 
  const counterElement = document.getElementById('review-counter');
  if (counterElement) {
      counterElement.textContent = `Total Reviews Completed: ${reviewCount}`;
  }
}


document.addEventListener('DOMContentLoaded', updateReviewCounter);

var currentyear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;

document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModifiedDate;