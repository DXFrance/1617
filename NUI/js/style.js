$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'Microsoft Design',
                    image: 'images/cardslogo/azure.png',
                    content: 'Retrouvez les fondamentaux du design Microsoft',
                    list: [
                        
                    ],
                    link: 'https://www.microsoft.com/en-us/design',
                    type: 'build',
                    label: 'La déclaration d\'intention du design Microsoft'
                },
               
                {
                    title: 'Guidelines Microsoft',
                    image: 'images/cardslogo/office.png',
                    content: 'Apprenez à concevoir et à coder l’interface utilisateur d’une application UWP.',
                    list: [
                     
                    ],
                    link: 'https://developer.microsoft.com/fr-fr/windows/design',
                    type: 'build',
                    label: 'Concevez des expériences enrichies'
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
                    title: 'Interfaces naturelles',
                    image: 'images/cardslogo/hockeyapp.png',
                    content: 'Interagissez avec votre matériel de manière plus naturelle plus productive et plus connectée grace aux intelligences artificielles.',
                    list: [{
                            link: 'https://www.microsoft.com/fr-fr/windows/Cortana',
                            list: 'Cortana',
                            icon: 'fa-download'
                        },{
                            link: 'https://dev.botframework.com/',
                            list: 'Bot Framework',
                            icon: 'fa-download'
                        },],
                    link: 'https://www.hockeyapp.net/features/',
                    type: 'test',
                    label: 'Le language humain au coeur de vos interfaces'
                },
                {
                    title: 'HoloLens',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Un moyen plus naturel d\'interagir avec le futur. Découvrez les interfaces holographiques.',
                    list: [],
                    link: 'https://www.microsoft.com/microsoft-hololens/en-us',
                    type: 'test',
                    label: 'De nouveaux mondes, de nouvelles interfaces'
                },
           
                

                    {
                    title: 'UWP',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Profitez de la puissance de vos devices Windows pour créer les interfaces innovantes de demain.',
                    list: [
                          {
                            link: 'http://aka.ms/vscomemudownload',
                            list: 'Design UWP',
                            icon: 'fa-download'
                        },
                          {
                            link: 'https://msdn.microsoft.com/en-us/library/jj129478.aspx',
                            list: 'Blend pas de en savoir plus',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/windows/uwp/layout/design-and-ui-intro',
                    type: 'outil',
                    label: 'Créez vos interfaces en natif pour Windows'
                },

                        {
                    title: 'Xamarin Forms',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Une API pour construire rapidement des applications natives iOS, Android et Windows complètement C#.',
                    list: [ ],
                    link: 'https://www.xamarin.com/forms',
                    type: 'outil',
                    label: 'Déployez vos interfaces quelle que soit votre plateforme'
                },



                {
                    title: 'Mircrosoft design',
                    image: 'images/cardslogo/azure.png',
                    content: 'Retrouvez le channel vidéo de Microsoft Design',
                    list: [],
                    link: 'https://www.youtube.com/playlist?list=PLFPUGjQjckXHGoDYt8IkkN32fECBrl-_n ',
                    type: 'plateforme',
                    label: ''
                },
                    {
                    title: 'App Design',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Des conseils, des suggestions et des experts: retrouvez tout ceci sur la page Facebok de la communauté d\'aide au design.',
                    list: [ ],
                    link: 'https://www.facebook.com/groups/WinAppDesign/ ',
                    type: 'plateforme',
                    label: 'Retrouvez la communauté française'
                },
                    {
                    title: 'Michel Rousseau',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Retrouvez l\'actualité du design applicatif sur son blog.',
                    list: [
                        
                    ],
                    link: 'https://michelrousseaufr.wordpress.com/ ',
                    type: 'plateforme',
                    label: 'Un designer à votre service.'
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
