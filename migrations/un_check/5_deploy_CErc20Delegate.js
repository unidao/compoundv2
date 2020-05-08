const CErc20Delegate = artifacts.require("CErc20Delegate");

module.exports = function(deployer) {
  deployer.deploy(CErc20Delegate);
};
