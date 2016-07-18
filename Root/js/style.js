
    var sections = [];

    $("body").find("section").each(function () {
        sections.push(this.id);
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

    if($('footer')){

        $('footer').waypoint(function () {
            if ($('.firstTransition')) {
                setTimeout(function () {
                    $('footer .transitionFadeIn.firstTransition').addClass('animated fadeIn');
                    $('footer .transitionFadeInDown.firstTransition').addClass('animated fadeInDown');
                    $('footer .transitionFadeInUp.firstTransition').addClass('animated fadeInUp');
                    $('footer .transitionFadeInLeft.firstTransition').addClass('animated fadeInLeft');
                    $('footer .transitionFadeInRight.firstTransition').addClass('animated fadeInRight');
                    $('footer .transitionBounceIn.firstTransition').addClass('animated bounceIn');
                    $('footer .transitionBounceInLeft.firstTransition').addClass('animated bounceInLeft');
                    $('footer .transitionBounceInRight.firstTransition').addClass('animated bounceInRight');
                }, 0);
            }


            if ($('.secondTransition')) {
                setTimeout(function () {
                    $('footer .transitionFadeIn.secondTransition').addClass('animated fadeIn');
                    $('footer .transitionFadeInDown.secondTransition').addClass('animated fadeInDown');
                    $('footer .transitionFadeInUp.secondTransition').addClass('animated fadeInUp');
                    $('footer .transitionFadeInLeft.secondTransition').addClass('animated fadeInLeft');
                    $('footer .transitionFadeInRight.secondTransition').addClass('animated fadeInRight');
                    $('footer .transitionBounceIn.secondTransition').addClass('animated bounceIn');
                    $('footer .transitionBounceInLeft.secondTransition').addClass('animated bounceInLeft');
                    $('footer .transitionBounceInRight.secondTransition').addClass('animated bounceInRight');
                }, 600);
            }

        }, { offset: '85%' });

    }

    $.each(sections, function (index, value) {

        $('section#' + value).waypoint(function () {

            if (value == 'counters') {

                var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: '.',
                    decimal: ',',
                    prefix: '',
                    suffix: '',
                }


                if ($('#counter1').length > 0) {

                    var counter1 = new countUp("counter1", 0, 2007, 0, 2, options);
                    counter1.start();
                    $("#counter1").removeAttr("id");

                }

                if ($('#counter2').length > 0) {

                    var counter2 = new countUp("counter2", 0, 2007, 0, 2, options);
                    counter2.start();
                    $("#counter2").removeAttr("id");

                }

                if ($('#counter3').length > 0) {

                    var counter3 = new countUp("counter3", 0, 2007, 0, 2, options);
                    counter3.start();
                    $("#counter3").removeAttr("id");

                }

            }

            if ($('section#' + value + ' .firstTransition')) {
                setTimeout(function () {
                    $('section#' + value + ' .transitionFadeIn.firstTransition').addClass('animated fadeIn');
                    $('section#' + value + ' .transitionFadeInDown.firstTransition').addClass('animated fadeInDown');
                    $('section#' + value + ' .transitionFadeInUp.firstTransition').addClass('animated fadeInUp');
                    $('section#' + value + ' .transitionFadeInLeft.firstTransition').addClass('animated fadeInLeft');
                    $('section#' + value + ' .transitionFadeInRight.firstTransition').addClass('animated fadeInRight');
                    $('section#' + value + ' .transitionBounceIn.firstTransition').addClass('animated bounceIn');
                    $('section#' + value + ' .transitionBounceInLeft.firstTransition').addClass('animated bounceInLeft');
                    $('section#' + value + ' .transitionBounceInRight.firstTransition').addClass('animated bounceInRight');
                }, 0);
            }


            if ($('section#' + value + ' .secondTransition')) {
                setTimeout(function () {
                    $('section#' + value + ' .transitionFadeIn.secondTransition').addClass('animated fadeIn');
                    $('section#' + value + ' .transitionFadeInDown.secondTransition').addClass('animated fadeInDown');
                    $('section#' + value + ' .transitionFadeInUp.secondTransition').addClass('animated fadeInUp');
                    $('section#' + value + ' .transitionFadeInLeft.secondTransition').addClass('animated fadeInLeft');
                    $('section#' + value + ' .transitionFadeInRight.secondTransition').addClass('animated fadeInRight');
                    $('section#' + value + ' .transitionBounceIn.secondTransition').addClass('animated bounceIn');
                    $('section#' + value + ' .transitionBounceInLeft.secondTransition').addClass('animated bounceInLeft');
                    $('section#' + value + ' .transitionBounceInRight.secondTransition').addClass('animated bounceInRight');
                }, 600);
            }


        }, { offset: '50%'});

    });


    var picturesGallery = $("#pictures-gallery");

    picturesGallery.owlCarousel({

        items: 5,
        autoWidth: true,
        navigation: false,
        merge: true,
        itemsDesktop: [1350, 5],
        itemsDesktopSmall: [1199, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: [680, 1],
        itemsMobile: [480, 1],


    });

    var partnersLogo = $("#partners-logo");

    partnersLogo.owlCarousel({

        items: 5,
        autoWidth: true,
        navigation: false,
        itemsDesktop: [1350, 5],
        itemsDesktopSmall: [1199, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: [680, 1],
        itemsMobile: [480, 1],
        autoPlay: 3000,
        pagination: false,
        merge: true,


    });


    var partnersLogoCopy = $("#partners-logoCopy");

    partnersLogoCopy.owlCarousel({

        items: 5,
        autoWidth: true,
        navigation: false,
        itemsDesktop: [1350, 5],
        itemsDesktopSmall: [1199, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: [680, 1],
        itemsMobile: [480, 1],
        autoPlay: 3000,
        pagination: false,
        merge: true,


    });

    $('div.pane').scrollTo(0);
    $.scrollTo(0);


    $(window).scroll(function(){
      checkHeader();
    });

    var checkHeader = function () {
      var height_header = $('#header').height();
       if ($(this).scrollTop() > height_header) {
           $('div.sticky-wrapper.is-sticky nav').show('drop', { direction: 'up' }, 400);
       } else {
           $('div.sticky-wrapper.is-sticky nav').hide('drop', { direction: 'up' }, 400);
       }
    }

});
