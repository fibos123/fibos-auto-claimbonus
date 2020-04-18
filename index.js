const FIBOS = require('fibos.js');
require('ssl').loadRootCerts();
const config = require('./config');

const fibos = FIBOS({
  chainId: config['chain-id'],
  keyProvider: config['producer-priKey'],
  httpEndpoint: config['http-end-point'],
});

mian();
setInterval(mian, 1 * 60 * 60 * 1000); // ever 1 hours do it

async function mian() {
  try {
    const result = fibos.claimrewardsSync(config['producer-name'])
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

