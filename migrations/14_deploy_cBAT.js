const cDAI = artifacts.require("CBAT");

const underlying = "0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99"; // Basic token - current BAT
const comptroller = "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb";
const InterestRateModel = "0x6330d442a2d7ee4dc66c0adb9969e8702aefc9fe";
const mantissa= "200000000000000000000000000";
const name_= "Compound Basic Attention Token";
const symbol = "cBAT";
const decimals = 8;

module.exports = function(deployer) {
  deployer.deploy(cDAI, underlying, comptroller, InterestRateModel, mantissa, name_, symbol, decimals);
};
