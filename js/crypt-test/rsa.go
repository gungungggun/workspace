package main

import (
	"crypto/rand"
	"crypto/rsa"
	//"crypto/sha256"
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
	//publicKey, err := readPublicKey("public-key.pem")
	//if err != nil {
	//	log.Fatal(err)
	//}

	//Encrypt Miryan Message
	message := []byte("hogehoge")
	//label := []byte("")
	//hash := sha256.New()

	// ciphertext, err := rsa.EncryptOAEP(hash, rand.Reader, publicKey, message, label)
	ciphertext, err := rsa.EncryptPKCS1v15(rand.Reader, publicKey, message)
	sEnc := base64.StdEncoding.EncodeToString(ciphertext)
	fmt.Println(sEnc)

	enc := "iVtNo8UR6ngfjA2j3VI81JqfJUsSg6eaC84OqvSRM6zQz8VM1XxbIlHbk+a4+LC3udTXYW4pZg8sepQhTigtmDMymcFgxOhthirCDqsdWOvReadfgcxDb/JksYtVCHmRxa7AG1S43BETP/vyavoKBLlsAyOALILzVlMr8u/dQw="
	// enc := "Ke725c9B9SqND8eMgoD+PYJe5zTV0YqZ7buky/pXlbhGQtbyXmvDSSMPgiFdWHVNlNL2oivLxAe2REoL7LFQOW1s7JNFNIarLMSzA3lO3n5rsS2DDOMEkcRmN8FopzgPCtge5jsZJ2VK1EQIf+pSxugwIfJBMol8XVcOhXnHj+TPkkMasHFB/63m//ezyrysg/LWd3QTHVm/vvVBjdVzt7BH?sQ2dijmgcMsNVJ6moygqKEX500LvmjwuWYgiqxokqMA="
	//enc := "A98khBzJe3EI6my1XA/daSUcgDKYIlsGlowpkIcTmzONECwixqpG+bYpbIilLotFHlaDiMZGfqgR0xe2Fm3goeV8azWj9ooXdqFtOY5zWtdWbPt0ZS0kWEsSIx5qlycj5vy15YreAfadwqIhTlcH4JuLgkHkU8U+KOvwLxpwb1m5t9UdDkQ8bM7+ydPhhWGZHKNckvHK0wP1jEA0uMM+3OwE/empta48Tr5cdEHH1BI/30W0ww==?OX+AyyV49C2OCE0h6VBbnSo/B/YpMnmPntzPaisBkdg="
	//enc := "UIwCIbquoQ+MRbrtkOb58gMlz2eVMwGbRykliYgGRFFzPW05ww8YWxDBbW9rs543CvKt4r1A17hskVwen57CgGFdMEhlqGRewuPDzWHsHQ6LKqK6Eeai54V00pvtuqzTeE0rY29DElZZDpI44gTcu3Bz6NNgiQHLCwVczBJMTB8="
	ciphertext2, _ := base64.StdEncoding.DecodeString(enc)
	fmt.Println(ciphertext)

	//plainText, _ := rsa.DecryptOAEP(hash, rand.Reader, privateKey, ciphertext, label)
	//fmt.Println(string(plainText))

	//plainText2, _ := rsa.DecryptOAEP(hash, rand.Reader, privateKey, ciphertext2, label)
	plainText2, _ := rsa.DecryptPKCS1v15(rand.Reader, privateKey, ciphertext2)
	fmt.Println(string(plainText2))
}
