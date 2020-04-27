const TimeLock = artifacts.require("Timelock");

const admin = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";
const delay =  1728000;

module.exports = function(deployer) {
  deployer.deploy(TimeLock, admin, delay);
};