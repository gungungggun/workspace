<?php

$val = 'こんにちは OOさん';

function replaceOO() {
    global $val;
    $tp = $val;
    return str_replace('OO', $_ENV['NAME'], $tp);
}

echo replaceOO();
