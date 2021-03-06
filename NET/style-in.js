$(document).ready(function () {

            $('a[data-toggle="tooltip"]').tooltip();
            var cards = [
                                  {
                    title: 'Développer pour Windows',
                    image: '../images/cardslogo/dotnet.png',
                    content: '.Net Framework vous aide à créer facilement des applications mobiles, web, desktop et serveurs avec un ensemble d’APIS robustes et éprouvées depuis de nombreuses années !  ',
                    list: [
                    ],
                    link: 'https://www.microsoft.com/net/framework ',
                    type: 'build',
                    label: '.NET Framework'
                },
                   {
                    title: 'Multi plateformes, modulaire & open source',
                    image: '../images/general/assets_dotnet/dotnetcore.png',
                    content: '    .NET Core 2.0 est la nouvelle plateforme de dev adaptée aux besoins du développement moderne.',
                    list: [

                    ],
                    link: 'https://dotnet.github.io/',
                    type: 'build',
                    label: '.Net Core 2.0'
                },
               {
                    title: 'App natives IOS et Android',
                    image: '../images/cardslogo/xamagon.png',
                    content: '  Profitez de vos compétences en C# pour développer des applications complètes sur IOS et Android. ',
                    list: [
                    ],
                    link: 'https://www.xamarin.com/platform',
                    type: 'build',
                    label: 'Xamarin'
                },



                  {
                    title: 'Visual studio',
                    image: '../images/cardslogo/MS.png',
                    content: 'Pro, Entreprise, Community, Code ... Quelque soit la taille de votre équipe il existe une version de Visual Studio qui répond à vos besoins. ',
                    list: [ ],
                    link: 'https://www.visualstudio.com/fr/downloads/',
                    type: 'plateforme',
                    label: 'Windows '
                },
                 {

                    title: 'Visual studio pour mac',
                    image: '../images/cardslogo/apple.png',
                    content: 'Elargissez votre champ des possibles et démarrez des projets cross-plateformes en C# avec Visual Studio pour Mac.',
                    list: [

                     ],
                    link: 'https://www.visualstudio.com/vs/visual-studio-mac/',
                    type: 'plateforme',
                    label: 'Mac '
                },
                     {
                    title: 'Visual studio code',
                    image: '../images/cardslogo/linux.png',
                    content: 'Un éditeur de code léger, cross-plateforme (Linux, macOS, Windows), open source et 100% gratuit.',
                    list: [ ],
                    link: 'https://code.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Linux Windows Mac'
                },
                                                  {
                    title: 'Xamarin',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Développez des applications natives iOS ou Android en utilisant vos compétences C#.',
                    list: [

                    ],
                    link: 'https://www.xamarin.com/',
                    type: 'outil',
                    label: 'Des applications natives avec le support de C#'
                },
                 {
                    title: 'Xamarin Forms',
                    image: '../images/cardslogo/azure.png',
                    content: 'Construisez des interfaces natives pour iOS, Android et Windows Phone grace à plus de 40 controls natifs. Partagez ainsi 100% de votre code C# quelle que soit la plateforme.',
                    list: [
                     ],
                    link: 'https://www.xamarin.com/forms',
                    type: 'outil',
                    label: 'Des interfaces unifiées'
                },
                  {
                    title: 'VISUAL STUDIO FOR MAC',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Il n\'a jamais été aussi simple de développer son backend ou de démarrer des projets cross-plateforme en C# !',
                    list: [
                     ],
                    link: 'https://www.visualstudio.com/vs/visual-studio-mac/',
                    type: 'outil',
                    label: 'Visual Studio for Mac: élargissez votre champ des possibles'
                },


                {
                    more: false,
                    title: 'VS 2015',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Quelle que soit la taille de vos équipes, il y a une version de Visual Studio qui répond à vos besoins.',
                    list: [
                        {
                            link: 'https://www.visualstudio.com/products/visual-studio-professional-with-msdn-vs',
                            list: 'Pro',
                            icon: 'fa-download'
                        },
                         {
                            link: 'https://www.visualstudio.com/products/visual-studio-enterprise-vs',
                            list: 'Entreprise',
                            icon: 'fa-download'
                        },
                     ],
                    link: 'https://www.visualstudio.com/products/visual-studio-enterprise-vs',
                    type: 'last',
                    label: 'Visual Studio Pro et Enterprise'
                },
                {
                    title: 'VS 2015',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Un Visual Studio complet, gratuit pour les PME, indépendants, startups et étudiants.',
                    list: [
                     ],
                    link: 'https://www.visualstudio.com/products/visual-studio-community-vs',
                    type: 'last',
                    label: 'Visual Studio Community'
                },
                {
                    title: 'VS Code',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Un éditeur de code léger, cross-plateforme (Linux, macOS, Windows), open source et 100% gratuit.',
                    list: [
                     ],
                    link: 'https://code.visualstudio.com',
                    type: 'last',
                    label: 'Visual Studio Code'
                },
                {
                    title: 'Visual Studio 2017 RC',
                    image: '../images/cardslogo/vsts.png',
                    content: 'En avant-première, testez les fonctionnalités du futur Visual Studio.',
                    list: [
                        {
                            link: 'https://www.visualstudio.com/vs/visual-studio-2017-rc/',
                            list: 'Télécharger',
                            icon: 'fa-download'
                        },
                     ],
                    link: 'https://blogs.msdn.microsoft.com/visualstudio/',
                    type: 'last',
                    label: 'Le futur Visual Studio',
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
                var more = (typeof cards[i].more === 'undefined') ? '<a target="_blank" href="'+ cards[i].link +'" title="'+ cards[i].title +'">En savoir plus</a>' : '' ;

                $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="'+ cards[i].image +'" alt="'+ cards[i].label +'"> <span>'+ cards[i].label +'</span> </div> <div class="card-content"> <div class="card-content-div"> <div class="card-abs"><div class="sep"></div> ' + more + ' '+ cards[i].list_html +'</div> <span class="label">' + cards[i].title +'</span>'+ cards[i].content +' </div> </div> </div> </div> </div> </div>');
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
