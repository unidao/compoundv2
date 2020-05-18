const CEther = artifacts.require("CEther");

const comptroller = "0x320cd160c6cE77597f500c3e9aEa9DFdE953a01a";
const interestRate = "0x729d652eA520E23D9821aEc035B6fbd5913494e4";

const mantissa= "200000000000000000000000000";
const name_ = "Compound Ether ";
const symbol = "cETH";
const decimals = "8";

module.exports = function(deployer) {
  deployer.deploy(CEther, comptroller, interestRate, mantissa, name_, symbol, decimals);
};