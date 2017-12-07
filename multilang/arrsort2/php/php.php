<?php

include_once "vendor/autoload.php";

use Illuminate\Support\Collection;

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

$collection = new Collection($arr);

$sort = $collection->sortBy("score");
var_dump($sort->toArray());
