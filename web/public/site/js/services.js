$(document).ready(function() {

    var servMenu = $('#serv-menu'),
        servBtn = $('#serv-menu .serv__item'),
        servTextWrap = $('#serv-menu .serv__text-wrap');

    var servTop = -(servMenu.outerHeight() - servTextWrap.outerHeight());

    /*Выделение текущей услуги*/
    function selectService(id) {
        $("#serv-menu .serv__item_active").removeClass("serv__item_active");
        $(`#serv-menu a.serv__item[data-id=${id}]`).addClass("serv__item_active");
    }

    /*Выгрузка выбранной услуги*/
    function getContent(urlApi, url,  id){
        if (history.pushState) {
            $.ajax({
                url: urlApi,
                method: "GET",
                success: function (json) {
                    console.log(json);
                    if(json.html) {
                        $("#oneService").css("display", "none");
                        $("#oneService").empty();
                        $("#oneService").html(json.html);
                        selectService(id);
                        $("#oneService").css("display", "flex");
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
    }


    servBtn.on('click', function(e) {
        e.preventDefault();
        getContent($(this).attr("apiLink"), $(this).attr('routerLink'), $(this).attr("data-id"));
        if($(window).width() > 768) {
             servMenu.addClass('serv_fixed');
            servMenu.animate({'top':servTop-2},1000);
        }

        return false;

    });

    setTimeout(function () {
        /*Проверяет есть ли активная услуга, если есть - нажимаем и выгружаем ее*/
        const activeMenu = $("#serv-menu .serv__item_active");
        if(activeMenu){
            activeMenu.click();
        }
    }, 2000);

});

