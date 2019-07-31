<?php
/** @var \models\Project $project */
?>

<?php if(isset($project) && !empty($project)) { ?>
<div id="curr-project" class="project main-wrap" data-id="<?=$project->getId()?>">

    <div class="project-slider wow zoomIn" id="revslider_project" style="display:none;" data-version="5.4.7.4" data-wow-duration="2s" data-wow-delay=".5s">
        <!--
        <ul>
            <li data-transition="fade" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="/assets/img/slide1.jpg" alt="gordinsky"></li>
            <li data-transition="fade" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="/assets/img/slide2.jpg" alt="gordinsky"></li>
        </ul>
        -->
        <ul>
            <?php foreach ($project->getImages() as $image) { ?>
                <li data-alt="<?=$image->getSignature()?>" data-transition="fade" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="<?=$image->getPath()?>" alt="<?=$image->getSignature()?>"></li>
            <?php } ?>
        </ul>
    </div>
    <div class="proj-info wow fadeInUp" data-wow-delay="2s">
        <div class="proj-info__left proj-text">
            <div class="proj-text__textBack"></div>
            <div class="proj-text__hideScroll"></div>
            <div class="proj-text__text-wrap">
                <p class="proj-text__text"><?=$project->getDescription()?></p>
            </div>
        </div>
        <div class="proj-info__right">
            <!--
            <div class="proj-info__name-wrap">
                <p class="proj-info__name" id="projName" data-title="<?=$project->getTitle()?>"><?=$project->getTitle()?></p>
            </div>
            -->
            <div class="arrows">
                <a class="arrows__left" href="#" id="prevSlideProject"></a>
                <div class="slide-status-numbers arrows__numb"></div>
                <a class="arrows__right" href="#" id="nextSlideProject"></a>
            </div>
            <div class="btn btn-back" apiLink="<?=Application::getUrl("api", "portfolio")?>" routerLink="<?=Application::getUrl("portfolio")?>">Назад</div>
        </div>
    </div>
</div>
<?php } else { ?>
    <div class="project main-wrap">
        <p>Проект не найден</p>
    </div>
<?php } ?>





<script src="<?=PUBLIC_URL?>site/js/project.js"></script>
<script src="<?=PUBLIC_URL?>site/js/app.js"></script>