function portfolioInit() {

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

                    $(imgCont[i-1]).addClass('active-transf');

                    if(already_animated[id] !== 1){
                        setTimeout(function(){
                            animLetter.shuffleLetters();
                            animLine.addClass('portpic__line_show');
                        },500);
                        already_animated[id] = 1;
                    }
                    i++;
                } else if(i == imgCont.length-1){
                    $(imgCont[i-1]).addClass('active-transf');

                    if(already_animated[id] !== 1){
                        setTimeout(function(){
                            animLetter.shuffleLetters();
                            animLine.addClass('portpic__line_show');
                        },500);
                        already_animated[id] = 1;
                    }

                }
            }else if($(this).scrollTop() < $(imgCont[i]).offset().top-400){
                $(imgCont[i-1]).removeClass('active-transf');
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
}

$(document).ready(portfolioInit);

function portfolioScrollToElement(){
    setTimeout(function () {
        const clickProjectId = localStorage.getItem('clickProject');
        if (clickProjectId) {
            var elem = document.getElementById(clickProjectId + 'Project');
            if(elem) {
                elem.scrollIntoView();
            }
        }
    }, 400);
}

$(document).ready(portfolioScrollToElement);