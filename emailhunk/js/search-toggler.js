
let width = window.innerWidth;
if(width >= 768){
    // SEARCH HEADER
    let searchToggler = document.querySelector('.search-toggler');
    let searchInput = document.querySelector('.search-input');
    searchToggler.addEventListener('click', function(){
        searchInput.classList.toggle('show-hide');
    });
}

// LIGHTGALLERY
let gallery = document.getElementById('light-gallery');
lightGallery(gallery, {
  controles: true,
  download: false
});