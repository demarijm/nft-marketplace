require("@nomiclabs/hardhat-waffle");

const pId = process.env.projectId


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: "https://polygon-mumbai.infura.io/v3/" + {pId},
    accounts: []
  },
  mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${pId}",
      accounts: []
    },
  solidity: "0.8.4",
};

