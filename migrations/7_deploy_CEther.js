const CEther = artifacts.require("CEther");

const Comptroller = artifacts.require("Comptroller");
const WhitePaperInterestRateModel = artifacts.require("WhitePaperInterestRateModel");

const mantissa= "200000000000000000000000000";
const name_ = "Compound Ether ";
const symbol = "cETH";
const decimals = "8";
const admin = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(CEther, Comptroller, WhitePaperInterestRateModel, mantissa, name_, symbol, decimals, admin);
};