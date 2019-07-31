<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <title>Дизайн студия Андрея Гординского</title>
    <base href="/">

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <link rel="stylesheet" type="text/css" href="<?=PUBLIC_URL?>site/css/revslider_settings.css">
    <link rel="stylesheet" type="text/css" href="<?=PUBLIC_URL?>site/css/fullpage.min.css">
    <link rel="stylesheet" type="text/css" href="<?=PUBLIC_URL?>site/style.css">
    <!--<link rel="stylesheet" type="text/css" href="<?=PUBLIC_URL?>bootstrap/css/bootstrap.css">-->
    <link href="<?=PUBLIC_URL?>site/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="<?=PUBLIC_URL?>site/css/popup.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

    <script src="<?=PUBLIC_URL?>site/js/plugins/flux.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/components/scrolling.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/plugins/jquery.shuffleLetters.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/plugins/jquery.themepunch.tools.min.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/plugins/jquery.themepunch.revolution.min.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/plugins/easings.min.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/plugins/fullpage.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.4/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/menu.js"></script>
    <script src="<?=PUBLIC_URL?>site/js/wow_init.js"></script>
</head>
<body>
<div class="wrapper">
    <div class="main-content">

        <?php /** @var string $content */
        include_once 'site/_header.php'; ?>
        <div id="mainContent">
            <?php include_once $content; ?>
        </div>
        <?php include_once 'site/_sidebar.php';
        ?>

    </div>
</div>

<script>
    //$("div:first").css("display", "none");

    //Переход по истории браузера
    let lastHistoryPath = "";
    $(window).bind('popstate', function(event){
        //$("#mainContent").empty();
        //$("#mainContent").html(history.state);
        if(location.hash == "") {
            location.reload();
        }
    });
</script>

</body>
</html>