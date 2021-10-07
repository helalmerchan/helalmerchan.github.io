// SCROLLUP
$(function() {
    $.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>',
    });
});

$('.owlcarousel-1').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});







$('.has-border-after, .we-buy').hover(function() {
    $('.we-buy').toggleClass('active-border');
    $('.has-border-after').toggleClass('active-border2');
});



var breakpoint = 751;
var sf = $('.sf-menu-sm');

if ($(document).width() >= breakpoint) {
    sf.superfish({
        delay: 200,
        speed: 'slow'
    });
}

$(window).resize(function() {
    if ($(document).width() >= breakpoint & !sf.hasClass('sf-js-enabled')) {
        sf.superfish({
            delay: 200,
            speed: 'slow'
        });
    } else if ($(document).width() < breakpoint) {
        sf.superfish('destroy');
    }
});





$('.hamburger-icon').click(function() {
    $(this).toggleClass('line-active');
    $('.toggle-menu').slideToggle(400, function() {
        $(this).toggleClass('nav-expended').css('display', '');
    });
});