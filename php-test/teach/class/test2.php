<?php

#キャラの名前で一番使われてるアルファベットとその数を算

$charas = [
    "asan", "bsan", "csan"
];

# 1.結果用の箱を用意する
# 2.ループ回す
# 3.データの文字数取得
# 4.ループで1文字ずつ切り出す
# 5.結果用の箱にキーがあれば+1なければ1 キーはアルファベット
# 6.結果用の箱からMax抜き出し

$countBox = [];
foreach ($charas as $chara) {
    $length = strlen($chara);
    for ($i = 0; $i < $length; $i++) {
        $alpha = substr($chara, $i, 1);
        if (isset($countBox[$alpha])) {
            $countBox[$alpha]++;
        } else {
            $countBox[$alpha] = 1;
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
