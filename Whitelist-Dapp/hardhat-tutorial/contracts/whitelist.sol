//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract WhiteList {
    uint8 public maxWhitelistedAddresses;

    //after adding the address to the whitelist, we set the value to true. Bu default its value is false
    mapping(address => bool) whitelistedAddresses;

    uint8 public whitListAddressCounter;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(!whitelistedAddresses[msg.sender], "Already whitelisted");
        require(
            whitListAddressCounter < maxWhitelistedAddresses,
            "max limit reached"
        );

        whitelistedAddresses[msg.sender] = true;
        whitListAddressCounter++;
    }
}
