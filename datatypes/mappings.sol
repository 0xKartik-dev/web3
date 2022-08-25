// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract mappings_ex1 {
    mapping(address => uint256) public balance;

    function getBalance(address _addr) public view returns (uint256) {
        return balance[_addr];
    }

    function setBalance(uint256 _bal) public {
        balance[msg.sender] = _bal;
    }
}
