<?php

$arr = [
    [
        "name" => "Tanaka",
        "score" => 80
    ],
    [
        "name" => "Sasaki",
        "score" => 85
    ],
    [
        "name" => "Sato",
        "score" => 72
    ]
];

$ms = [];
foreach ($arr as $k => $v) {
    $ms[$k] = $v["score"];
}

array_multisort($ms, SORT_ASC, $arr);
var_dump($arr);
