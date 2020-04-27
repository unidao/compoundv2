const DAIInterestRateModel = artifacts.require("DAIInterestRateModel");

module.exports = function(deployer) {
  deployer.deploy(DAIInterestRateModel);
};