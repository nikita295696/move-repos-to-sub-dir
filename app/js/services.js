$(document).ready(function() {

    var servMenu = $('#serv-menu'),
        servBtn = $('#serv-menu .serv__item'),
        servTextWrap = $('#serv-menu .serv__text-wrap');

    var servTop = -(servMenu.outerHeight() - servTextWrap.outerHeight());
    
    servBtn.on('click',function(e){
        e.preventDefault();
        if($(window).width() > 768){
             servMenu.addClass('serv_fixed');  
            servMenu.animate({'top':servTop-2},1000);
        }
    });
});

