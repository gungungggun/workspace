#!/usr/bin/python
# coding: utf-8

# モジュールをインポートする
import RPi.GPIO as GPIO
import time

# GPIO指定をGPIO番号で行う
GPIO.setmode(GPIO.BCM)

# GPIO3ピンを出力モードに設定
GPIO.setup(3, GPIO.OUT)

# GPIO3番ピンを3.3Vに設定
GPIO.output(3, 1)

# 1秒待つ
time.sleep(3)

# GPIO3番ピンを0Vに設定
GPIO.output(3, 0)

# GPIO設定をリセット
GPIO.cleanup()
