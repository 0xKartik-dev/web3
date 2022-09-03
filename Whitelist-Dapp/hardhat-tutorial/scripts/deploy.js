const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getCOntractFactory("Whitelist");

  const deployedContractAddress = await whitelistContract.deploy(69);

  deployedContractAddress.deployed();

  console.log("Contract Address: ", deployedContractAddress.address);

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
