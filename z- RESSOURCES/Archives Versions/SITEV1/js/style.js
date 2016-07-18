$(document).ready(function () {
            var cards = [
                {
                    title: 'Microsoft graph',
                    image: 'images/cardslogo/office.png',
                    content: 'Accédez à toutes les APIs d’Office 365 depuis un point d’entrée unique pour enrichir vos applications !',
                    list: [
                        {
                            link: 'https://experiences.microsoft.fr/channel/le-microsoft-graph-ou-comment-developper-en-utilisant-ce-big-data-de-lorganisation/ebab200a-4fbf-4f6c-8b33-26f52c56e023#EjoYTR3PPRDkPlPl.97',
                            list: 'Vidéo de présentation',
                            icon: 'fa-film'
                        },
                        {
                            link: 'https://mva.microsoft.com/fr-fr/training-courses/dvelopper-avec-le-microsoft-graph-16293?l=ClJag4ZNC_7105192810',
                            list: 'Cours',
                            icon: 'fa-graduation-cap'
                        }
                    ],
                    link: 'https://graph.microsoft.io',
                    type: 'build'
                },
                {
                    title: 'Bing Map platform',
                    image: 'images/cardslogo/bing.png',
                    content: 'De nombreuses APIs pour intégrer une dimention spaciale et géographique dans vos applications : Geocoding, calcul d\'itinéraire, cartographie, cartes routières, et plus encore.',
                    list: [],
                    link: 'https://www.microsoft.com/maps/choose-your-bing-maps-API.aspx',
                    type: 'build'
                },
                {
                    title: 'Azure Mobile Apps',
                    image: 'images/cardslogo/azure.png',
                    content: 'Mobile Apps tire parti des fonctionnalités d’Azure App Service pour ajouter la connexion, les notifications Push et la synchronisation des données à votre application mobile.',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/documentation/learning-paths/appservice-mobileapps/',
                    type: 'build'
                },
                  {
                    title: 'Microsoft Translator',
                    image: 'images/cardslogo/translator.png',
                    content: 'Une API de traduction automatique de texte et voix sur le Cloud (Machine Translation). Elle supporte plus de 50 langages pour la traduction de textes et 8 pour la voix.',
                    list: [],
                    link: 'https://www.microsoft.com/en-us/translator/default.aspx',
                    type: 'build'
                },
                   {
                    title: 'Microsoft Band',
                    image: 'images/cardslogo/band.png',
                    content: 'Le SDK Microsoft Band vous permet de créez une application pour Microsoft Band et Microsoft Health. Accédez aux capteurs du bracelet, tirez parti des données et et envoyez des notifications.',
                    list: [],
                    link: 'http://developer.microsoftband.com/',
                    type: 'build'
                },
                {
                    title: 'Groove Service',
                    image: 'images/cardslogo/groove.svg',
                    content: 'Un programme d\'affiliation musical qui vous permet d\'accéder à une large bibliothèque de musique en streaming. Vous pouvez également récupérer les pochettes d\'album et des informations sur les artistes et morceaux.',
                    list: [],
                    link: 'https://music.microsoft.com/developer?NewToGroove=true',
                    type: 'build'
                },
                {
                    title: 'Xamarin test cloud',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Testez votre application automatiquement sur plus de 2000 devices dans le cloud. Trouvez des bugs rapidement. Effectuez des tests de charge et d\'interface, et bénéficiez d\'un rapport détaillé.',
                    list: [],
                    link: 'https://www.microsoft.com/maps/choose-your-bing-maps-API.aspx',
                    type: 'test'
                },
                {
                    title: 'HockeyApp',
                    image: 'images/cardslogo/hockeyapp.png',
                    content: 'Développez, distribuez et testez vos applications mobiles. Recueillez les commentaires de vos utilisateurs depuis l\'application elle-même, obtenez des rapports sur les incidents en direct, etc...',
                    list: [],
                    link: 'https://www.hockeyapp.net/features/',
                    type: 'test'
                },
                 {
                    title: 'Microsoft Intune',
                    image: 'images/cardslogo/windows.png',
                    content: 'Gérer des applications, des PCs et des périphériques mobiles depuis le cloud, tout en garantissant la sécurité des informations.',
                    list: [],
                    link: 'https://www.microsoft.com/fr-fr/server-cloud/products/microsoft-intune/Features.aspx',
                    type: 'test'
                },
            ];
            
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].list.length) {
                    cards[i].list_html = '<div class="sep"></div><ul>';
                    for (var z = 0; z < cards[i].list.length; z++) {
                        cards[i].list_html += '<li><a href="'+ cards[i].list[z].link +'" title="'+ cards[i].list[z].list +'"><i class="fa '+ cards[i].list[z].icon +'"></i>'+ cards[i].list[z].list +'</li>';
                    }
                    cards[i].list_html += '</ul>';
                    
                } else {
                    cards[i].list_html = '';
                }
                $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="'+ cards[i].image +'" alt="'+ cards[i].title +'"> <span>'+ cards[i].title +'</span> </div> <div class="card-content"> <div class="card-content-div"> '+ cards[i].content +' '+ cards[i].list_html +' </div> </div> <div class="card-bottom"> <div> <a target="_blank" href="'+ cards[i].link +'" title="'+ cards[i].title +'">En savoir plus <i class="fa fa-chevron-right"></i></a> </div> </div> </div> </div>');
            }
            cardShowed = false;
            var targetOffset = $(".card").offset().top - 370;

            $w = $(window).scroll(function() {
                if(cardShowed){ return; }
                if ( $w.scrollTop() > targetOffset ) {   
                    cardShowed = true;
                    $('.card .card-top span').css('top', 0);
                    $('.card .card-content').css('height', 240);
                    setTimeout(function() {
                        $('.card .card-bottom').css('height', 40);
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

    $('nav a').click(function () {
        $.scrollTo("section#" + $(this).attr("class"), 800, {margin:false, queue: true });
        return false;
    });

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
