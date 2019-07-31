$(document).ready(function() {
    /*var isHomePage = false;
    var isUslugi = false;
    setInterval(function (e) {
        if (location.pathname === "/") {
            isHomePage = true;
        }

        if (location.pathname === "/uslugi") {
            isUslugi = true;
        }else{
            isUslugi = false;
        }

        if (isHomePage && location.pathname !== "/") {
            location.reload();
        }

    }, 500);

    $("#routerUslugi").click(() => {
        if (location.pathname === "/uslugi" && isUslugi) {
            location.reload();
        }
    });*/
    if($.fn.fullpage.setAllowScrolling) {
        $.fn.fullpage.setAllowScrolling(false);
    }


});