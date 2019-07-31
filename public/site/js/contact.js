$(document).ready(function () {
    let elemUserName = $("#contacFormSend #userName");
    let elemUserPhone = $("#contacFormSend #userPhone");
    let elemUserComment = $("#contacFormSend #userComment");

    function valideElem(elem, msg, regex = null, regexMsg = null) {
        let isValid = true;
        //elem.removeClass("form-error");
        var tooltip = elem.parent();
        tooltip.removeClass("show");
        let str = elem.val();
        if(!str || str.trim() === ""){
            isValid = false;
            //elem.val("").attr("placeholder", msg).addClass("form-error");
            tooltip.addClass("show");
            tooltip.attr("data-tooltip", msg);
        }

        if(regex && isValid){
            if(!regex.test(str)) {
                //elem.val("").attr("placeholder", regexMsg ? regexMsg : msg).addClass("form-error");
                tooltip.addClass("show");
                tooltip.attr("data-tooltip", regexMsg);
                isValid = false;
            }
        }
        return isValid;
    }

    function validateForm() {
        var isValid = true;

        let msgUser = elemUserName.parent().attr("data-tooltip");
        if(!valideElem(elemUserName, msgUser && msgUser != "" ? msgUser : "Введите, пожалуйста, ваше имя"))
            isValid = false;

        let msgPhone = elemUserPhone.parent().attr("data-tooltip");
        let msgPhoneReg = elemUserPhone.parent().attr("data-regex");
        if(!valideElem(elemUserPhone, msgPhone && msgPhone != "" ? msgPhone : "Введите, пожалуйста, ваш телефон", /^(\+38)?( )?0((-| )?\d{2}(-| )?\d{3}(-| )?\d{2}(-| )?\d{2}|(-| )?\d{2}(-| )?\d{2}(-| )?\d{2}(-| )?\d{3})$/, msgPhoneReg && msgPhoneReg != "" ? msgPhoneReg : "Имеет неверный формат"))
            isValid = false;

        let msgComment = elemUserComment.parent().attr("data-tooltip");

        if(!valideElem(elemUserComment, msgComment && msgComment != "" ? msgComment : "Введите, пожалуйста, комментарий"))
            isValid = false;

        return isValid;

    }

    function sendForm(){
        /*console.log(`Send Feedback = Name: ${elemUserName.val()}, Phone: ${elemUserPhone.val()}, Comment: ${elemUserComment.val()}`);*/
        let submit = $("#contacFormSend .contacts__submit");
        submit.attr("disabled", "disabled");
        $.ajax({
            url: $("#urlApi").val(),
            method: "post",
            data: $("#contacFormSend").serialize(),
            success: function (json) {
                console.log(json);
                if(json.success){
                    $("#contacFormSend input.contacts__input, #contacFormSend textarea").val("");
                    $('#myfond_gris').fadeIn(300);
                    $('#popupSuccess').fadeIn(300);
                }
                submit.removeAttr("disabled");
            },
            error: function (error) {
                console.error(error);
                submit.removeAttribute("disabled");
                $('#myfond_gris').fadeIn(300);
                $('#popupError').fadeIn(300);
            }
        });
    }

    $("#contacFormSend").submit(function (e) {
        e.preventDefault();

        if(validateForm()){
            sendForm();
        }

        return false;
    });

    $("#closeBtnSuccess").click(function (e) {
        $('#myfond_gris').fadeOut(300);
        $('#popupSuccess').fadeOut(300);
    });

    $("#closeBtnError").click(function (e) {
        $('#myfond_gris').fadeOut(300);
        $('#popupError').fadeOut(300);
    });
});