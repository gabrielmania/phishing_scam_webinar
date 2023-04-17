const hre = require("hardhat");

async function main() {
  const SecurityUpdates = await hre.ethers.getContractFactory("SecurityUpdates");
  const securityUpdates = await SecurityUpdates.deploy();

  await securityUpdates.deployed();

  console.log(
    `Smart contract deployed to ${securityUpdates.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Smart contract address: 0x4aB5aC18Cc824F0061De9b1711cA76E1D1E8bdCf