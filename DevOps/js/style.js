$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               {
                    more: false, 
                    title: '',
                    image: 'images/cardslogo/auto.png',
                    content: 'Réduisez les cycles de livraison par l\'industrialisation de la chaîne complète de production logicielle.',
                    list: [
                         
                    ],
                    link: '',
                    type: 'build',
                    label: 'Automatisez... TOUT'
                },
               {
                    more: false,
                    title: '',
                    image: 'images/cardslogo/confiance.png',
                    content: 'Améliorez la qualité et la disponibilité par l\'instrumentation, la supervision et les tests.',
                    list: [],
                    link: '',
                    type: 'build',
                    label: 'Rétablissez la confiance entre tous les acteurs'
                },
                {
                    more: false,
                    title: '',
                    image: 'images/cardslogo/cercle.png',
                    content: 'Une nouvelle culture fondée sur la collaboration et une recherche permanente de l\'amélioration par l\'apprentissage en continu.',
                    list: [
                    ],
                    link: '',
                    type: 'build',
                    label: 'Mettez en place un cercle vertueux'
                }, 
                        {
                    more: false,
                    title: '',
                    image: 'images/cardslogo/azure.png',
                    content: 'Le niveau d’automatisation et d’API fourni par les plateformes Cloud simplifie la mise à disposition d’infrastructures par les opérationnels pour les développeurs, et permet d’accélérer la mise en place d’une démarche DevOps dans l’entreprise.',
                    list: [],
                    link: '',
                    type: 'test',
                    label: 'DevOps ❤ Cloud'
                },
               
                

                    {
                    title: 'Devops by microsoft',
                    image: 'images/cardslogo/devops.png',
                    content: 'La division développement de Microsoft vous explique sa transformation vers des méthodes plus agiles et DevOps.',
                    list: [ ],
                    link: 'https://experiences.microsoft.fr/channel/transformation-agile-et-devops-chez-microsoft/f8fb48e3-b0ab-4860-99d0-2fd1c3a77e94#17uhVTQCEMKojRj9.97',
                    type: 'plateforme',
                    label: 'DevOps by Microsoft: ',
                },

                
                    {
                    title: 'Visual Studio Team Services',
                    image: 'images/cardslogo/vsts.png',
                    content: 'Facilitez le contrôle de version, la planification agile, l\'intégration continue, le déploiement continu, et la supervision applicative.',
                    list: [ 
                    ],
                    link: 'https://www.visualstudio.com/fr/team-services/',
                    type: 'plateforme',
                    label: 'Un service de collaboration pour vos projets !'
                },
                                {
                    more: false,
                    title: 'REPLAY',
                    image: 'images/cardslogo/devops.png',
                    content: 'Ne ratez rien de l\'actualité DevOps en regardant le replay des deux évènements.',
                    list: [
                        {
                           link: 'http://xamarinday.cellenza.com/#replay',
                            list: 'Xamarin Day',
                            icon: 'fa-film'
                        },
                        {
                           link: 'http://relaiswebcasting.mediasite.com/mediasite/Play/fad6a3365aba4ce6a6484284c3a0a23e1d?catalog=5851449f-8a30-4984-b3c1-31c51f698a30',
                            list: 'IDC DevOps',
                            icon: 'fa-film'
                        },
                     ],
                    link: '',
                    type: 'plateforme',
                    label: 'IDC DevOps et le Xamarin day, comme si vous y étiez !', 
                    },
                  {
                    title: 'Découvrir Devops',
                    image: 'images/cardslogo/livre.png',
                    content: 'Ce livre s’adresse à tous ceux qui s’intéressent aux systèmes d’informations innovants, ainsi qu’aux familiers de la notion d’agilité dans le monde de l’informatique.',
                    list: [ ],
                    link: 'https://info.microsoft.com/FR-Azure-CNTNT-FY16-02Feb-29-Decouvrir-DevOps.html',
                    type: 'plateforme',
                    label: 'Téléchargez notre livre blanc !'
                },
                {
                    title: 'Vorlon.js',
                    image: 'images/cardslogo/vorlon.png',
                    content: 'Retrouvez dans une série d\'articles l\'aventure devops vu à travers le prisme d\'un cas pratique !',
                    list: [ ],
                    link: 'https://blogs.technet.microsoft.com/devops/2016/01/12/vorlonjs-a-journey-to-devops-introducing-the-blog-post-series/',
                    type: 'plateforme',
                    label: 'Retours d\'expérience sur un cas pratique', 
                },
                {
                    more: false,
                    title: 'Devops day',
                    image: 'images/cardslogo/dday.png',
                    content: 'Vivez à nouveau le deux éditions du DevOps Day et découvrez comment Microsoft applique en interne les pratiques agiles et DevOps !',
                    list: [
                        {
                           link: 'https://channel9.msdn.com/Events/Microsoft-et-les-pratiques-agiles-et-DevOps/Dcouvrez-comment-Microsoft-applique-en-interne-les-pratiques-agiles-et-DevOps',
                            list: 'DevOpsDay #1',
                            icon: 'fa-film'
                        },
                        {
                           link: 'https://channel9.msdn.com/events/France/Devops-Day-2',
                            list: 'DevOpsDay #2',
                            icon: 'fa-film'
                        },
                     ],
                    link: '',
                    type: 'plateforme',
                    label: 'Rencontres à DevOps day', 
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
