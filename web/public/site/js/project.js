var revapiProject = $(document).ready(function() {

    function saveProject() {
        console.log("Save Project");
        const project = $("#curr-project")
        if (project){
            if (localStorage.getItem('clickProject')) {
                localStorage.removeItem('clickProject');
            }
            localStorage.setItem('clickProject', project.attr("data-id") + '');
        }
    }

    var revSliderProject = $('#revslider_project');

    revSliderProject.show().revolution({
        "stopLoop": 'on',
        "stopAfterLoops": 0,
        "stopAtSlide": 1,
        "sliderType": "standard",
        "delay": 5000,
        "gridwidth": 1600,
        "responsiveLevels": [1920, 1440, 778, 480],
        "gridheight": ['100%','auto','100%','100%'],
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

    function setSignature(seconds = 1000){
        setTimeout(function () {
            let alt = $(".tp-revslider-mainul > li[style*='visibility: inherit']").attr('data-alt');
            let projName = $("#projName");
            projName.text(alt ? alt : projName.attr("data-title"));
        }, seconds);
    }

    $('#nextSlideProject').on('click',function(e){
        e.preventDefault();
        revSliderProject.revnext();
        //setSignature(2000);
        //data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNy41IDM5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNy41IDM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iYXJyb3dfcl9nYWxlcnkiPg0KCTxwb2x5Z29uIHBvaW50cz0iMC44LDM5IDAsMzguNCAxNi4yLDE5LjYgMCwwLjcgMC44LDAgMTcuNSwxOS42IAkiLz4NCjwvZz4NCjwvc3ZnPg0K
    });

    $('#prevSlideProject').on('click',function(e){
        e.preventDefault();
        revSliderProject.revprev();
        //setSignature(2000);
    });

    /*Получение контента без перезагрузки страницы*/
    $(".btn-back").click(function (e) {
        e.preventDefault();
        console.log("click");
        const url = $(this).attr('routerLink');
        const apiUrl = $(this).attr('apiLink');
        if (history.pushState) {
            $.ajax({
                url: apiUrl,
                method: "GET",
                success: function (json) {
                    if(json.html) {
                        $("#mainContent").empty();
                        $("#mainContent").html(json.html);
                        window.history.pushState(json.html, "Дизайн студия Андрея Гординского", url);
                    }
                },
                error: function (error) {
                    console.error(error);
                }
            });

        } else {
            document.location.href = url;
        }
        return false;
    });

    saveProject();
    setSignature();
}); // revslider

$(document).ready(function() {
    var api = revapiProject;
 
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