function portfolioInit() {
    if (typeof $.fn.fullpage.destroy == 'function') {
        $.fn.fullpage.destroy('all');
    }

    var projectLine = $('.portpic__line'),
        projectName = $('.portpic__name'),
        imgCont = $('.portpic__wrap');

    //if (projectName.length) projectName.shuffleLetters();

    //навесить на элемент класс с анимацией
    function addAnimationtoElement(elem, nextAnim){
        $(elem).addClass(nextAnim);
        $(elem).css({'animation-name':nextAnim});
    }
    //анимируем первые два слова
    setTimeout(function(){
        $(projectName[0]).shuffleLetters();
        $(projectLine[0]).addClass('portpic__line_show');
    },2600);

    //анимируем проекты
    (function(){
        var i=1,
            already_animated = {};

        $(window).scroll(function(){

            if($(this).scrollTop() > $(imgCont[i]).offset().top-400){
                var id = $(imgCont[i]).attr('id'),
                    animLetter = $(projectName[i]),
                    animLine = $(projectLine[i]);

                if(i<imgCont.length-1){

                    //$(imgCont[i-1]).addClass('active-transf');

                    if(already_animated[id] !== 1){
                        setTimeout(function(){
                            animLetter.shuffleLetters();
                            animLine.addClass('portpic__line_show');
                        },500);
                        already_animated[id] = 1;
                    }
                    i++;
                } else if(i == imgCont.length-1){
                    //$(imgCont[i-1]).addClass('active-transf');

                    if(already_animated[id] !== 1){
                        setTimeout(function(){
                            animLetter.shuffleLetters();
                            animLine.addClass('portpic__line_show');
                        },500);
                        already_animated[id] = 1;
                    }

                }
            }else if($(this).scrollTop() < $(imgCont[i]).offset().top-400){
                //$(imgCont[i-1]).removeClass('active-transf');
                i--;
            }
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                var id = $(imgCont[imgCont.length-1]).attr('id');
                if(already_animated[id] !== 1){
                    $(projectName[imgCont.length-1]).shuffleLetters();
                    $(projectLine[imgCont.length-1]).addClass('portpic__line_show');
                    already_animated[id] = 1;
                }
            }
        });
    })();

    var pageHeight = $('.portfolio').height(),
        arrowDownPortf= $('#downPortfolio');
    $(window).scroll(function(){
        if($(arrowDownPortf).offset().top > pageHeight-300){
            arrowDownPortf.addClass('arrow-down_hide');
        }else{
            arrowDownPortf.removeClass('arrow-down_hide');
        }
    });

    /*Получение контента без перезагрузки страницы*/
    $("a.portpic__block").click(function (e) {
        e.preventDefault();
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
}

$(document).ready(portfolioInit);

/*Анимация с возвратом на выбранный проект*/
function portfolioScrollToElement(){
    setTimeout(function () {
        const clickProjectId = localStorage.getItem('clickProject');
        if (clickProjectId) {
            var elem = $(`#${clickProjectId}Project`);
            if(elem) {
                //$("body").scroll(elem.top - 400);
                $('html, body').animate({
                    scrollTop: elem.offset().top - 300
                }, 1000);
            }
        }
    }, 400);
}

$(document).ready(portfolioScrollToElement);

portfolioScrollToElement();