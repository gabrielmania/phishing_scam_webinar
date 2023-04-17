const hre = require("hardhat");

async function main() {
    const PhishingExample = await hre.ethers.getContractFactory(
        "PhishingExample"
    );
    const phishingExample = await PhishingExample.deploy();

    await phishingExample.deployed();

    console.log(`Smart contract deployed to ${phishingExample.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// Smart contract address: 0x072a34a3384874727F1d7e31f15Df72994D71B58