// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ReceiveEther {
    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

contract sendEther {
    function sendEt(address payable _to) public payable {
        uint256 amount = msg.value;

        (bool success, bytes memory data) = _to.call{value: amount}("");
        require(success == true, "Failed to send Ether");
    }
}
