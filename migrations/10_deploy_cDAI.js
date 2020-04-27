const cDAI = artifacts.require("CErc20Delegator");
const Comptroller = artifacts.require("Comptroller");
const WhitePaperInterestRateModel = artifacts.require("WhitePaperInterestRateModel");
const CDaiDelegate = artifacts.require("CDaiDelegate");

const underlying = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";
const mantissa= 200000000000000000000000000;
const name_= "Compound Dai";
const symbol = "cDAI";
const decimals = 8;
const admin = "0x2fd852c9a9aBb66788F96955E9928aEF3D71aE98";
const becomeImplementationData = "00000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000000c436f6d706f756e642044616900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004634441490000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000";

module.exports = function(deployer) {
  deployer.deploy(cDAI, underlying, Comptroller, WhitePaperInterestRateModel, mantissa, name_, symbol, decimals, admin, CDaiDelegate, becomeImplementationData);
};
