<?php
/** @var \models\Project[] $projects */
?>
<div class="portfolio main-wrap base-wrap">
    <div class="portfolio__top-back"></div><a class="arrow-down arrow-down_bottom1 arrow-down_fixed wow fadeIn non-focused" href="#about-me" data-wow-delay="3s" data-wow-duration="1s" id="downPortfolio"></a>

    <div class="port-wrap">
        <?php foreach ($projects as $project) { ?>
        <div class="portpic__wrap <?=$project->isLeft() ? 'portpic__wrap_left' : 'portpic__wrap_right'?>" id="<?=$project->getId()?>Project">
            <a class="portpic__block <?=$project->isLeft() ? 'portpic__block_left wow fadeInLeft' : 'portpic__block_right wow fadeInRight'?>" href="#" routerLink="<?=Application::getUrl("portfolio", "project", $project->getId())?>" apiLink="<?=Application::getUrl("api", "project", $project->getId())?>" data-wow-duration="3s">
                <img class="portpic__img <?=$project->isLeft() ? 'portpic__img_left' : 'portpic__img_right'?>" src="<?=$project->getBaseImage()->getPath()?>" alt="<?=$project->getBaseImage()->getSignature()?>">
                <div class="portpic__line <?=$project->isLeft() ? 'portpic__line_left' : 'portpic__line_right'?>">
                    <p class="portpic__name <?=$project->isLeft() ? 'portpic__name_left' : 'portpic__name_right'?>"><?=$project->getTitle()?></p>
                </div>
            </a>
        </div>
        <?php } ?>
    </div>
</div>

<script src="<?=PUBLIC_URL?>site/js/portfolio.js"></script>
<script src="<?=PUBLIC_URL?>site/js/wow_init.js"></script>
<script src="<?=PUBLIC_URL?>site/js/app.js"></script>