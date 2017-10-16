package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
)

func readPrivateKey(path string) (*rsa.PrivateKey, error) {
	privateKeyData, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}

	privateKeyBlock, _ := pem.Decode(privateKeyData)
	if privateKeyBlock == nil {
		return nil, errors.New("invalid private key data")
	}
	if privateKeyBlock.Type != "RSA PRIVATE KEY" {
		return nil, errors.New(fmt.Sprintf("invalid private key type : %s", privateKeyBlock.Type))
	}

	privateKey, err := x509.ParsePKCS1PrivateKey(privateKeyBlock.Bytes)
	if err != nil {
		return nil, err
	}

	return privateKey, err
}

func readPublicKey(path string) (*rsa.PublicKey, error) {
	publicKeyData := []byte(path)
	//publicKeyData, err := ioutil.ReadFile(path)

	//if err != nil {
	//	return nil, err
	//}

	publicKeyBlock, _ := pem.Decode(publicKeyData)
	if publicKeyBlock == nil {
		return nil, errors.New("invalid public key data")
	}
	if publicKeyBlock.Type != "PUBLIC KEY" {
		return nil, errors.New(fmt.Sprintf("invalid public key type : %s", publicKeyBlock.Type))
	}

	publicKeyInterface, err := x509.ParsePKIXPublicKey(publicKeyBlock.Bytes)
	if err != nil {
		return nil, err
	}

	publicKey, ok := publicKeyInterface.(*rsa.PublicKey)
	if !ok {
		return nil, errors.New("not RSA public key")
	}

	return publicKey, nil
}

func main() {
	// read private key
	privateKey, err := readPrivateKey("private-key.pem")
	if err != nil {
		log.Fatal(err)
	}

	// precompute
	//   ref. http://golang.org/pkg/crypto/rsa/#PrivateKey.Precompute
	//   Precompute performs some calculations that speed up private key operations in the future.
	privateKey.Precompute()

	// validate
	//   ref. http://golang.org/pkg/crypto/rsa/#PrivateKey.Validate
	//   Validate performs basic sanity checks on the key.
	//   It returns nil if the key is valid, or else an error describing a problem.
	if err := privateKey.Validate(); err != nil {
		log.Fatal(err)
	}

	// read public key
	kkk := `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxhomS3kWYQgl/QEeLoT1pN9LN
Rdp3HIkZagBNPKIbfPLy9I46fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3D
fHS3OZPFS0YjpWqYQkUYxQhokUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRt
wQCcfRmtbXFneRT28QIDAQAB
-----END PUBLIC KEY-----`
	publicKey, _ := readPublicKey(kkk)

	//Encrypt Miryan Message
	message := []byte("hogehoge")

	ciphertext, err := rsa.EncryptPKCS1v15(rand.Reader, publicKey, message)
	sEnc := base64.StdEncoding.EncodeToString(ciphertext)
	fmt.Println(sEnc)

	enc := "DIDTFnLxdqH0y2avjsESDI9rv7OQBww7J2kPBQ2q67XGnfbQvcxA0L1esn2VJpF9BHQcFFYr44fDQKl6L29lLhZWxzil1/047zY4hQVzyYfkTCBiunsg8HgzvRbPmeIhXoXtprpM8UJobbhURTtr5qMXrbMrFMvQQ+Ur/xAmMt0="
	ciphertext, _ = base64.StdEncoding.DecodeString(enc)

	plainText, _ := rsa.DecryptPKCS1v15(rand.Reader, privateKey, ciphertext)
	fmt.Println(string(plainText))
}
