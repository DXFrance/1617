$(document).ready(function () {
      $('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'Cognitive Services',
                    image: 'images/cardslogo/azure.png',
                    content: 'Offrez de l\'intelligence à vos projets : détection des visages, des émotions, reconnaissance et synthèse vocale, interprétation du language … 22 API à votre disposition !',
                    list: [
                           {
                            link: 'https://experiences.microsoft.fr/channel/cognitive-services-offrez-de-lintelligence-a-vos-applications/f2a617ea-9852-4fbb-b971-373d35fb0456#iXI6S3fPK1pGC6Mh.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://www.microsoft.com/cognitive-services/en-us/apis',
                    type: 'build',
                    label: 'Offrez la voix et la vue à votre carte'
                },
               {
                    title: 'Azure Web Apps',
                    image: 'images/cardslogo/azure.png',
                    content: 'Commencez par connecter votre carte pour lui faire découvrir un nouveau monde.',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/services/app-service/web/',
                    type: 'build',
                    label: 'Envoyez et traitez simplement vos données sur le web'
                },

                    {
                    title: 'IoT Hub',
                    image: 'images/cardslogo/azure.png',
                    content: 'Connectez, surveillez et contrôlez des millions de ressources IoT.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/iot-hub/',
                    type: 'outil',
                    label: 'Connectez plein de ressources IoT'
                },

                        {
                    title: 'Machine Learning',
                    image: 'images/cardslogo/azure.png',
                    content: 'Puissant outil de Machine Learning dans le cloud.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/machine-learning/',
                    type: 'outil',
                    label: 'Prédisez le futur'
                },
                  {
                    title: 'SQL Database',
                    image: 'images/cardslogo/azure.png',
                    content: 'Stocker de manière durable vos données dans le cloud grâce à un service disponible et évolutif.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/sql-database/',
                    type: 'outil',
                    label: 'Stocker la donnée'
                },
                    {
                    title: 'Stream Analytics',
                    image: 'images/cardslogo/azure.png',
                    content: 'Analyser des flux de données à chaud, à partir de millions d’appareils IoT.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/stream-analytics/',
                    type: 'outil',
                    label: 'Traiter les données en temps réel'
                },
                    {
                    title: 'Concentrateurs de notification',
                    image: 'images/cardslogo/azure.png',
                    content: 'Moteur de notifications Push évolutif permettant d’envoyer rapidement des messages.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/notification-hubs/',
                    type: 'outil',
                    label: 'Envoyer rapidement des notifications push.'
                },
                  {
                    title: 'PowerBI',
                    image: 'images/cardslogo/azure.png',
                    content: 'Visualisez vos données sur une interface qui roxx du poney, avec notamment des diagrammes de flux.',
                    list: [ ],
                    link: 'https://powerbi.microsoft.com/fr-fr/',
                    type: 'outil',
                    label: 'Visualisez vos données facilement'
                },
                 {
                    title: 'Windows 10 IoT Core',
                    image: 'images/cardslogo/azure.png',
                    content: 'La solution qu\'il vous faut pour faire tourner des apps Windows 10 UWP sur Raspberry, Arduino ou Minowboard.',
                    list: [
                        {
                        link: 'https://www.hackster.io/windowsiot',
                        list: 'Démos',
                        icon: 'fa-film'
                         },
                     ],
                    link: 'https://developer.microsoft.com/en-us/windows/iot/',
                    type: 'plateforme',
                    label: 'Faire tourner des apps Windows 10'
                },
                 {
                    title: 'Windows Virtual Shield pour Arduino',
                    image: 'images/cardslogo/azure.png',
                    content: 'Cette extension fourni La possibilité d’utiliser un téléphone sous Windows comme capteur et de le connecter en bluetooth avec votre carte Arduino.',
                    list: [ ],
                    link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native',
                    type: 'plateforme',
                    label: 'Utiliser les capteurs de son téléphone'
                },
                 {
                    title: 'Windows Remote pour Arduino',
                    image: 'images/cardslogo/azure.png',
                    content: 'Contrôler, directement depuis Windows et à distance, sa carte.',
                    list: [ ],
                    link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native',
                    type: 'plateforme',
                    label: 'Controler sa carte à distance'
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
                $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="'+ cards[i].image +'" alt="'+ cards[i].label +'"> <span>'+ cards[i].label +'</span> </div> <div class="card-content"> <div class="card-content-div"> <div class="card-abs"><div class="sep"></div><a target="_blank" href="'+ cards[i].link +'" title="'+ cards[i].title +'">En savoir plus</a> '+ cards[i].list_html +'</div> <span class="label">' + cards[i].title +'</span>'+ cards[i].content +' </div> </div> </div> </div> </div> </div>');
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
