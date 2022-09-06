require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY_URL =
  "https://eth-rinkeby.alchemyapi.io/v2/pRoXHc29FCR8mTtTWWUwPS4kFk04P67d";

const RINKEBY_PRIVATE_KEY =
  "f04f5d6a844e8a4fd7666fd1e1ac6e201812eee88da8992fa4fa34620e0ebde2";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
