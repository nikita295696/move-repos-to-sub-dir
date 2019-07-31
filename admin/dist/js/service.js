var revapiService = $(document).ready(function() {

    var revSliderService = $('#revslider_service');

    revSliderService.show().revolution({
        "stopLoop": 'on',
        "stopAfterLoops": 0,
        "stopAtSlide": 1,
        "sliderType": "standard",
        "delay": 5000,
        "gridwidth": 1060,
        "responsiveLevels": [1920, 1440, 778, 480],
        "gridheight": ['625','auto','100%','100%'],
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
                    "h_offset": 0,
                    "v_offset": 0
                },
                "right": {
                    "h_align": "right",
                    "v_align": "center",
                    "h_offset": 0,
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


    $('#nextSlideService').on('click',function(e){
        e.preventDefault();
        revSliderService.revnext();
    });

    $('#prevSlideService').on('click',function(e){
        e.preventDefault();
        revSliderService.revprev();
    });
}); // revslider

$(document).ready(function() {
    var api = revapiService;
 
    /* no need to edit below */
    var divider = ' / ',
        totalSlides,
        numberText;

    api.one('revolution.slide.onloaded', function() {
    
        totalSlides = api.revmaxslide();
        numberText = api.find('.slide-status-numbers').text('1' + divider + totalSlides);
    
        api.on('revolution.slide.onbeforeswap', function(e, data) {
    
            numberText.text((data.nextslide.index() + 1) + divider + totalSlides);
    
        });
    
    });
});