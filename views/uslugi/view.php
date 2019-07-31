<?php
/** @var \models\Service $oneServiceModel */
?>
<div class="service__left">
    <div class="service__text-wrap proj-text wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.5s">
        <div class="proj-text__textBack service_textBack"></div>
        <div class="proj-text__hideScrollService"></div>
        <div class="proj-text__text-wrap service_text-padding">
            <p class="proj-text__text"><?= $oneServiceModel->getDescription()?></p>
        </div>
    </div>
    <p class="service__price wow zoomIn" data-wow-delay="2s">$<?= $oneServiceModel->getPrice()?></p>
</div>
<div class="service__right wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1.5s">
    <div class="service__slider-wrap">
        <div class="service-slider" id="revslider_service" style="display:none;" data-version="5.4.7.4">
            <ul>

                <?php foreach ($oneServiceModel->getAllImages() as $image) { ?>
                    <li data-alt="<?=$image->getSignature()?>" data-transition="fade" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="<?=$image->getPath()?>" alt="<?=$image->getSignature()?>"></li>
                <?php } ?>
            </ul>
        </div>
        <div class="service__capt-wrap wow fadeIn" data-wow-delay="2s" data-wow-duration="2s">
            <h1 id="serviceTitle" class="service__caption"><?= $oneServiceModel->getHtmTitle()?></h1>
        </div>
    </div>
    <div class="service__bottom">
        <div class="proj-info__name-wrap">
            <p id="servName" data-title="<?=$oneServiceModel->getTitle()?>" class="proj-info__name"><?=$oneServiceModel->getTitle()?></p>
        </div>
        <div class="arrows service_topArrow"><a class="arrows__left" href="#" id="prevSlideService"></a>
            <div class="slide-status-numbers arrows__numb"></div><a class="arrows__right" href="#" id="nextSlideService"></a>
        </div>
    </div>
</div>
<script src="<?=PUBLIC_URL?>site/js/service.js"></script>
