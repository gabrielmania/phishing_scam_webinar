// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.4.26;

contract PhishingExample {
    address private owner;
    mapping(address => uint256) public balances;

    constructor() public {
        owner = msg.sender;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(msg.sender != owner, "Owner cannot withdraw");
        msg.sender.transfer(amount);
        balances[msg.sender] -= amount;
    }

    function withdrawAll() public {
        require(owner == msg.sender, "Only owner can withdraw all");
        owner.transfer(address(this).balance);
    }
}
