const https = require('https');

https.get('https://master-hcl.tp-k8s.nonprod.hclpnp.com/test', res => {
  console.log('status:', res.statusCode);
}).on('error', err => {
  console.error('error:', err);
});
