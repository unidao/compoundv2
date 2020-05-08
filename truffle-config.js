require('dotenv').config();
require('babel-register');
require('babel-polyfill');
const Web3 = require('web3');

const HDWalletProvider = require('truffle-hdwallet-provider');

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
    new HDWalletProvider(mnemonic, rpcEndpoint, 0, 2);

const infuraProvider = network => providerWithMnemonic(
    process.env.MNEMONIC_DEPLOY || '',
    `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const web3 = new Web3('');
const gasPrice = web3.toWei(process.env.GAS_PRICE_GWEI, "gwei");


module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: infuraProvider('rinkeby'),
      network_id: 4, // eslint-disable-line camelcase
      gasPrice: gasPrice,
      gas: 10000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/YOUR-PROJECT-ID");
      },
      network_id: '3',
    }
 },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 6
    }
  },
  compilers: {
    solc: {
      version: '^0.5.16',
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
};