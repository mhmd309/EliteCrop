$(function () {
    'use strict';
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    //Featured Work (Shuffle-Images)
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'All') {
            $('.shuffle-image .col-md').css('opacity', 1);
        } else {
            $('.shuffle-image .col-md').css('opacity', '.05');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});
