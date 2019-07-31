<?php
/** @var \models\Service[] $services */
?>
<div class="services main-wrap" id="services">
    <div class="serv" id="serv-menu">
        <?php foreach ($services as $service) { ?>
            <a class="serv__item <?=isset($serviceId) && !empty($serviceId) && $serviceId == $service->getId() ? 'serv__item_active' : '' ?> wow fadeInUp " href="#" data-wow-delay=".7s"
               data-id="<?=$service->getId()?>"
               data-alias="<?=$service->getAlias()?>"
               apiLink="<?=Application::getUrl("api", "service", $service->getAlias())?>"
               routerLink="<?=Application::getUrl("uslugi", "index", $service->getAlias())?>"
            >
                <div class="serv__icon-wrap">
                    <div class="serv__icon serv__icon_<?=$service->getId()?>"> <img src="<?=$service->getBaseImage()->getPath()?>" alt="<?=$service->getBaseImage()->getSignature()?>"/></div>
                </div>
                <div class="serv__text-wrap">
                    <p class="serv__text"><?=$service->getTitle()?></p>
                </div>
            </a>
        <?php } ?>
    </div>
    <div class="service-wrap" id="oneService" style="display: none">

    </div>
</div>
<script src="<?=PUBLIC_URL?>site/js/services.js"></script>
<script src="<?=PUBLIC_URL?>site/js/app.js"></script>