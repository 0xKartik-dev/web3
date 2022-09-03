// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface simpleaBalanceERC20 {
    function balanceof(address account) external view returns (uint256);
}

contract sampleContract {
    simpleaBalanceERC20 simpleBalance;

    function checkBalance() public view {
        uint256 balance = simpleBalance.balanceof(msg.sender);
        require(balance > 0, "No sufficient balance");
    }
}
