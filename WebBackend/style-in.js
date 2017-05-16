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
                    more: false,
                    title: 'Une vingtaine de services clé en main',
                    image: '../images/cardslogo/api.png',
                    content: 'De la base de données NoSQL Mongo au service de streaming adaptatif en passant par le cache distribué Redis, ne réinventez pas la roue et utilisez les services gérés automatiquement par la plateforme.',
                    list: [{
                           link: 'https://azure.microsoft.com/fr-fr/services/documentdb/',
                            list: 'NoSQL',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://azure.microsoft.com/fr-fr/services/cache/',
                            list: 'Redis',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://azure.microsoft.com/fr-fr/services/',
                            list: 'Tous les services',
                            icon: 'fa-film'
                        },
                        ],
                    type: 'build',
                    label: 'Utilisez les services applicatifs Azure pour gagner en efficacité.'
                },


                 /*
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
  */
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
                  /*
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
                  */

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

  var tabs = [

        "<div class='col-md-7'><br><p style='text-align: left'><B><u>Start-up:</u></B> Mapwize, plateforme de cartographie d’intérieur pour les Smart Buildings.<br><B><u>Problématique:</u></B> Comment passer d'une architecture monolithique sur Heroku à une architecture microservices sans passer par un orchestrateur complexe?<br><b><u>Technos de la start-up:</u></b> Node.js<br><B><u>Solution:</u></B><a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank> Azure App Service</a> pour pouvoir héberger les différents services web sans gérer l'infrastructure soi-même,  <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/cdn/' target=blank>Azure CDN</a> pour accélerer le processus et <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/functions/' target=blank>Azure Functions</a> pour lire le code spécifique de chaque client.<br></p> <br><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank class='btn facebook' >Découvrir sur github</a><br></div><div class='col-md-5'><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank><img style='width:90%' src='../images/general/architecturemapwize.png'></a></div>",

 "<div class='col-md-7'><br><p style='text-align: left'><B><u>Start-up:</u></B> Content Avenue, plateforme collaborative pour les pros du contenu digital.<br><B><u>Problématique:</u></B> Comment déveloper une architecture agile et managée pour héberger une application PHP/Drupal dans le cloud?<br><b><u>Technos de la start-up:</u></b> PHP, Drupal, MySQL<br><B><u>Solution:</u></B><a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank> Azure App Service</a> pour pouvoir héberger l'application PHP sans en gérer l'infrastructure soi-même,  <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/container-registry/' target=blank>Azure Container Registry</a> pour héberger les images du container. <br></p> <br><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank class='btn facebook' >Découvrir sur github</a><br></div><div class='col-md-5'><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank><img style='width:90%' src='../images/general/architecturediagram2.png'></a></div>",

"<div class='col-md-7'><br><p style='text-align: left'><B><u>Start-up:</u></B> People Eyes, sondages à grande échelle basés sur des photos.<br><B><u>Problématique:</u></B> Passer d'une architecture monolithique basée sur Ubuntu Virtual Machine à une architecture micro-services pérenne pour gagner en agilité et en flexibilité.<br><b><u>Technos de la start-up:</u></b> Meteor.js, Python, MongoDB<br><B><u>Solution:</u></B><a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank> Azure App Service</a> pour rendre possible la communication en temps réel entre l'application mobile et le backend, <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank>Azure Redis Cache </a> <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank>Azure Search</a> <br></p> <br><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html target=blank' target=blank class='btn facebook' >Découvrir sur github</a><br></div><div class='col-md-5'><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank><img style='width:90%' src='../images/general/architecturediagram2.png'></a></div>",

"<div class='col-md-7'><br><p style='text-align: left'><B><u>Start-up:</u></B> Mixit Music, application de playlists collaboratives pour écouter de la musique en groupe. <br><B><u>Problématique:</u></B> Comment héberger une application B2C dans le cloud pour garantir une expérience plus agréable et fluide à des milliers d'utilisateurs.<br><b><u>Technos de la start-up:</u></b> Node.js, Python, MongoDB, Redis Cache, Celery, Stream Framework.<br><B><u>Solution:</u></B><a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank> Azure App Service</a> pour rendre possible la communication en temps réel entre l'application mobile et le backend, <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank>Azure Redis Cache </a> pour activer des outils qui permettent de booster la performance de l'application (data catching, fast distributed task queues, activity streams caching), <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank>Azure Search</a> to index the maximum of content to improve performance and to minimize the load on the databases systems et <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank>Azure Cosmos DB</a> pour stocker les données NoSQL. <br></p> <br><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank class='btn facebook' >Découvrir sur github</a><br></div><div class='col-md-5'><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank><img style='width:90%' src='../images/general/architecturemixit.png'></a></div>",

"<div class='col-md-7'><br><p style='text-align: left'><B><u>Start-up:</u></B> AllSkreen, plateforme de conception, diffusion et hébergement de BDs numériques. <br><B><u>Problématique:</u></B> Comment héberger une application 100% PHP dans le cloud et créer une architecture managée flexible et évolutive.<br><b><u>Technos de la start-up:</u></b> PHP.<br><B><u>Solution:</u></B><a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/app-service/' target=blank> Azure App Service</a> pour héberger les applications web en PHP, <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/storage/?v=16.50' target=blank>Azure Storage </a> pour activer des outils qui permettent de booster la performance de l'application (data catching, fast distributed task queues, activity streams caching), <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/traffic-manager/' target=blank>Azure Traffic Manager</a> to index the maximum of content to improve performance and to minimize the load on the databases systems et <a style='color:blue;font-family: Segoe UI semibold' href='https://azure.microsoft.com/en-us/services/logic-apps/' target=blank>Azure Logic Apps</a> pour stocker les données NoSQL. <br></p> <br><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank class='btn facebook' >Découvrir sur github</a><br></div><div class='col-md-5'><a href='https://microsoft.github.io/techcasestudies/azure%20app%20service/2017/05/08/contentavenue.html' target=blank><img style='width:90%' src='../images/general/architectureallskreen.png'></a></div>",


    ];

    $('.tab-data').click(function () {
        $('.arrow-up').hide();
        $(this).find('.arrow-up').show();
        $('.tabs-content .container').html(tabs[$('.tab-data').index(this)]);
    });
});
