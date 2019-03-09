const FIBOS = require('fibos.js');
require('ssl').loadRootCerts();
const config = require('./config');

const client = FIBOS({
  chainId: config['chain-id'],
  keyProvider: config['producer-priKey'],
  httpEndpoint: config['http-end-point'],
});

mian();
setInterval(mian, 24 * 60 * 60 * 1000); // ever 1day do it

async function mian() {
  const eosioContract = await client.contract('eosio');
  try {
    const ret = await eosioContract.claimbonus({
      owner: config['producer-name']
    }, {
        authorization: config['producer-name']
      });

    console.log(ret);
  } catch (e) {
    console.error(e);
  }
};

