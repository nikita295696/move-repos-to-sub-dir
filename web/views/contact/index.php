<!--
<div class="contacts main-wrap" id="contacts">
    <div class="contacts-wrap wow fadeIn" data-wow-delay=".5s">
        <div class="contacts__text-wrap wow fadeInLeft" data-wow-delay="1.5s" data-wow-duration="1.5s"><a class="contacts__text contacts__text_tel" href="tel:0967777777">096 777 77 77</a><a class="contacts__text contacts__text_tel" href="tel:0967777777">096 777 77 77</a><a class="contacts__text contacts__text_mail" href="mailto:info@gordinsky.com.ua">info@gordinsky.com.ua</a>
            <p class="contacts__text contacts__text_place">Днепр, проспект Гагарина, 74 офіс 513</p><a class="contacts__text contacts__text_maps" target="_blank" href="https://maps.google.com/maps?ll=48.429543,35.039111&z=15&t=m&hl=ru&gl=UA&mapclient=embed&q=%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%2C%2074%20%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE%20%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2049000">Посмотреть на карте</a>
        </div>
        <div class="contacts__form-wrap wow fadeInRight" data-wow-delay="1.5s" data-wow-duration="1.5s">
            <form class="contacts__form" name="contactSend" id="contacFormSend">
                <input class="contacts__input" type="text" placeholder="Имя" id="userName" name="name">
                <input class="contacts__input" type="tel" placeholder="номер телефона" id="userPhone" name="phone">
                <textarea class="contacts__input contacts__textarea" name="comment" id="userComment" placeholder="коментарий"></textarea>
                <input class="contacts__submit" type="submit" value="отправить">

            </form>
        </div>
    </div>
    <div class="contacts-map wow fadeIn" data-wow-delay=".5s">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.406209825534!2d35.03692211609892!3d48.42954307924773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfcb356ef2c8d%3A0xcd57ecf771f55c32!2z0L_RgNC-0YHQvy4g0JPQsNCz0LDRgNC40L3QsCwgNzQsINCU0L3QuNC_0YDQviwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1558614134615!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
</div>
    -->
<?php
if(isset($contact)){
    echo $contact;
}

echo "<input type='hidden' id='urlApi' value='". \config\DbConfig::getLinks()['sendForm'] ."'/>";
?>
<div id="myfond_gris" opendiv=""></div>
<div id="popupSuccess" class="mymagicoverbox_fenetre" style="left:-225px; width:450px;">
    Поздравляем
    <div class="mymagicoverbox_fenetreinterieur" style="height:150px; ">

        <div align="center">
            <br>Сообщение отправлено успешно
            <div style="width:100px" align="center" id="closeBtnSuccess" class="mymagicoverbox_fermer">Закрыть</div>
        </div>
    </div>
</div>

<div id="popupError" class="mymagicoverbox_fenetre" style="left:-225px; width:450px;">
    Ошибка
    <div class="mymagicoverbox_fenetreinterieur" style="height:150px; ">
        <div align="center">
            <br>Ошибка в отправке
            <div style="width:100px" align="center" id="closeBtnError" class="mymagicoverbox_fermer">Закрыть</div>
        </div>
    </div>
</div>

<script src="<?=PUBLIC_URL?>site/js/app.js"></script>
<script src="<?=PUBLIC_URL?>site/js/contact.js"></script>