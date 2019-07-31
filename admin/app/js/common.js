$(document).ready(function() {

var homeSliderPos = $('.slider-wrap').offset().top,
    titleName = $('#title-name'),
    sliderWrap= $('#sliders'),
    typedCount = 0,
    aboutLink = $('#about-link'),
    aboutBlock = $('#about'),
    revSliderList = $('#revslider-list'),
    aboutClose = $('#about-close');

    function fullpage_init() {
        $('#fullpage').fullpage({
            licenseKey: 'FE218AD9-CA7948FB-A9A25B87-28826BBE',
            anchors: ['section1', 'section2', 'section3'],
            touchSensitivity: 5,
            scrollingSpeed: 1300,
            onLeave: function (anchorLink, index, direction) {
                // var leavingSection = this;
                if (direction === 'down') {

                }
            },
            afterLoad: function (origin, destination, direction) {

                if (direction === 'up') {
                    // mouse animation
                    // var mouse = $('.mouse-wrap');
                    // if( mouse.hasClass('mouse-wrap_move') === false) {
                    //     mouse.removeClass('mouse-wrap_stop').addClass('mouse-wrap_move');
                    // }
                }

                // hide mobile menu after click on it's anchor > scroll
                var body = $('body');
                if (body.hasClass('navigation-is-open')) {
                    body.toggleClass('navigation-is-open');
                }

            },
            normalScrollElements: '.about_active',
            responsiveWidth: 1025,
            responsiveHeight: 600,
            // bigSectionsDestination: top,
            navigation: false,
            navigationPosition: 'right',
            scrollBar: true, // if false 2-nd frpage section and footer won't have it's content because of wow.js
            css3: false,
            easing: 'easeInOutQuad',
            // loopBottom: true
            // navigationTooltips: ['Приветствие', 'О нашем агентстве', 'Преимущества', 'График и оплата', 'Отзывы сотрудников', 'Стать частью команды', 'Контакты']
        });
    }
    fullpage_init();

    // frpage: @узнать больше
    // delayed aboutLink display
    function showElement(el){
        el.animate({opacity:'1'},'slow');
    }
    setTimeout(function(){
        showElement(aboutLink);
    }, 8000);
    aboutLink.on('click',function(e){
        e.preventDefault();
        aboutLink.addClass('hide');
        // aboutBlock.css({'opacity':'1'});
        aboutBlock.addClass('about_active');
        revSliderList.addClass('slides_active');
        $('#revslider_frpage').revpause();
    });
    aboutClose.on('click',function(e){
        e.preventDefault();
        aboutLink.removeClass('hide');
        // aboutBlock.css({'opacity':'0'});
        aboutBlock.removeClass('about_active');
        revSliderList.removeClass('slides_active');
        $('#revslider_frpage').revresume();
        fullpage_init();
    });

    $(document) // .about_active is dynamically created selector
        .on('mouseenter', '.about_active', function(){
            // we disable fullpage scroll
            fullpage_api.setAllowScrolling(false);
            // we disable page scroll
            $("body").css("overflow", "hidden");
        })
        .on('mouseleave', '.about_active', function(){
            fullpage_api.setAllowScrolling(true);
        });


    // typed letters
    if($(this).scrollTop() > homeSliderPos ){
        typedCount = 1;
    }
    $(window).scroll(function(){
        
        if($(this).scrollTop() > homeSliderPos && typedCount === 0){
            sliderWrap.addClass('fadeOutUp');
            titleName.typed({
                strings: ["<span class='title__letter'>A</span>ндрей Гординский"],
                typeSpeed: 200,
                showCursor:false,
                contentType: 'html',      
            });  
            typedCount = 1;
        }

    });

});

var revapi = $(document).ready(function() {
    
    $('#revslider_frpage').show().revolution({
        "sliderType": "standard",
        "delay": 5000,
        "gridwidth": 1660,
        "responsiveLevels": [1920, 1240, 778, 480],
        "gridheight": ['666','auto','100%','100%'],
        "minHeight": 0,
        "autoHeight": "on",
        "sliderLayout": "auto",
        "fullScreenAutoWidth": "on",
        "fullScreenAlignForce": "off",
        "fullScreenOffsetContainer": "",
        "fullScreenOffset": "0",
        "hideCaptionAtLimit": 0,
        "hideAllCaptionAtLimit": 0,
        "hideSliderAtLimit": 0,
        "disableProgressBar": "on",
        "stopAtSlide": -1,
        "stopAfterLoops": -1,
        "shadow": "0",
        "dottedOverlay": "none",
        "startDelay": 0,
        "lazyType": "none",
        "spinner": "spinner0",
        "shuffle": "off",
        "debugMode": 0,
        "parallax": {
            "type": "mouse",
            "origo": "slidercenter",
            "speed": 2000,
            "levels": [4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
        },
        "navigation": {
            "onHoverStop": "off",
            "touch": {
                "touchenabled": "on"
            },
            "arrows": {
                "enable": false,
                "left": {
                    "h_align": "left",
                    "v_align": "center",
                    "h_offset": 20,
                    "v_offset": 0
                },
                "right": {
                    "h_align": "right",
                    "v_align": "center",
                    "h_offset": 20,
                    "v_offset": 0
                }
            },
            "bullets": {
                "enable": true,
                "hide_onleave": false,
                "hide_over":1024,
                "hide_onmobile":false,
                "v_align": "bottom",
                "h_align": "center",
                "v_offset": 0,
                "space": 27,
                "tmp": ""
            }
        }
    });

}); // revslider


jQuery(document).ready(function($) {

}); // fullpage.js

$(document).ready(function() {

    var donwArrowFront = $('#downFrontpage'),
        aboutMePos = $('#about-me').offset().top;

    $(window).scroll(function(){
       if($(this).scrollTop() > aboutMePos){
            donwArrowFront.addClass('arrow-down_hide');
       }else{
            donwArrowFront.removeClass('arrow-down_hide');
       }
    });
});