const CEther = artifacts.require("CEther");

const comptroller = "0x333cCd6ddDB4526c39609FE53Ef68EB6D40D04BD";
const tinterestRate = "0xe7E284C190396Cbc98a9cb1262F2697AcaA14cb8";

const mantissa= "200000000000000000000000000";
const name_ = "Compound Ether ";
const symbol = "cETH";
const decimals = "8";

const admin = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";

module.exports = function(deployer) {
  deployer.deploy(CEther, comptroller, itinterestRate, mantissa, name_, symbol, decimals, admin);
};