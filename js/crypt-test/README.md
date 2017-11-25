``` sh
openssl genrsa 1024 > private-key.pem
```

``` sh
openssl rsa -pubout < private-key.pem > public-key.pem
```
