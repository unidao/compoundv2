const Comp = artifacts.require("Comp");

const account = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(Comp, account);
};