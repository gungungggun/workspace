<?php
$sanrio_characters = [
    "0" => [
        "name" => "mimmy",
        "motif" => "cat",
        "colors" => [
            "yellow",
            "black",
            "white",
            "light_blue",
        ]
    ],
    "1" => [
        "name" => "gudetama",
        "motif" => "egg",
        "colors" => [
            "yellow",
            "white",
            "black",
            "gray",
        ]
    ],
    "2" => [
        "name" => "pompompurin",
        "motif" => "dog",
        "colors" => [
            "yellow",
            "brown",
        ]
    ],
    "3" => [
        "name" => "marumofubiyori",
        "motif" => "polar_bear",
        "colors" => [
            "yellow",
            "light_blue",
            "brack",
            "light_pink",
            "white",
        ]
    ],
    "4" => [
        "name" => "mymelody",
        "motif" => "rabbit",
        "colors" => [
            "pink",
            "black",
            "white",
            "yellow",
        ]
    ],
];

# サンリオの配列データをつかって、一番使われている色が多いものを算出する
# 1. 色をカウントする配列の箱を用意する
# 2. サンリオ配列のループを回す
# 3. キャラの色情報をとってくる
# 4. カウント用の配列にすでに色のキーがあれば+1、なければキーを追加して数値1
# 5. ループ終了後にカウント用の配列で一番数値の大きいものを取得
#     5.1 カウント用の配列のループを回す
#     5.2 前回のループと比較して現在の値が大きければ、そのキーを保持
# 6. 一番数値の大きかった色のキーを出力

$countBox = [];

foreach ($sanrio_characters as $chara) {
    foreach($chara["colors"] as $color) {
        if (isset($countBox[$color])) {
            $countBox[$color]++;
        } else {
            $countBox[$color] = 1;
        }
    }
}

$resultColor = "";
$countMax = 0;
foreach ($countBox as $color => $count) {
    if ($countMax < $count) {
        $resultColor = $color;
        $countMax = $count;
    }
}
echo $resultColor;

