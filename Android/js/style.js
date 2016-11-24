$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    title: 'Cognitive Services',
                    image: 'images/cardslogo/azure.png',
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
                    title: 'Azure Mobile Apps',
                    image: 'images/cardslogo/azure.png',
                    content: 'Authentification, connexion et synchronisation offline de votre base de données, notifications push : tout ce dont vous avez besoin !',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/documentation/learning-paths/appservice-mobileapps/',
                    type: 'build',
                    label: 'Un backend complet pour vos applications'
                },
                {
                    title: 'Microsoft graph',
                    image: 'images/cardslogo/office.png',
                    content: 'Offrez une expérience personalisée en vous basant sur les informations qui comptent pour vos utilisateurs : leurs emails, rendez-vous, tâches ou notes d’Office.',
                    list: [
                        {
                            link: 'https://experiences.microsoft.fr/channel/le-microsoft-graph-ou-comment-developper-en-utilisant-ce-big-data-de-lorganisation/ebab200a-4fbf-4f6c-8b33-26f52c56e023#EjoYTR3PPRDkPlPl.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                        {
                            link: 'https://graph.microsoft.io/en-us/partners',
                            list: 'Références',
                            icon: 'fa-pied-piper'
                        },
                    ],
                    link: 'https://graph.microsoft.io',
                    type: 'build',
                    label: 'Enrichissez l\'expérience de vos utilisateurs avec leurs données'
                }, 
                {
                    title: 'Visual Studio Mobile Center',
                    image: 'images/cardslogo/VSMC.png',
                    content: 'Le nouveau centre de contrôle pour construire, tester, distribuer et contrôler le fonctionnement de vos applications mobiles, quel que soit votre language !',
                    list: [],
                    link: 'https://www.visualstudio.com/vs/mobile-center/',
                    type: 'build',
                    label: 'Le portail qui va tout connecter !'
                },
/*
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
                    title: 'HockeyApp',
                    image: 'images/cardslogo/hockeyapp.png',
                    content: 'Développez, distribuez et testez vos applications mobiles. Recueillez les commentaires de vos utilisateurs, obtenez des rapports sur les incidents, etc...',
                    list: [],
                    link: 'https://www.hockeyapp.net/features/',
                    type: 'build',
                    label: 'Développez, distribuez et testez vos applis'
                },
                {
                    title: 'Xamarin test cloud',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Testez votre application sur plus de 2000 périphériques mobile. Effectuez des tests d\'interface automatisés, et bénéficiez d\'un rapport détaillé.',
                    list: [],
                    link: 'https://www.xamarin.com/test-cloud',
                    type: 'build',
                    label: 'Testez l\'interface de vos applis sur 2000 devices'
                },
           
                 {
                    title: 'Visual Studio Team Services',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Outils de collaboration pour partager du code en équipe et assurer le suivi de vos projets en mode agile. Le parfait complément de votre IDE.',
                    list: [],
                    link: 'https://www.visualstudio.com/fr-fr/products/visual-studio-team-services-vs.aspx',
                    type: 'build',
                    label: 'Partagez votre code et suivez vos projets efficacement'
                },
                     {
                    title: 'Azure Mobile Engagement',
                    image: 'images/cardslogo/azure.png',
                    content: 'Optimisez l\’utilisation des applications et la rétention des utilisateurs.',
                    list: [],
                    link: 'https://azure.microsoft.com/fr-fr/services/mobile-engagement/',
                    type: 'build',
                    label: 'Engagez vos utilisateurs'
                },
                    {
                    title: 'Visual Studio for mac',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Il n\'a jamais été aussi simple de développer son backend ou de démarrer des projets cross-plateforme en C# !',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'Visual Studio for Mac: élargissez votre champ des possibles'
                },
                    {
                    title: 'Émulateur Android',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Déployez, testez et débuguez des applications avec notre émulateur Android gratuit et rapide.',
                    list: [
                          {
                            link: 'http://aka.ms/vscomemudownload',
                            list: 'Télécharger',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'https://www.visualstudio.com/fr-fr/features/msft-android-emulator-vs.aspx',
                    type: 'outil',
                    label: 'L\'émulateur Android gratuit, basé sur Hyper-V'
                },

                    {
                    title: 'VSTS Plug-in Android Studio',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Le plug-in de Visual Studio Team Services pour IntelliJ IDEA et Android Studio',
                    list: [ ],
                    link: 'http://java.visualstudio.com/Downloads/intellijplugin/Index',
                    type: 'outil',
                    label: 'Plug-in de VSTS pour Android Studio'
                },
                    {
                    title: 'Xamarin for Visual Studio',
                    image: 'images/cardslogo/xamagon.png',
                    content: 'Construisez des applications Android, iOS et Windows natives, avec une seule base de code C# partagée. Disponible sur PC et Mac !',
                    list: [ 
                        {
                            link: 'https://www.visualstudio.com/vs/visual-studio-mac/',
                            list: 'Disponible sur Mac',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'https://www.visualstudio.com/xamarin/',
                    type: 'plateforme',
                    label: 'L\'outil ultime pour faire du développement cross-plateforme'
                },
                {
                    title: 'Visual Studio Code',
                    image: 'images/cardslogo/vsts.png',
                    content: 'L\'éditeur de code gratuit, léger et cross-plateforme de Microsoft. Le tout en open source !',
                    list: [ ],
                    link: 'https://code.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Un éditeur de code léger pour développer en Node.js'
                },
                {
                    title: 'Visual Studio',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Le meilleur IDE du marché, au service de vos projets de backend.',
                    list: [ ],
                    link: 'https://www.visualstudio.com/vs/',
                    type: 'plateforme',
                    label: 'Développez votre backend en .NET'
                },
                    {
                    title: 'Apache Cordova Tools',
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
                    label: 'L\'extension Apache Cordova pour VSCode et Visual Studio.'
                },
                  {
                    title: 'Visual C++ Mobile',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Partagez et réutilisez du code C++ existant pour cibler les utilisateurs Android et iOS. La fonction débug est aussi dispo.',
                    list: [ ],
                    link: 'https://www.visualstudio.com/fr/vs/cplusplus-mdd/',
                    type: 'plateforme',
                    label: 'Développez du code mobile interplateforme en C++'
                },
                 {
                    title: 'React Native Tools',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Cette extension fournit un environement de développement pour vos projets React Native.',
                    list: [ ],
                    link: 'https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native',
                    type: 'plateforme',
                    label: 'L\'extension React Native Tools pour VSCode'
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
