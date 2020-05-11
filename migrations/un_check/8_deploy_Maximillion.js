const Maximillion = artifacts.require("Maximillion");
const cEther = artifacts.require("CEther");

module.exports = function(deployer) {
  deployer.deploy(Maximillion, cEther.address);
};