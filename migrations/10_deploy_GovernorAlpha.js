const GovernorAlpha = artifacts.require("GovernorAlpha");
const comp = "0xb4cB36fF6e778b38D2b95A4873a999Cb3A85ead5";
const timeLock = "0x03083641fD2362692949c20CBa809c40AA21f2f0";

const guardian =  "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(GovernorAlpha, comp, timeLock, guardian);
};