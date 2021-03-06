$(document).ready(function () {
            $('a[data-toggle="tooltip"]').tooltip();
            var cards = [
                  {
                    title: 'IaaS',
                    image: '../images/cardslogo/azure.png',
                    content: 'Votre infrastructure clef en main s\'adapte à tous vos projets. Trouvez dans la market place Azure le modèle de VM qui s\'adapte le mieux à vos besoins.',
                    list: [
                        {
                            link: 'https://azure.microsoft.com/fr-fr/marketplace/',
                            list: 'Market Place',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/virtual-machines/',
                    type: 'build',
                    label: 'Faites du cloud comme à la maison'
                },
                                  {
                    title: 'Azure App Services',
                    image: '../images/cardslogo/azure.png',
                    content: 'Codez dans votre langage favoris (.NET, Node.js, PHP, Python ou Java) pour créer rapidement des applications web et des API.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/app-service/',
                    type: 'build',
                    label: 'Codez, ne gérez plus la plomberie'
                },
               {
                    title: 'Azure Service Fabric',
                    image: '../images/cardslogo/azure.png',
                    content: 'Développez et exploitez des applications distribuées, évolutives et toujours disponibles.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/service-fabric/',
                    type: 'build',
                    label: 'Utilisez des microservices pour votre appli'
                },

                    {
                    title: 'Azure container service',
                    image: '../images/cardslogo/azure.png',
                    content: 'Déployez et gérez des conteneurs à l’aide des outils que vous êtes habitués à utiliser.',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/services/container-service/',
                    type: 'build',
                    label: 'Exploitez la puissance des containers'
                },
                    {
                    title: 'Azure Functions',
                    image: '../images/cardslogo/azure.png',
                    content: 'Ne vous occupez plus de l’infrastructure et des serveurs, vos applications réagissent à des événements !',
                    list: [
                     ],
                    link: 'https://azure.microsoft.com/en-us/services/functions/',
                    type: 'build',
                    label: 'En mode Serverless'
                },

                  {
                    title: 'Données',
                    image: '../images/cardslogo/sql.png',
                    content: 'Microsoft Azure offre de nombreuses solutions pour le stockage de données : de MySQL ou MongoDB sur une machine virtuelle Linux, en passant par Azure SQL Database ou encore Azure DocumentDB.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/?sort=popular&filter=data-storage',
                    type: 'plateforme',
                    label: 'Plutôt SQL ou NoSQL ?'
                },
                 {
                    more: false,
                    title: 'Services applicatifs',
                    image: '../images/cardslogo/azure.png',
                    content: 'Azure offre de nombreux services applicatifs prêts à consommer : Du cache Redis en passant par Azure Search ou encore Azure Media Service.',
                    list: [ {
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
                            list: 'Media',
                            icon: 'fa-film'
                        },
                     ],  
                    link: 'https://azure.microsoft.com/fr-fr/services/search/',
                    type: 'plateforme',
                    label: 'Accélérez vos développements'
                },
                     {
                    title: 'Intégration',
                    image: '../images/cardslogo/azure.png',
                    content: 'Développez et fournissez aisément des solutions d’intégration puissantes. Automatisez les processus d’entreprise.',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/services/app-service/logic/',
                    type: 'plateforme',
                    label: 'Intégration entre services'
                },
                                                  {
                    title: 'IDEs & SDKs',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Node.js, PHP, Java, Eclipse, IntilliJ : pas besoin de changer, ça marche aussi avec Azure.',
                    list: [ 
                                                {
                           link: 'https://experiences.microsoft.fr/channel/hello-azure-la-plateforme-aux-multiples-langages/42a2c02e-566c-4297-aad3-3141c27197c9#34vYwomFiTOpMcqE.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://azure.microsoft.com/fr-fr/downloads',
                    type: 'outil',
                    label: 'Le Cloud qui parle votre langage'
                },
                 {
                    title: 'Azure CLI',
                    image: '../images/cardslogo/azure.png',
                    content: 'Que vous soyez sous Linux, macOS ou sous Windows c\'est LA ligne de commande qui vous permettra de créer, gérer les ressources dans le cloud Microsoft Azure.',
                    list: [
                     ],
                    link: 'https://azure.microsoft.com/fr-fr/documentation/articles/xplat-cli-install/#excution-des-commandes-azure-cli',
                    type: 'outil',
                    label: 'Interface de ligne de commande'
                },
                  {
                    title: 'VS Team Services',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Outils de collaboration pour partager du code en équipe et assurer le suivi de vos projets en mode agile. Le parfait complément de votre IDE.',
                    list: [
                     ],
                    link: 'https://www.visualstudio.com/fr-fr/products/visual-studio-team-services-vs.aspx',
                    type: 'outil',
                    label: 'Partager son code et suivre ses projets efficacement'
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
