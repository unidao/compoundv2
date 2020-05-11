const GovernorAlpha = artifacts.require("GovernorAlpha");
const Comp = artifacts.require("Comp");
const TimeLock = artifacts.require("Timelock");

const guardian =  "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(GovernorAlpha, TimeLock.address, Comp.address, guardian);
};