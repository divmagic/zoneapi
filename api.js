const https = require('https');

const options = {
  hostname: 'akw-app.com',
  path: '/',
  method: 'GET',
  headers: {
    'Cache-Control': 'max-age=0',
    'Dnt': '1',
    'Sec-Ch-Ua': '^^Chromium^^";v="116^^",',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': '^^Android^^""',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://akw-app.com/',
    'Origin': 'https://akw-app.com',
    'Connection': 'keep-alive',
    'Content-Length': '0'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(htmlDecode(data));
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}