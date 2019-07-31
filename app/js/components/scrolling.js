$(document).ready(function(){
	// Плавный скролл по якорям
	$('.arrow-down').click(function () { 
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
	});
	$('#downPortfolio').click(function(e){
		e.preventDefault();
		var scroll_el = $(this);
		if ($(scroll_el).length) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top },1000); // анимируем скроолинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});
});