<?php

ini_set('error_reporting', E_ALL);

var_dump($_ENV);

include('../config/base.php');

$errorMessage = '';
$name = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    list($name, $email) = postSyori($_POST);

    $errorMessage = errorSyori($name, $email);

    if ($errorMessage == '') {
        if (isset($_POST['btn']) && $_POST['btn'] == 'complete') {
            saveScv($_POST);
            include(PAGE_ROOT . 'complete.php');
        } else {
            include(PAGE_ROOT . 'confirm.php');
        }
    } else {
        include(PAGE_ROOT . 'index.php');
    }
} else {
    include(PAGE_ROOT . 'index.php');
}



function saveCsv($data) {
    $fileHandler = fopen(STORAGE_ROOT . 'form.csv', 'a');
    fputcsv($fileHandler, $data);
}

function postSyori($post) {
    $name = '';
    $email = '';
    if (isset($post['name'])) {
        $name = $post['name'];
    }
    if (isset($post['email'])) {
        $email = $post['email'];
    }
    return [$name, $email];
}

function errorSyori($name, $email) {
    $errorMessage = '';
    if ($name == '') {
        $errorMessage .= '名前が入力されていません';
    }
    if ($email == '') {
        $errorMessage .= 'メールアドレスが入力されていません';
    }
    return $errorMessage;
}
