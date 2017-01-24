$(document).ready(function () {
            $('a[data-toggle="tooltip"]').tooltip();
            var cards = [
                  {
                    title: 'Bot Builder',
                    image: '../images/cardslogo/tool.png',
                    content: 'Ce SDK pour Node.js permet de gérer facilement une discussion entre votre Bot et son interlocuteur.',
                    list: [
                           {
                            link: 'https://experiences.microsoft.fr/channel/prenez-votre-pied-avec-les-bots/9e6aa5d5-14e6-4d2b-ab6a-14f8032a638b#8R2CEPaRCxdViL8I.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'http://docs.botframework.com/builder/node/overview/',
                    type: 'build',
                    label: 'Vous faites du Node.js ?'
                },
                                  {
                    title: 'Bot Builder',
                    image: '../images/cardslogo/tool.png',
                    content: 'Ce SDK pour ASP.NET permet de gérer facilement une discussion entre votre Bot et son interlocuteur.',
                    list: [
                           {
                            link: 'https://experiences.microsoft.fr/channel/prenez-votre-pied-avec-les-bots/9e6aa5d5-14e6-4d2b-ab6a-14f8032a638b#8R2CEPaRCxdViL8I.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'http://docs.botframework.com/sdkreference/csharp/',
                    type: 'build',
                    label: 'Vous êtes plutôt ASP.NET ?'
                },
                {
                    title: 'Azure Bot Service',
                    image: '../images/cardslogo/azure.png',
                    content: 'Accélérez votre développement et enrichissez vos bots dans un environnement serverless. Azure Bot Service: le meilleur d\'Azure Functions et de Microsoft Bot Framework !',
                    list: [
                    ],
                    link: 'https://azure.microsoft.com/en-us/services/bot-service/',
                    type: 'build',
                    label: 'Une solution clé en main pour le développement de votre bot !'
                },
               {
                    title: 'Cognitive Services',
                    image: '../images/cardslogo/cerveau.png',
                    content: 'Les APIs Cognitive Services intègrent LUIS, un outil de Natural Language Processing qui permet à votre Bot de "comprendre" le langage humain.',
                    list: [
                           {
                            link: 'https://experiences.microsoft.fr/channel/cognitive-services-offrez-de-lintelligence-a-vos-applications/f2a617ea-9852-4fbb-b971-373d35fb0456#iXI6S3fPK1pGC6Mh.97',
                            list: 'Vidéo',
                            icon: 'fa-film'
                        },
                         {
                            link: 'https://www.microsoft.com/cognitive-services/en-us/luis-api/documentation/home',
                            list: 'Doc',
                            icon: 'fa-film'
                        },
                    ],
                    link: 'https://www.microsoft.com/cognitive-services/en-us/language-understanding-intelligent-service-luis',
                    type: 'build',
                    label: 'Rendez votre bot plus intelligent'
                },

                    {
                    title: 'Bot Connector',
                    image: '../images/cardslogo/connect.png',
                    content: 'Votre Bot devient accessible depuis des services comme Slack, Teams, Telegram, Facebook Messenger, Skype...',
                    list: [
                          {
                            link: 'https://www.nuget.org/packages/Microsoft.Bot.Connector/',
                            list: 'Installer',
                            icon: 'fa-download'
                        },
                    ],
                    link: 'http://docs.botframework.com/connector/getstarted/',
                    type: 'plateforme',
                    label: 'Rendre votre bot accessible au plus grand nombre'
                },

                        {
                    title: 'Azure Web App',
                    image: '../images/cardslogo/webapp.png',
                    content: 'Déployez votre bot node.js ou ASP.NET dans une web app simplement.',
                    list: [
                     ],
                    link: 'https://azure.microsoft.com/fr-fr/services/app-service/web/',
                    type: 'plateforme',
                    label: 'Hébergez simplement votre bot dans le cloud'
                },
                    {
                    title: 'Bot Directory',
                    image: '../images/cardslogo/meet.png',
                    content: 'Publiez votre bot sur le Bot Directory.',
                    list: [
                     ],
                    link: 'https://bots.botframework.com/',
                    type: 'plateforme',
                    label: 'Diffuser son bot pour accroitre sa visibilité'
                },
{
                    title: 'Bot Framework Emulator',
                    image: '../images/cardslogo/tool.png',
                    content: 'L\'emulateur open source qui permet de simuler un chat pour tester votre bot facilement. Disponible pour Windows, Mac et Linux !',
                    list: [
                     {
                            link: 'https://aka.ms/bf-bc-emulator',
                            list: 'Télécharger',
                            icon: 'fa-download'
                        },
                     ],
                    link: 'https://github.com/microsoft/botframework-emulator/wiki/Getting-Started',
                    type: 'outil',
                    label: 'Tester son bot facilement avec l\'émulateur'
                },
                
                    {
                    title: 'Visual Studio',
                    image: '../images/cardslogo/vsts.png',
                    content: 'Téléchargez-le gratuitement dès maintenant !',
                    list: [
                    ],
                    link: 'http://docs.botframework.com/connector/getstarted/#getting-started-in-net',
                    type: 'outil',
                    label: 'Télécharger le template .NET pour Visual Studio'
                },
                  {
                    title: 'VS Code',
                    image: '../images/cardslogo/vsts.png',
                    content: 'L\'éditeur de code gratuit, léger et cross-plateforme de Microsoft. En plus c\'est Open Source !',
                    list: [ ],
                    link: 'https://code.visualstudio.com/',
                    type: 'outil',
                    label: 'Un éditeur de code léger pour développer en Node.js'
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
                $('.cards .row-' + cards[i].type + '').append(' <div class="col col-md-4 col-sm-6"> <div class="card"> <div class="card-top"> <img src="'+ cards[i].image +'" alt="'+ cards[i].label +'"> <span>'+ cards[i].label +'</span> </div> <div class="card-content"> <div class="card-content-div"> <div class="card-abs"><div class="sep"></div><a target="_blank" href="'+ cards[i].link +'" title="'+ cards[i].title +'">En savoir plus</a> '+ cards[i].list_html +'</div> <span class="label">' + cards[i].title +'</span>'+ cards[i].content +' </div> </div> </div> </div> </div> </div>');
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
