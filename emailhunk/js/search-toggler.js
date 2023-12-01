
let width = window.innerWidth;
// SEARCH HEADER
let searchToggler = document.querySelector('.search-toggler');
let iconXmGlass = document.querySelector('.search-toggler i');
let searchInput = document.querySelector('.search-input');
searchToggler.addEventListener('click', function(){      
  searchInput.classList.toggle('show-hide');
  iconXmGlass.classList.toggle('fa-x');
});

// LIGHTGALLERY
let gallery = document.getElementById('light-gallery');
lightGallery(gallery, {
  controles: true,
  download: false
});