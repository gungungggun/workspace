<?php

list($shouhinmei, $kingaku) = inputValue();
$otsuri = calc($shouhinmei, $kingaku);
outputValue($shouhinmei, $otsuri);

/**
 * コマンドラインから引数を拾って商品名と金額を返却する関数
 *
 * @return array
 */
function inputValue() {
    $args = $_SERVER['argv'];
    return [$args[1], $args[2]];
}

/**
 * 商品リストと照らし合わせてお釣り計算する関数
 *
 * @param string $shouhinmei
 * @param int $kingaku
 * @return int
 */
function calc($shouhinmei, $kingaku) {
    $list = [
        [
            'name' => 'コーラ',
            'price' => 120,
        ],
        [
            'name' => 'お茶',
            'price' => 100,
        ]
    ];
    $otsuri = null;
    foreach ($list as $l) {
        if ($l['name'] == $shouhinmei) {
            $otsuri = $kingaku - $l['price'];
        }
    }
    return $otsuri;
}

/**
 * 購入商品とお釣りをechoする関数
 *
 * @param string $shouhinmei
 * @param int $otsuri
 * @return void
 */
function outputValue($shouhinmei, $otsuri) {
    echo $shouhinmei;
    echo PHP_EOL;
    echo $otsuri;
    echo PHP_EOL;
}
