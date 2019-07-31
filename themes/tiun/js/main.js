let $ = window.jQuery;
$(function(){

// jcarousel autorotate & swipe (!not initialization!)
    $('.jcarousel-integre, .jcarousel-trio')
        .jcarouselAutoscroll({
            interval: 6000,
            target: '+=1',
            autostart: true,
            vertical: false
        })
        .jcarouselSwipe();

});

(function ($) {
    // .user-login-form & .user-register-form
    $(document).ajaxComplete(function() {
        modal_add_class($('.modal-dialog'));
    });

    $('.modal').on('shown.bs.modal', function() {
        modal_add_class($('.modal-dialog'));
    });
    function modal_add_class(elem){
        elem.each(function() {
            if ($(this).find('.user-register-form').length>0){
                $(this).addClass('user_register-modal');
            }else{
                $(this).removeClass('user_register-modal');
            }
        });
    }


    Drupal.behaviors.tiun_js = {
            attach: function(context, settings) {

            var user_form = $('.user-form');
            // set panels to be collapsed initially
            if (user_form.length){
                var initially_collapsed = user_form.find('.panel-collapse');
                initially_collapsed.each(function() {
                    $(this).removeClass('in');
                });
            }
            // space between input and text inside label
            var el_to_wrap = $('.form-type-checkbox').find('label'),
                is_text_wrapped = el_to_wrap.find('span');
            if (is_text_wrapped.length==0){
                el_to_wrap.contents().eq(1).wrap('<span />');
            }

            // маска телефона (на стр. чекаута, в модалке колбэка)
            var phone_mask = {
                UA: '+380(99) 999-99-99'
            };
            try {
                phone_mask = phone_mask['UA'];
            }
            catch(e){
                phone_mask = phone_mask['UA'];
            }
            var inputs = $('input.form-tel');
            inputs.inputmask(phone_mask);
            inputs.attr("oninvalid", "this.setCustomValidity(Drupal.t('Enter your phone number'))");
            inputs.attr("oninput", "setCustomValidity('')");



            // jCarousel
            // code is here because of ajax in sidebar (Poll module?)
            // 1 item per screen
            let jcarousel0 = $('.jcarousel-integre');
            jcarousel0
                .on('jcarousel:reload jcarousel:create', function () {
                    let carousel = $(this),
                        width = carousel.innerWidth();

                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                });
            jcarousel0.jcarousel({
                vertical: false,
                wrap: 'circular'
            });

            // 3 items per screen
            // see jcarousel.responsive.js

            // 4 items per screen
            // see jcarousel.responsive.js


        }
    };

    // placeholders:
    $('[placeholder]')
        .focus(function () {
            // var input = $(this);
            // if (input.val() === input.attr('placeholder')) {
            //     input.val('').removeClass('placeholder');
            //     $(this).css("color", "#FFCB07"); // цвет текста внутри input по фокусу / клику
            // }
        })
        .blur(function () {
            var input = $(this);
            if (input.val() === '' || input.val() === input.attr('placeholder')) {
                input.addClass('placeholder').val(input.attr('placeholder'));
                $(this).css("color", "#FFFFFF");		// цвет плейсхолдеров по умолчанию
                $(this).css("font-style", "italic");		// цвет плейсхолдеров по умолчанию
                // чтобы по фокусу был другой цвет
            }
        })
        .blur()
        .parents('form').submit(function () {	// чтобы не отправлять текст плейсхолдера как реальные данные
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() === input.attr('placeholder')) {
                input.val('');
            }
        });
    });

})(jQuery);


