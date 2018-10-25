# -*- coding:utf8 -*-
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import os
import time

def customCallback(client, userdata, message):
    print('message: ')
    print(message.payload)
    print('topic: ')
    print(message.topic)
    print('--------------\n\n')

myMQTTClient = AWSIoTMQTTClient('python')
myMQTTClient.configureEndpoint(os.environ['AWSIOT_HOST'], 8883)
myMQTTClient.configureCredentials('keys/G5.pem', 'keys/private.pem.key', 'keys/certificate.pem.crt')
myMQTTClient.configureOfflinePublishQueueing(-1)
myMQTTClient.configureDrainingFrequency(2)
myMQTTClient.configureConnectDisconnectTimeout(10)
myMQTTClient.configureMQTTOperationTimeout(5)
myMQTTClient.connect()
while True:
    myMQTTClient.subscribe("test", 1, customCallback)
    time.sleep(1)

