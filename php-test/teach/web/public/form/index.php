<?php

ini_set('error_reporting', E_ALL);

include('../../config/base.php');

$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = '';
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        if (!is_string($name)) {
            $errorMessage = '改ざんされたよ';
        }
    }
    if ($name == '') {
        $errorMessage = '名前が入力されていません';
    } else {
        header('Location: /form/confirm.php');
        exit;
    }
}

include(PAGE_ROOT . 'form/index.php');
