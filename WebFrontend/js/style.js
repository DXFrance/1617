$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'Angular 2',
                    image: 'images/cardslogo/vsts.png',
                    content: 'LOREM IPSUM.',
                    list: [
                                                {
                            link: 'https://experiences.microsoft.fr/channel/le-microsoft-graph-ou-comment-developper-en-utilisant-ce-big-data-de-lorganisation/ebab200a-4fbf-4f6c-8b33-26f52c56e023#EjoYTR3PPRDkPlPl.97',
                            list: 'Typescript',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/documentation/learning-paths/appservice-mobileapps/',
                    type: 'build',
                    label: 'Angular 2'
                },
                {
                    title: 'React',
                    image: 'images/cardslogo/office.png',
                    content: 'LOREM IPSUM.',
                    list: [
                        {
                            link: 'https://experiences.microsoft.fr/channel/le-microsoft-graph-ou-comment-developper-en-utilisant-ce-big-data-de-lorganisation/ebab200a-4fbf-4f6c-8b33-26f52c56e023#EjoYTR3PPRDkPlPl.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                        
                    ],
                    link: 'https://graph.microsoft.io',
                    type: 'build',
                    label: 'Type Script'
                }, 
                        {
                    title: 'React',
                    image: 'images/cardslogo/hockeyapp.png',
                    content: 'LOREM IPSUM.',
                    list: [],
                    link: 'https://www.hockeyapp.net/features/',
                    type: 'build',
                    label: 'React'
                },
                {
                    title: 'X',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'LOREM IPSUM.',
                    list: [],
                    link: 'https://www.microsoft.com/maps/choose-your-bing-maps-API.aspx',
                    type: 'build',
                    label: 'Babylon js'
                },
           
                 {
                    title: 'EDGE',
                    image: 'images/cardslogo/vsts.png',
                    content: 'On renvoie vers Alsacréation.',
                    list: [],
                    link: 'https://www.visualstudio.com/fr-fr/products/visual-studio-team-services-vs.aspx',
                    type: 'build',
                    label: 'EDGE'
                },
                     {
                    title: 'best practice',
                    image: 'images/cardslogo/azure.png',
                    content: 'Peut être pas cohérent de mettre ça ici sachant que l\'on a le formulaire à la place du header',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/services/mobile-engagement/',
                    type: 'build',
                    label: 'Best practice/conformité (link)'
                },

                    {
                    title: 'titre',
                    image: 'images/cardslogo/vsts.png',
                    content: 'LOREM IPSUM.',
                    list: [
                          {
                            link: 'http://aka.ms/vscomemudownload',
                            list: 'Télécharger',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'https://www.visualstudio.com/fr-fr/features/msft-android-emulator-vs.aspx',
                    type: 'outil',
                    label: 'React Native'
                },

                        {
                    title: 'titre',
                    image: 'images/cardslogo/vsts.png',
                    content: 'LOREM.',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'Admin office'
                },
                 {
                    title: 'titre',
                    image: 'images/cardslogo/vsts.png',
                    content: 'LOREM.',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'MariSold.js'
                },
                    {
                    title: 'Visual studio code',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Un éditeur de code léger, open source et cross plateforme. Le tout avec des fonctionnalités de débogage, une intégration Git et un système d’extensions.',
                    list: [ ],
                    link: 'https://www.visualstudio.com/fr-fr/features/xamarin-vs.aspx',
                    type: 'plateforme',
                    label: 'Un éditeur de code tout neuf !'
                },
                    {
                    title: 'titre',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Téléchargez-là dès maintenant !',
                    list: [
                        {
                            link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools',
                            list: 'VSCode',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'https://www.visualstudio.com/fr-fr/features/cordova-vs.aspx',
                    type: 'plateforme',
                    label: 'Vorlonjs'
                },
                  {
                    title: 'titre',
                    image: 'images/cardslogo/vsts.png',
                    content: 'LOREM.',
                    list: [ ],
                    link: 'https://www.visualstudio.com/fr-fr/features/cplusplus-mdd-vs.aspx',
                    type: 'plateforme',
                    label: 'VIsual studio'
                },
                 
            ];


            for (var i = 0; i < cards.length; i++) {
                if (cards[i].list.length) {
                    cards[i].list_html = '';
                    for (var z = 0; z < cards[i].list.length; z++) {
                        cards[i].list_html += '<a href="'+ cards[i].list[z].link +'" target="_blank" title="'+ cards[i].list[z].list +'">'+ cards[i].list[z].list +'</a>';
                    }
                    cards[i].list_html += '';

                } else {
                    cards[i].list_html = '';
                }
                $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="'+ cards[i].image +'" alt="'+ cards[i].label +'"> <span>'+ cards[i].label +'</span> </div> <div class="card-content"> <div class="card-content-div"> <div class="card-abs"><div class="sep"></div>'+ cards[i].list_html +'<a target="_blank" href="'+ cards[i].link +'" title="'+ cards[i].title +'">En savoir plus</a> </div> <span class="label">' + cards[i].title +'</span>'+ cards[i].content +' </div> </div> </div> </div> </div> </div>');
            }
            cardShowed = false;
            var targetOffset = $(".card").offset().top - 490;

            $w = $(window).scroll(function() {
                if(cardShowed){ return; }
                if ( $w.scrollTop() > targetOffset ) {
                    cardShowed = true;
                    $('.card .card-top span').css('top', 0);
                    $('.card .card-content').css('height', 210);
                    setTimeout(function() {
                        $('.card .card-bottom').css('height', 40);
                        $('.card .card-abs').css('opacity', 1);
                    }, 400);
                }
            });
    jQuery('img.icone').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

         jQuery.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');

            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }

            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            $img.replaceWith($svg);

            }, 'xml');
    });




    var sections = [];

    $("body").find("section").each(function () {
        sections.push(this.id);
    });


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
