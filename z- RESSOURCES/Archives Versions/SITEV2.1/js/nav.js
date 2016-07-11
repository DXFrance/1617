$(document).ready(function () {

    $('#menu-button').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $('#cache').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $('div.content ul li a').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $(window).scroll(function (e) {
        e.preventDefault;


    })

    $('.btn-explorer').click(function() {
      $('html, body').animate({
          scrollTop: $("#content_with_pictures_1").offset().top
       }, 500);
    });

});
