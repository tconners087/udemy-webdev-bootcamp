const request = require('request');
request('https://www.google.com', (error, response, body) => {
  if(!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    console.log(data);
  } else {
    console.log(error);
  }
});