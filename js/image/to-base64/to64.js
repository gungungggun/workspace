const image2base64 = require('image-to-base64');
image2base64("https://avatars0.githubusercontent.com/u/4622113")
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
