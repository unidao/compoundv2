const CDaiDelegate = artifacts.require("CDaiDelegate");

module.exports = function(deployer) {
  deployer.deploy(CDaiDelegate);
};