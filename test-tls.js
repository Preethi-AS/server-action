const https = require('https');

https.get('https://testhub.sbx0378.play.hclsofy.com', res => {
  console.log('status:', res.statusCode);
}).on('error', err => {
  console.error('error:', err);
});
