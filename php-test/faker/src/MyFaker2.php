<?php

include('../vendor/fzaninotto/faker/src/Faker/Factory.php');

$faker = Faker\Factory::create();
echo $faker->name;
echo PHP_EOL;
echo $faker->address;
echo PHP_EOL;
echo $faker->text;
echo PHP_EOL;
echo $faker->email;
echo PHP_EOL;
echo $faker->userAgent;
echo PHP_EOL;
echo $faker->creditCardNumber;
echo PHP_EOL;
