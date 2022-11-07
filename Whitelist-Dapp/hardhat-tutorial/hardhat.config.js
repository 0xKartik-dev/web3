require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "env" });

const ALCHEMY_API_KEY_URL =
  "https://eth-goerli.g.alchemy.com/v2/yJ48Bc_dyrkbd_pHlhOm9wLVsPVYvRom";

const GOERLI_KEY =
  "f04f5d6a844e8a4fd7666fd1e1ac6e201812eee88da8992fa4fa34620e0ebde2";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_KEY],
    },
  },
};
