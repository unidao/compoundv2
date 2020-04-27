const WhitePaperInterestRateModel = artifacts.require("WhitePaperInterestRateModel");

const baseRatePerYear = 50000000000000000;
const multiplierPerYear =  120000000000000000;

module.exports = function(deployer) {
  deployer.deploy(WhitePaperInterestRateModel, baseRatePerYear, multiplierPerYear);
};