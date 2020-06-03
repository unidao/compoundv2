const cDAI = artifacts.require("CDAI");

const underlying = "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea"; // Basic token - current DAI
const comptroller = "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb";
const InterestRateModel = "0xe12630c8fdd7d0096c9cd72cd228598aebe58795";
const mantissa= "200000000000000000000000000";
const name_= "Compound Dai";
const symbol = "cDAI";
const decimals = 8;

module.exports = function(deployer) {
  deployer.deploy(cDAI, underlying, comptroller, InterestRateModel, mantissa, name_, symbol, decimals);
};
