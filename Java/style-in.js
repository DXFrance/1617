$(document).ready(function () {
    $('a[data-toggle="tooltip"]').tooltip();
    var cards = [
        {
            title: 'Bash',
            image: '../images/cardslogo/bash.png',
            content: 'Découvrez une distribution Linux dans Windows, avec Bash !',
            list: [
            ],
            link: 'https://msdn.microsoft.com/en-us/commandline/wsl/install_guide',
            type: 'build',
            label: 'Bash on Windows'
        },
        {
            title: 'SQL Server',
            image: '../images/cardslogo/sql.png',
            content: 'Téléchargez et installez la prochaine version de SQL Server sur une distribution Ubuntu ou Red Hat !',
            list: [],
            link: 'https://www.microsoft.com/en-us/sql-server/sql-server-vnext-including-Linux',
            type: 'build',
            label: 'SQL server sur Linux !'
        },
        {
            title: 'azure',
            image: '../images/cardslogo/azure.png',
            content: 'Intégration d\'un plugin Azure pour Eclipse et IntelliJ.',
            list: [{
                link: 'https://github.com/microsoft/azure-tools-for-java',
                list: 'GitHub',
                icon: 'fa-download'
            },],
            link: 'https://docs.microsoft.com/fr-fr/azure/azure-toolkit-for-eclipse',
            type: 'brouillon',
            label: 'Azure Toolkit pour IntelliJ et Eclipse'
        },
          {
            more: false,
            title: 'Jenkins',
            image: '../images/cardslogo/jenkins.png',
            content: 'Intégrer Jenkins avec Visual Studio Team Services pour gérer le déployement continu de vos applications',
             list: [{
                link: 'https://microsoft.github.io/techcasestudies/devops/2017/05/09/automotive-leader-devops.html',
                list: 'Retour d\'experience',
                icon: 'fa-download'
                 }, {
                link: 'https://www.visualstudio.com/en-us/docs/marketplace/integrate/service-hooks/services/jenkins',
                list: 'DOCS',
                icon: 'fa-download'
             },],
            link: 'https://www.visualstudio.com/en-us/docs/marketplace/integrate/service-hooks/services/jenkins ',
            type: 'build',
            label: 'Jenkins et Visual Studio Team Services'
        },
        {
            title: 'azure',
            image: '../images/cardslogo/azure.png',
            content: 'Récupérez l\'ensemble des ressources, tutoriaux et SDK pour vos futurs développement Java hébergés dans Azure.',
            list: [
            ],
            link: 'https://azure.microsoft.com/fr-fr/develop/java/ ',
            type: 'azure',
            label: 'Le centre de developpement pour Java dans Azure'
        },
        {
            more: false,
            title: 'Hello world',
            image: '../images/cardslogo/azure.png',
            content: 'Créez votre première application Java hébergée dans Azure avec Eclipse ou IntelliJ.',
            list: [{
                link: 'https://docs.microsoft.com/fr-fr/azure/app-service-web/app-service-web-eclipse-create-hello-world-web-app',
                list: 'Eclipse',
                icon: 'fa-download'
            }, {
                link: 'https://docs.microsoft.com/fr-fr/azure/app-service-web/app-service-web-intellij-create-hello-world-web-app',
                list: 'IntelliJ',
                icon: 'fa-download'
            },],
            link: 'https://www.visualstudio.com/vs/visual-studio-mac/',
            type: 'azure',
            label: 'Codez votre 1ère application web Java dans Azure'
        },
        {
            more: false,
            title: 'VM',
            image: '../images/cardslogo/azure.png',
            content: 'Créez une machine virtuelle dans Azure pour héberger vos services Java, avec par exemple un serveur Tomcat sur une machine Ubuntu',
            list: [
                {
                    link: 'https://easycreate.azure.com/dockerVM',
                    list: 'Docker VM',
                    icon: 'fa-download'
                },
                {
                    link: 'https://easycreate.azure.com/linuxVM',
                    list: 'Linux VM',
                    icon: 'fa-download'
                },
            ],
            link: 'https://www.visualstudio.com/fr-fr/features/msft-android-emulator-vs.aspx',
            type: 'azure',
            label: 'Créez une VM en quelques clics !'
        },

      
        

          {
            title: 'AZURE CHAT',
            image: '../images/cardslogo/azure.png',
            content: 'Un exemple complet codé en JAVA, utilisant les services AZURE comme Azure SQL Database, Authentification, Azure Media Services.',
            list: [],
            link: 'https://github.com/Microsoft/azure-chat-for-java',
            type: 'outil',
            label: 'Un exemple complet OSS utilisant les SDKs Java Pour Azure '
        },
        {
            title: 'titre',
            image: 'images/cardslogo/vsts.png',
            content: 'description à compléter.',
            list: [],
            link: 'https://www.visualstudio.com/vs/',
            type: 'plateforme',
            label: 'Jenkins Plugins'
        },
        {
            title: 'Cognitive Services',
            image: '../images/cardslogo/azure.png',
            content: 'Offrez de l\'intelligence à vos applications : détection des visages, des émotions, reconnaissance et synthèse vocale, interprétation du language … 22 API à votre disposition !',
            list: [
                {
                    link: 'https://channel9.msdn.com/Blogs/Open/Microsoft-Cognitive-Service-with-Java-EE',
                    list: 'Vidéo',
                    icon: 'fa-download'
                },
            ],
            link: 'https://www.microsoft.com/cognitive-services/en-us/apis',
            type: 'plateforme',
            label: 'Donnez un côté plus humain à vos applications'
        },
        {
            title: 'GitHub',
            image: '../images/cardslogo/github.png',
            content: 'Description à compléter',
            list: [],
            link: 'https://github.com/azure?utf8=%E2%9C%93&q=Java',
            type: 'plateforme',
            label: 'Tous Les services Java OSS disponibles'
        },
    ];


    for (var i = 0; i < cards.length; i++) {
        if (cards[i].list.length) {
            cards[i].list_html = '';
            for (var z = 0; z < cards[i].list.length; z++) {
                cards[i].list_html += '<a href="' + cards[i].list[z].link + '" target="_blank" title="' + cards[i].list[z].list + '">' + cards[i].list[z].list + '</a>';
            }
            cards[i].list_html += '';

        } else {
            cards[i].list_html = '';
        }
        var more = (typeof cards[i].more === 'undefined') ? '<a target="_blank" href="' + cards[i].link + '" title="' + cards[i].title + '">En savoir plus</a>' : '';

        $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="' + cards[i].image + '" alt="' + cards[i].label + '"> <span>' + cards[i].label + '</span> </div> <div class="card-content"> <div class="card-content-div"> <div class="card-abs"><div class="sep"></div> ' + more + ' ' + cards[i].list_html + '</div> <span class="label">' + cards[i].title + '</span>' + cards[i].content + ' </div> </div> </div> </div> </div> </div>');
    }
    cardShowed = false;
    var targetOffset = $(".card").offset().top - 490;

    $w = $(window).scroll(function () {
        if (cardShowed) { return; }
        if ($w.scrollTop() > targetOffset) {
            cardShowed = true;
            $('.card .card-top span').css('top', 0);
            $('.card .card-content').css('height', 210);
            setTimeout(function () {
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


    if ($('footer')) {

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


        }, { offset: '50%' });

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


    $(window).scroll(function () {
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
