(function($) {
    $(function() {

    // 1 item per screen
    // see main.js
    // code is there (in Drupal.behaviors) because of ajax in sidebar (Poll module?)

    // 3 items per screen
    let jcarousel = $('.jcarousel-trio');
    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            let carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({wrap: 'circular'});


    // 4 items per screen
    let jcarousel2 = $('.jcarousel-quart');
    jcarousel2
        .on('jcarousel:reload jcarousel:create', function () {
            let carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                // width = width / 4;   // when 5 and more items
                width = width / 3;  // when 4 items only
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        });
    jcarousel2.jcarousel({
        vertical: false,
        wrap: 'circular'
    });



    // jcarousel pager for nodes
    // let pager_carousel = $('.jcarousel-pager').jcarousel();
    let pager_carousel = $('#field-slideshow-1-carousel').jcarousel();
        pager_carousel
            .on('jcarousel:reload jcarousel:create', function () {
                let carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({wrap: 'circular'});

        // $('.jcarousel-prev').jcarouselControl({
        //     target: '-=1',
        //     carousel: pager_carousel
        // });
        //
        // $('.jcarousel-next').jcarouselControl({
        //     target: '+=1',
        //     carousel: pager_carousel
        // });



	// контролы
        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });



    });
})(jQuery);