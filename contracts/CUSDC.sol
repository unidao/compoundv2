pragma solidity ^0.5.8;

import "./CErc20.sol";

contract CUSDC is CErc20 {
    constructor(address underlying_,
        ComptrollerInterface comptroller_,
        InterestRateModel interestRateModel_,
        uint initialExchangeRateMantissa_,
        string memory name_,
        string memory symbol_,
        uint decimals_) public
    CErc20(underlying_, comptroller_, interestRateModel_, initialExchangeRateMantissa_, name_, symbol_, decimals_) {

    }
}