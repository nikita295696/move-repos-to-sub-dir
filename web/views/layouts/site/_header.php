<header class="header">
    <div id="mobmenu-wrap">
        <div class="mobmenu-bar"><a class="logo logo_mob" routerLink="/"><img class="logo__img logo__img_mob" src="<?=PUBLIC_URL?>site/img/svg/gordisky_mob_logo.svg" alt="gordinsky"></a>
            <div class="mobmenu-bar__arch"><img class="mobmenu-bar__arch-img" src="<?=PUBLIC_URL?>site/img/svg/architect-designer.svg" alt="gordinsky architect designer"></div>
            <div class="burger-menu mobmenu-btn">
                <div class="burger-menu__item"></div>
                <div class="burger-menu__item"></div>
                <div class="burger-menu__item"></div>
            </div>
        </div>
        <div class="mobmenu" id="mobmenu">
            <div class="mobmenu-wrap">
                <div class="mobmenu-bar"><a class="logo logo_mob non-focused" routerLink="/"><img class="logo__img logo__img_mob" src="<?=PUBLIC_URL?>site/img/svg/gordisky_logo.svg" alt="gordinsky"></a><a class="about__close about__close_mob mobmenu-btn non-focused" href="#"></a></div>
                <ul class="mobmenu__list">
                    <li class="mobmenu__item"><a class="mobmenu__link" routerLink="/portfolio" routerLinkActive="mobmenu__link_active">портфолио</a></li>
                    <li class="mobmenu__item"><a class="mobmenu__link" routerLink="/uslugi" routerLinkActive="mobmenu__link_active">услуги студии</a>
                        <ul class="sub-mobmenu">
                            <li class="sub-mobmenu__item"><a class="sub-mobmenu__link" href="<?=Application::getUrl("uslugi", "index", "dizayn-proekt")?>">дизайн проект</a></li>
                            <li class="sub-mobmenu__item"><a class="sub-mobmenu__link" href="<?=Application::getUrl("uslugi", "index", "tekhnicheskiy-proekt")?>">технический проект</a></li>
                            <li class="sub-mobmenu__item"><a class="sub-mobmenu__link" href="<?=Application::getUrl("uslugi", "index", "proekty-domov")?>">проекты домов</a></li>
                            <li class="sub-mobmenu__item"><a class="sub-mobmenu__link" href="<?=Application::getUrl("uslugi", "index", "dopolnitelnye-uslugi")?>">дополнительные услуги</a></li>
                        </ul>
                    </li>
                    <li class="mobmenu__item"><a class="mobmenu__link" routerLink="/contact">контакты
                            <ul class="sub-mobmenu"></ul>
                    <li class="sub-mobmenu__item"><a class="sub-mobmenu__link" href="<?=Application::getUrl("contact")?>">форма обратной связи</a></li></a></li>
                </ul>
            </div>
            <div class="social__wrap social__wrap_mob">
                <ul class="social">
                    <li class="social__item"><a class="social__link" href="#"><img class="social__img" src="<?=PUBLIC_URL?>site/img/svg/youtube.svg" alt="youtube"></a></li>
                    <li class="social__item"><a class="social__link" href="#"><img class="social__img" src="<?=PUBLIC_URL?>site/img/svg/instagram.svg" alt="instagram"></a></li>
                    <li class="social__item"><a class="social__link" href="#"><img class="social__img" src="<?=PUBLIC_URL?>site/img/svg/facebook.svg" alt="facebook"></a></li>
                    <li class="social__item"><a class="social__link" href="#"><img class="social__img" src="<?=PUBLIC_URL?>site/img/svg/pinterest.svg" alt="pinterest"></a></li>
                </ul>
            </div>
        </div>
    </div>
</header>