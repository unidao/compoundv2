const CEther = artifacts.require("CEther");

const comptroller = "0x2EAa9D77AE4D8f9cdD9FAAcd44016E746485bddb";
const interestRate = "0xE12630c8Fdd7d0096c9Cd72Cd228598AEBe58795";

const mantissa = "200000000000000000000000000";
const name_ = "Compound Ether ";
const symbol = "cETH";
const decimals = "8";

module.exports = function(deployer) {
  deployer.deploy(CEther, comptroller, interestRate, mantissa, name_, symbol, decimals);
};