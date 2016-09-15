$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'Angular 2',
                    image: 'images/cardslogo/angular.png',
                    content: 'Découvrez comment construire des applications en profitant des dernières fonctionalités du web moderne.',
                    list: [
                       
                    ],
                    link: 'https://angular.io/',
                    type: 'build',
                    label: 'Créez des applications riches'
                },
                {
                    title: 'TypeScript',
                    image: 'images/cardslogo/ts.png',
                    content: 'Profitez de l\'efficacité d\'un language typé pour générer du javascript moderne.',
                    list: [
                        
                    ],
                    link: 'http://www.typescriptlang.org/',
                    type: 'build',
                    label: 'Le futur de javascript, aujourd\'hui'
                }, 
                        {
                    title: 'React',
                    image: 'images/cardslogo/react.png',
                    content: 'La librairie légère qui permet de créer des intefaces web modulaires.',
                    list: [],
                    link: 'https://facebook.github.io/react/',
                    type: 'build',
                    label: 'L\'efficacité à son maximum'
                },
                {
                    title: 'Babylon.js',
                    image: 'images/cardslogo/babylon.png',
                    content: 'Le framework qui vous permet d\'utiliser WebGL pour obtenir une expérience 3D digne d\'un jeu vidéo.',
                    list: [
                       
                        {
                            link: 'https://xboxdesignlab.xbox.com/en-US/customize',
                            list: 'Exemple',
                            icon: 'fa-download'
                        },
                        ],
                    link: 'http://babylonjs.com/',
                    type: 'build',
                    label: 'La 3D dans le navigateur sans plugin'
                },
           
                 {
                    title: 'Microsoft EDGE',
                    image: 'images/cardslogo/edge.png',
                    content: 'Pensé dans le but de simplifier la vie des developpeurs.',
                    list: [],
                    link: 'https://www.microsoft.com/fr-fr/windows/microsoft-edge',
                    type: 'build',
                    label: 'Un navigateur créé pour le web moderne'
                },
                     {
                    title: 'best practice',
                    image: 'images/cardslogo/lwm.png',
                    content: 'Aujourd\'hui le web est suffisament mature pour qu\'un ensemble de bonnes pratiques émergent. En les respectant vous assurez la pérénité de votre site.',
                    list: [],
                    link: 'http://www.lewebmoderne.fr/',
                    type: 'build',
                    label: 'Développez pour le web moderne'
                },

                    {
                    title: 'React Native',
                    image: 'images/cardslogo/react.png',
                    content: 'Vous permet de construire des applications en utilisant Javascript et React. Le tout en bénéficiant de la puissance de la techno sous-jacente.',
                    list: [
                         
                    ],
                    link: 'https://facebook.github.io/react-native/',
                    type: 'outil',
                    label: 'Le web au service du natif'
                },

                        {
                    title: 'Addins office',
                    image: 'images/cardslogo/office.png',
                    content: 'Développez des addins pour office en mode web pour toutes les plateformes et les devices.',
                    list: [ ],
                    link: 'http://dev.office.com/',
                    type: 'outil',
                    label: 'Etendez les possibilités d\'office'
                },
                 {
                    title: 'Manifold.js',
                    image: 'images/cardslogo/manifold.png',
                    content: 'Packagez votre application web de manière simple pour créer des applications natives Cordova ou Hosted Web App.',
                    list: [ ],
                    link: 'http://manifoldjs.com/',
                    type: 'outil',
                    label: 'Transformez votre site web en application'
                },
                    {
                    title: 'Visual studio code',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Un éditeur de code léger, open source et cross plateforme. Le tout avec des fonctionnalités de débogage, une intégration Git et un système d’extensions.',
                    list: [ ],
                    link: 'https://code.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Un éditeur de code tout neuf !'
                },
                    {
                    title: 'Vorlon.js',
                    image: 'images/cardslogo/vorlon.png',
                    content: 'Découvrez une alternative aux outils de développement F12 qui fonctionnent vers n\'importe quel navigateur à travers le réseau. Déboguez à distance téléphones, tablettes et autres voitures connectées.',
                    list: [
                    ],
                    link: 'http://vorlonjs.io/',
                    type: 'plateforme',
                    label: 'Déboguez votre site web, partout'
                },
                  {
                    title: 'Visual studio',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Utilisez le meilleur IDE du marché pour développer votre site web en utilisant les dernières technologies ASP.NET.',
                    list: [ ],
                    link: 'https://www.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Un éditeur professionel pour votre site web'
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
