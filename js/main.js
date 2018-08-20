(function($) {
  
  // SCROLLUP
  $(function(){
    $.scrollUp({
      scrollText: '<span class="glyphicon glyphicon-menu-up"></span>',    
    });
  });
  

  //HEADER FIXED AFTER SCROLL    
  var ht = $('.navbar-fixed-top');    
  var pos = ht.position();
  if (pos) {
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            ht.addClass('stuck');            
        } else{
            ht.removeClass('stuck');           
        }
    });
  }


  
  $('.owl-carousel').owlCarousel({
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });


  //SMOOTH SCROLL
  $(document).on('click', 'a[href^="#"]', function(evt){
      evt.preventDefault();
      $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 1000);
  });


  //VIDEO BACKGROUND
  $('.site-header').vidbg({      
      'mp4': 'videos/videobg.mp4',
      'poster': 'images/header-bg.jpg',
  }, {
    // Options
    // muted: true,
    // loop: false,
    overlay: true,
    overlayColor: '#030f17',
    overlayAlpha: '0.6',
  });



  // MIXITUP BTN FILTER
  var container = document.querySelector('[data-ref="container"]');
  var inputSearch = document.querySelector('[data-ref="input-search"]');
  var keyupTimeout;

  var mixer = mixitup(container, {
     animation: {
         duration: 350
     },
     callbacks: {
         onMixClick: function() {
             // Reset the search if a filter is clicked

             if (this.matches('[data-filter]')) {
                 inputSearch.value = '';
             }
         }
     }
  });

  // SET UP A HANDLER TO LISTEN FOR "KEYUP" EVENTS FROM THE SEARCH INPUT
  inputSearch.addEventListener('keyup', function() {
     var searchValue;

     if (inputSearch.value.length < 3) {
         // If the input value is less than 3 characters, don't send

         searchValue = '';
     } else {
         searchValue = inputSearch.value.toLowerCase().trim();
     }

     // Very basic throttling to prevent mixer thrashing. Only search
     // once 350ms has passed since the last keyup event

     clearTimeout(keyupTimeout);

     keyupTimeout = setTimeout(function() {
         filterByString(searchValue);
     }, 350);
  });

 /**
  * Filters the mixer using a provided search string, which is matched against
  * the contents of each target's "class" attribute. Any custom data-attribute(s)
  * could also be used.
  *
  * @param  {string} searchValue
  * @return {void}
  */

  function filterByString(searchValue) {
     if (searchValue) {
         // Use an attribute wildcard selector to check for matches

         mixer.filter('[class*="' + searchValue + '"]');
     } else {
         // If no searchValue, treat as filter('all')

         mixer.filter('all');
     }
  }

})(jQuery);