<?php

list($shouhinmei, $kingaku) = inputValue();
$otsuri = calc($shouhinmei, $kingaku);
outputValue($shouhinmei, $otsuri);

function inputValue() {
    $args = $_SERVER['argv'];
    return [$args[1], $args[2]];
}

function calc($shouhinmei, $kingaku) {
}

function outputValue($shouhinmei, $otsuri) {
}
