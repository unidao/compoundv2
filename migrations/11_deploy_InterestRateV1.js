const WhitePaperInterestRateModelV1 = artifacts.require("WhitePaperInterestRateModel_V1");

const baseRatePerYear = "50000000000000000";
const multiplierPerYear =  "120000000000000000";

module.exports = function(deployer) {
  deployer.deploy(WhitePaperInterestRateModelV1, baseRatePerYear, multiplierPerYear);
};