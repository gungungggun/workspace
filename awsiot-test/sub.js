var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   //keyPath: 'keys/private.pem.key',
  //certPath: 'keys/certificate.pem.crt',
    //caPath: 'G5.pem',
  clientId: 'nouser' + (Math.floor((Math.random() * 100000) + 1)),
      host: process.env.AWSIOT_HOST,
  protocol: 'wss',
  accessKeyId: process.env.AWSIOT_ACCESSKEYID,
  secretKey: process.env.AWSIOT_SECRETKEY
});

device.on('connect', function() {
  console.log('connect');
  device.subscribe('test');
});

device.on('message', function(topic, payload) {
  console.log(payload.toString());
});
