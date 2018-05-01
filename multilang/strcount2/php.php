<?php
$text = '数を調査、文字数をカウントする';
echo substr_count($text, '数');
echo PHP_EOL;
echo mb_substr_count($text, '数');
