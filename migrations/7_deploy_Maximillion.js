const Maximillion = artifacts.require("Maximillion");
const cEther = "0xED235778Acd49257c9357BFeE6A18EbABE645c61"

module.exports = function(deployer) {
  deployer.deploy(Maximillion, cEther);
};