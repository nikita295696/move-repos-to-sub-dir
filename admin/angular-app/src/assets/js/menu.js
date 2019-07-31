$(document).ready(function() {

    var burgerMenu = $('#mobmenu-wrap .mobmenu-btn'),
        mobMenu = $('#mobmenu');

    if(burgerMenu.length){
        burgerMenu.on('click',function(e){
            e.preventDefault();
            mobMenu.toggleClass('mobmenu_active');
        });
    }
});