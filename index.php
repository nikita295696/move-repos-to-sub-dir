<?php

require_once 'Application.php';
require_once 'config/DbConfig.php';

define("PUBLIC_URL", \config\DbConfig::getConfig()['public_url']);
define("BASE_URL", \config\DbConfig::getConfig()['base_url']);

$app = new Application();
$app->run();