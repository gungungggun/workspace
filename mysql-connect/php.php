<?php

$t = microtime(true);

try {
    $sql = new PDO ( 'mysql:dbname=oreore; host=localhost;port=3306; charset=utf8mb4', 'root', 'pass' );
} catch ( PDOException $e ) {
    print "接続エラー:{$e->getMessage()}";
}

foreach($sql->query('select * from personal') as $row){
  echo $row['name']."\n";
}

echo 'time' . (microtime(true) - $t);
