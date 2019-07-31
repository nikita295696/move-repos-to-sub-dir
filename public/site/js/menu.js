$(document).ready(function() {

    var burgerMenu = $('#mobmenu-wrap .mobmenu-btn'),
        mobMenu = $('#mobmenu');

    if(burgerMenu.length){
        burgerMenu.on('click',function(e){
            e.preventDefault();
            mobMenu.toggleClass('mobmenu_active');
        });
    }

    /*Выгрузка контента без перезагрузки страницы*/
    $("a.menu__link").click(function (e) {
        $(".menu .menu__link").removeClass("menu__link_active");
        $(this).addClass("menu__link_active");

        e.preventDefault();
        const url = $(this).attr('routerLink');
        const apiUrl = $(this).attr('apiLink');
        if (history.pushState) {
            $.ajax({
                url: apiUrl,
                method: "GET",
                success: function (json) {
                    console.log(json);
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
});