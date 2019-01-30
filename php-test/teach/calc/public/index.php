<?php

include('../config/base.php');

session_start();

$answer = '';
$shiki = '';

if (isset($_POST['btn'])) {

    if ($_POST['btn'] == '=') {
        $shiki = $_SESSION['shiki'];
        $ev = sprintf('$answer=%s;', $shiki);
        try {
            eval($ev);
        } catch (\ParseError $e) {
            $answer = '変な数式だよ';
        }
    } elseif ($_POST['btn'] == 'C') {
        session_destroy();
    } else {
        $shiki = $_SESSION['shiki'] . $_POST['btn'];
        $_SESSION['shiki'] = $shiki;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    session_destroy();
}
include(PAGE_ROOT . 'topView.php');
