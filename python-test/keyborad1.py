#!/usr/bin/python
# coding: utf-8

from time import sleep

try:
    while True:
        print('true')
        sleep(0.01)

except KeyboardInterrupt:
    print('KeybordInpterrupt')
    pass

print('end')
