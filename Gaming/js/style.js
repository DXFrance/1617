$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'UWP (Universal Windows Platform)',
                    image: 'images/cardslogo/azure.png',
                    content: 'La plateforme contient une collection d\'API communes pour tous vos développements windows. Plus d\'outils et d\'options pour une experience optimale sur chaque appareil.',
                    list: [
                           {
                            link: 'https://channel9.msdn.com/Events/GDC/GDC-2015/The-Future-of-Gaming-Across-the-Microsoft-Ecosystem',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },

                    ],
                    link: 'https://msdn.microsoft.com/windows/uwp/gaming/e2e',
                    type: 'build',
                    label: 'Une seule manière de développer'
                },
               {
                    title: 'ID @ XBOX',
                    image: 'images/cardslogo/azure.png',
                    content: 'Permet aux studios de toute taille et aux indépendants de libérer leur créativité en publiant leurs contenus digitaux sur Windows 10 et sur Xbox One par le Xbox Live.',
                    list: [
                        {
                            link: 'https://youtu.be/NAWouIYfK7w',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'http://www.xbox.com/en-us/developers/id',
                    type: 'build',
                    label: 'Pour les développeurs indépendants'
                },
                {
                    title: '',
                    image: 'images/cardslogo/office.png',
                    content: 'Chiffres sur le store.',
                    list: [

                    ],
                    link: 'https://graph.microsoft.io',
                    type: 'build',
                    label: 'Un store riche en opportunités'
                }, /*
                {
                    title: 'Bing Map platform',
                    image: 'images/cardslogo/bing.png',
                    content: 'De nombreuses APIs pour intégrer une dimention spaciale et géographique dans vos applications : Geocoding, calcul d\'itinéraire, cartographie, cartes routières, et plus encore.',
                    list: [],
                    link: 'https://www.microsoft.com/maps/choose-your-bing-maps-API.aspx',
                    type: 'build',
                    label: 'Créer'
                },

                  {
                    title: 'Microsoft Translator',
                    image: 'images/cardslogo/translator.png',
                    content: 'Une API de traduction automatique de texte et voix sur le Cloud (Machine Translation). Elle supporte plus de 50 langages pour la traduction de textes et 8 pour la voix.',
                    list: [],
                    link: 'https://www.microsoft.com/en-us/translator/default.aspx',
                    type: 'build',
                    label: 'Créer'
                },
                {
                    title: 'Groove Service',
                    image: 'images/cardslogo/groove.svg',
                    content: 'Intégrez de la musique dans votre application. Accéder au catalogue musical de Groove et en particulier sa riche banque d\'images.',
                    list: [],
                    link: 'https://music.microsoft.com/developer?NewToGroove=true',
                    type: 'build',
                    label: 'Créer'
                }, */

              {
                    title: 'Visual Studio',
                    image: 'images/cardslogo/vsts.png',
                    content: 'La Rolls des IDE :-) Quels que soient vos projets de jeu, il sera votre ami pour la vie.',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'Un IDE complet pour vos projets.'
                },

                    {
                    title: 'DirectX 12',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Plus d\'objets, des scènes plus riches, des effets améliorés pour le matériel le plus récent.',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'outil',
                    label: 'Des graphismes de fou.'
                },

             {
                    title: 'Microsoft AZURE',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Puissance, élasticité et agilité: au service de l\'hébergement et du déploiment multiplayer, de l\'intelligence de vos jeux et d\'optimisation de vos coûts.',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'Exploitez la puissance du cloud.'
                },







                    {
                    title: 'VR',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Sur HTC Vive ou Oculus Rift, créez de nouvelles expériences grâce à Windows.',
                    list: [{
                            link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools',
                            list: 'HTC',
                            icon: 'fa-download'
                        },{
                            link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools',
                            list: 'Oculus',
                            icon: 'fa-download'
                        }, ],
                    link: 'https://www3.oculus.com/en-us/rift/',
                    type: 'plateforme',
                    label: 'Windows <3 VR'
                },
                    {
                    title: 'HoloLens',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Offrez des expriences de jeu étendues et inédites grace à la réalité mixte.',
                    list: [

                    ],
                    link: 'https://www.visualstudio.com/fr-fr/features/cordova-vs.aspx',
                    type: 'plateforme',
                    label: 'Des jeux au-delà l\'écran'
                }
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

    var resizeTools = function() {
      $('#items .tool div').each(function() {
        console.log($(this).width());
        $(this).css('height', $(this).parent().width() + 'px')
      });
    };

    $(window).on('resize', resizeTools);

    resizeTools();

});
