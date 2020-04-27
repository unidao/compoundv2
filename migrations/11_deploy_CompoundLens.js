const CompoundLens = artifacts.require("CompoundLens");

module.exports = function(deployer) {
  deployer.deploy(CompoundLens);
};