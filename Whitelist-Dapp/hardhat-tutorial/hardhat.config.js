require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "env" });

const ALCHEMY_API_KEY_URL =
  "https://eth-rinkeby.alchemyapi.io/v2/replaced";

const RINKEBY_PRIVATE_KEY =
  "replaced";

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
