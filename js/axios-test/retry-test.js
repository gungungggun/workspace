let axios = require('axios');
const axiosRetry = require('axios-retry');
axiosRetry(axios, { retries: 20 });

/*
const retryInterceptor = require('axios-retry-interceptor');
retryInterceptor(axios, {
  maxAttempts: 20,
  waitTime: 1000,
  errorCodes: [401]
});
*/

axios.get('http://localhost:3000/retry')
  .then(result => {
    console.log('ok')
  })
  .catch(error => {
    console.log('error')
  })
