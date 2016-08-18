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
          scrollTop: $("#services-menu").offset().top-55
       }, 500);
    });


    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $('nav .content a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('nav .content a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = "div#" + $(this).data("menu"),
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $("div#" + $(this).data("menu")).offset().top - 150
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('nav .content a').each(function () {
            var currLink = $(this);
            var refElementTop = $("div#" + currLink.data("menu")).position().top - 300;
            var refElementHeight = $("div#" + currLink.data("menu")).height();
            if (refElementTop <= scrollPos && refElementTop + refElementHeight > scrollPos) {
                $('nav .content a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
});

    $('.btn-explorer').click(function() {
      $('html, body').animate({
          scrollTop: $("#content_with_pictures_1").offset().top
       }, 500);
    });


    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $('nav .content a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('nav .content a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = "div#" + $(this).data("menu"),
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $("div#" + $(this).data("menu")).offset().top - 83
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('nav .content a').each(function () {
            var currLink = $(this);
            var refElementTop = $("div#" + currLink.data("menu")).position().top;
            var refElementHeight = $("div#" + currLink.data("menu")).height();
            console.log(refElementTop);
            if (refElementTop <= scrollPos && refElementTop + refElementHeight > scrollPos) {
                $('nav .content a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
});
