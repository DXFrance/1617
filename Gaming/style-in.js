$(document).ready(function () {
$('a[data-toggle="tooltip"]').tooltip();
            var cards = [
               
           
        
              {
                    title: 'Monogame',
                    image: '../images/general/monogame.png',
                    content: '...',
                    list: [ ],
                    link: 'https://www.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Monogame'
                },

  {
                    title: 'Unity 3D',
                    image: '../images/general/unity.png',
                    content: '...',
                    list: [ ],
                    link: 'https://www.visualstudio.com/',
                    type: 'plateforme',
                    label: 'Unity 3D'
                },

                      {
                    title: 'Babylon JS',
                    image: '../images/general/babylon.png',
                    content: '...',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'plateforme',
                    label: 'Babylon JS'
                },

                /*
                    {
                    title: 'DirectX 12',
                    image: '../images/cardslogo/windows.png',
                    content: 'Plus d\'objets, des scènes plus riches, des effets améliorés pour le matériel le plus récent.',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'plateforme',
                    label: 'Unreal engine'
                },
                     {
                    title: 'DirectX 12',
                    image: '../images/cardslogo/windows.png',
                    content: 'Plus d\'objets, des scènes plus riches, des effets améliorés pour le matériel le plus récent.',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'plateforme',
                    label: 'Coco 2D'
                },
                     {
                    title: 'DirectX 12',
                    image: '../images/cardslogo/windows.png',
                    content: 'Plus d\'objets, des scènes plus riches, des effets améliorés pour le matériel le plus récent.',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'plateforme',
                    label: 'Coco 2DX'
                },
            
                        */

                     {
                    title: 'Le streaming comme futur du gaming',
                    image: '../images/cardslogo/vsts.png',
                    content: '...',
                    list: [ ],
                    link: 'https://www.visualstudio.com/',
                    type: 'azure-gaming',
                    label: 'Hébergement'
                },

                    {
                    title: 'Exploitez la puissance du cloud.',
                    image: '../images/cardslogo/windows.png',
                    content: '...',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'azure-gaming',
                    label: 'GPU rendering'
                },

             {
                    title: 'Gagnez un +2 en jet de sagesse',
                    image: '../images/cardslogo/azure.png',
                    content: '...',
                    list: [ ],
                    link: 'https://azure.microsoft.com/fr-fr/',
                    type: 'azure-gaming',
                    label: 'Intelligence'
                },
                
                    {
                    title: 'DirectX 12',
                    image: '../images/cardslogo/windows.png',
                    content: '...',
                    list: [

                    ],
                    link: 'https://msdn.microsoft.com/fr-fr/library/windows/desktop/dn899121',
                    type: 'directx',
                    label: 'Une optimisation aux petits oignons'
                },

                 {
                    title: 'PIX sur Windows',
                    image: '../images/cardslogo/vsts.png',
                    content: '...',
                    list: [ ],
                    link: 'https://www.visualstudio.com/',
                    type: 'directx',
                    label: 'Débugguer facilement DirectX12'
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

    var resizeTools = function() {
      $('#items .tool div').each(function() {
        console.log($(this).width());
        $(this).css('height', $(this).parent().width() + 'px')
      });
    };

    $(window).on('resize', resizeTools);

    resizeTools();

});
