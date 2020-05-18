const CEther = artifacts.require("CEther");

const comptroller = "0xEeb51Df5c21736C6E97825aEfbef797566821461";
const interestRate = "0xf0143FcA0d168d22c7FF345d343a81A2A5AAc143";

const mantissa= "200000000000000000000000000";
const name_ = "Compound Ether ";
const symbol = "cETH";
const decimals = "8";

const admin = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(CEther, comptroller, interestRate, mantissa, name_, symbol, decimals, admin);
};