<?php /** @var \models\Image[] $frontSlider */ ?>
<main class="main" id="fullpage">
    <section class="section section1 main-wrap home-slider home-slider_top" id="projects" >
        <div class="slider-wrap wow" id="sliders" data-wow-duration="2s">
            <div class="slides" id="revslider_frpage" style="display:none;" data-version="5.4.7.4">
                <ul id="revslider-list">
                    <!--
                    <li data-transition="slotzoom-horizontal" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="<?=PUBLIC_URL?>site/img/slide1.jpg" alt="gordinsky"></li>
                    <li data-transition="slotzoom-horizontal" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="<?=PUBLIC_URL?>site/img/slide2.jpg" alt="gordinsky"></li>
                    -->
                    <?php foreach ($frontSlider as $image) { ?>
                        <li data-transition="slotzoom-horizontal" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="<?=$image->getPath()?>" alt="<?=$image->getSignature()?>"></li>
                    <?php } ?>
                </ul>
            </div>
            <div class="about" id="about"><a class="about__close about__close_mob1 non-focused" href="#" id="about-close"></a>
                <div class="about__wrap">
                    <?=$learnMore?>
                </div>
            </div><a class="about-link" href="#" id="about-link"><span class="about-link__more">узнать больше</span> о студии</a>
        </div><a class="arrow-down arrow-down_bottom1 wow fadeIn non-focused" href="#about-me" data-wow-delay="1.5s" data-wow-duration="1s"></a>
        <div class="main-title__wrap">
            <p class="main-title main-title_letspacing">студия дизайна</p>
            <p class="main-title">Андрея Гординского</p>
        </div>
    </section>
    <section class="section section2 main-wrap home-welcome" id="about-me">
        <div class="rects">
            <div class="rect1 wow fadeInLeft" id="rect1" data-wow-offset="10" data-wow-delay=".5s" data-wow-duration="3s"></div>
            <div class="rect2__wrap">

                <!--
                <div class="title__wrap title_left wow fadeInUp" data-wow-delay="1s" data-wow-duration="3s">
                    <p class="title" id="title-name">
                        <span class="title__letter">A</span>ндрей Гординский</p>
                    <p class="titlet" id="title-cont"></p>
                    <p class="title__text">- дизайнер и архитектор, основатель дизайн-бюро Gordinsky architect.</p>
                    <p class="title__text"><span class="title__lgtext"> Наше направление </span> - архитектурное проектирование и дизайн интерьера.</p>
                    <p class="title__text"><span class="title__lgtext">Цель студии </span> – создать удивительное и неповторимое, раскрывая по новому дизайн и функционал планирования жилого пространства. </p>
                </div>
                -->
                <?=$about['text']?>
                <div class="rect2 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="3s">
                    <div class="rect2__img-wrap wow fadeIn" data-wow-delay="3s" data-wow-duration="3s"><img class="rect2__img" src="<?=$about['image']?>" alt="author"></div>
                </div><a class="arrow-down arrow-down_bottom2 wow fadeIn non-focused" href="#section3" data-wow-delay="3s" data-wow-duration="1s" onClick="$.fn.fullpage.moveTo('section3');" id="downFrontpage"></a>

                <!--

                 -->
            </div>
        </div>
    </section>
    <section class="section section3 fp-auto-height" id="footer">
        <footer class="footer">
            <div class="footer__top">
                <div class="footer__top-wrap">
                    <div class="address wow animate fadeIn" data-wow-duration="1s">
                        <p class="footer__text address__text-wrap">Днепр, <br> проспект Гагарина, 74, <br> офіс 513</p>
                    </div>
                    <div class="footer__vr"></div>
                    <div class="contact wow animate fadeIn" data-wow-duration="1s"><a class="contact__link contact__tel" href="tel:0967777777">096 777 77 77</a><a class="contact__link contact__mail" href="mailto:info@gordinsky.com.ua">info@gordinsky.com.ua</a></div>
                </div>
            </div>
            <div class="footer__bottom">
                <p class="fbot-text">2019 &copy; gordinsky.com</p>
            </div>
        </footer>
    </section>
</main>
<script src="<?=PUBLIC_URL?>site/js/common.js"></script>