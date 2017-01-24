$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [

                 {
                    title: 'Azure App Services',
                    image: '../images/cardslogo/appservice.png',
                    content: 'Déployez vos applications web et vos APIs sur le Cloud quelque soit votre langage favori (.NET, Node.js, PHP, Python ou Java), sur des serveurs Windows ou Linux automatiquement gérés par Azure !',
                    list: [{
                           link: 'https://aka.ms/webapp-linux',
                            list: 'Preview Linux',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/app-service/',
                    type: 'build',
                    label: 'Codez, ne gérez plus la plomberie'
                },
                 {
                    title: 'Azure container service',
                    image: '../images/cardslogo/conteneur.png',
                    content: 'Déployer et gérer des conteneurs sur le Cloud à l’aide des outils que vous choisissez comme Docker Swarm ou DC/OS.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/container-service/',
                    type: 'build',
                    label: 'Exploitez la puissance des containers'
                },

                 {
                    title: 'Azure API Management',
                    image: '../images/cardslogo/api.png',
                    content: 'Créez une passerelle d’API aux fonctionnalités avancées (cache, throttling, transformations, sécurité, portail développeur, …) en quelques minutes.',
                    list: [{
                           link: 'https://experiences.microsoft.fr/channel/amliorez-vos-apis-avec-azure-api-management/13d56210-eb20-4ac8-9f1b-b6595d23491c#rlkoe4Otx2Yf684Z.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                        ],
                    link: 'https://azure.microsoft.com/fr-fr/services/api-management/',
                    type: 'build',
                    label: 'Gérez tous les aspects de vos APIs simplement'
                },
                 {
                    title: 'Azure SQL Database',
                    image: '../images/cardslogo/sql.png',
                    content: 'Vous souhaitez une base de données relationnelle clé en main, hautement disponible et performante ? Découvrez Azure SQL Database.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/sql-database/',
                    type: 'build',
                    label: 'Votre base de données relationnelles clé en main'
                },
             {
                    more: false,
                    title: 'Azure',
                    image: '../images/cardslogo/search.png',
                    content: 'Azure offre de nombreux services applicatifs prêts à consommer : du cache Redis en passant par Azure Search ou encore Azure Media Service.',
                    list: [
                        {
                           link: 'https://azure.microsoft.com/fr-fr/services/search/',
                            list: 'Search',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://azure.microsoft.com/fr-fr/services/cache/',
                            list: 'Cache',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://azure.microsoft.com/fr-fr/services/media-services/',
                            list: 'Streaming',
                            icon: 'fa-film'
                        },
                     ],
                    link: 'https://azure.microsoft.com/fr-fr/services/search/',
                    type: 'build',
                    label: 'Services applicatifs avancés'
                },
                  {
                    title: 'Cognitive Services',
                    image: '../images/cardslogo/azure.png',
                    content: 'Offrez de l\'intelligence à vos applications : détection des visages, des émotions, reconnaissance et synthèse vocale, interprétation du language … 22 API à votre disposition !',
                    list: [
                           {
                            link: 'https://experiences.microsoft.fr/channel/cognitive-services-offrez-de-lintelligence-a-vos-applications/f2a617ea-9852-4fbb-b971-373d35fb0456#iXI6S3fPK1pGC6Mh.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                         {
                            link: 'https://www.microsoft.com/cognitive-services/en-us/applications',
                            list: 'Exemples',
                            icon: 'fa-pied-piper'
                        },
                    ],
                    link: 'https://www.microsoft.com/cognitive-services/en-us/apis',
                    type: 'build',
                    label: 'Donnez un côté plus humain à vos applications'
                },
                     {
                    title: 'Visual Studio Application Insigths',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Surveillez vos applications webs et vos APIs pour améliorer leurs performances et détecter les problèmes de manière proactive.',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/services/application-insights/',
                    type: 'build',
                    label: 'Détectez, hiérarchisez et diagnostiquez les problèmes dans vos applications et services web'
                },

                    {
                    title: 'Shell Bash',
                    image: '../images/cardslogo/windows.png',
                    content: 'Dans Windows 10, vous avez désormais accès nativement aux fonctionnalités Bash d\'\Ubuntu. Et donc <i> apt, ssh, rsync, find, grep, awk, sed, curl, wget, apache, mysql, python, perl, ruby, php, emacs, vim, diff,...</i>',
                    list: [
                          
                    ],
                    link: 'https://blogs.msdn.microsoft.com/commandline/2016/04/06/bash-on-ubuntu-on-windows-download-now-3/',
                    type: 'outil',
                    label: 'Bash dans Windows'
                },
                         {
                    title: 'Visual Studio Team Services',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Outils de collaboration pour partager du code en équipe et assurer le suivi de vos projets en mode agile. Le parfait complément de votre éditeur de code.',
                    list: [],
                    link: 'https://www.visualstudio.com/fr-fr/products/visual-studio-team-services-vs.aspx',
                    type: 'outil',
                    label: 'Partager son code et suivre ses projets efficacement'
                },
                 {
                    title: 'Visual Studio Code',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Un éditeur de code léger, open source et cross plateforme. Le tout avec des fonctionnalités de débogage, une intégration Git et un système d’extensions.',
                    list: [],
                    link: 'https://code.visualstudio.com/',
                    type: 'outil',
                    label: 'Un éditeur de code tout neuf !'
                },
                    {
                    more: false,
                    title: 'Visual Studio',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Si vous préférez l’environnement de développement complet de Visual Studio, n’oubliez pas d’installer les extensions propres à vos plateformes !',
                    list: [
                        {
                            link: 'https://visualstudiogallery.msdn.microsoft.com/6eb51f05-ef01-4513-ac83-4c5f50c95fb5',
                            list: 'PHP',
                            icon: 'fa-download'
                        },
                        {
                           link: 'https://www.visualstudio.com/en-us/features/node-js-vs.aspx',
                            list: 'Node.js',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://www.visualstudio.com/en-us/features/python-vs.aspx',
                            list: 'Python',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://www.visualstudio.com/en-us/features/python-vs.aspx',
                    type: 'outil',
                    label: 'Les extensions web pour Visual Studio'
                },

                  {
                    title: 'macOS',
                    image: '../images/cardslogo/apple.png',
                    content: 'Découvrez comment réaliser votre première application sous ASP.NET Core avec Visual Studio Code.',
                    list: [ ],
                    link: 'https://docs.asp.net/en/latest/tutorials/your-first-mac-aspnet.html',
                    type: 'plateforme',
                    label: 'Vous développez sous mac ?'
                },
                {
                    title: 'Linux',
                    image: '../images/cardslogo/linux.png',
                    content: 'Publiez dans un environnement de production Linux.',
                    list: [ ],
                    link: 'https://docs.asp.net/en/latest/publishing/linuxproduction.html',
                    type: 'plateforme',
                    label: 'Vous déployez sur Linux ?'
                },
                {
                    title: 'Windows',
                    image: '../images/cardslogo/windows.png',
                    content: 'Publiez vers IIS avec Web Deploy en utilisant Visual Studio.',
                    list: [ ],
                    link: 'https://www.iis.net/downloads/microsoft/web-deploy',
                    type: 'plateforme',
                    label: 'Et ça marche aussi sous Windows'
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
