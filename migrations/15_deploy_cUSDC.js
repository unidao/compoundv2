const cDAI = artifacts.require("CUSDC");

const underlying = "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b"; // Basic token - current DAI
const comptroller = "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb";
const InterestRateModel = "0x1a43bfd39b15dcf444e17ab408c4b5be32deb7f5";
const mantissa= "200000000000000000000000000";
const name_= "Compound USD Coin";
const symbol = "cUSDC";
const decimals = 8;

module.exports = function(deployer) {
  deployer.deploy(cDAI, underlying, comptroller, InterestRateModel, mantissa, name_, symbol, decimals);
};
