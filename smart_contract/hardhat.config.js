require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks:{
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/uGOp4XI8lfirblZYZKico3Yi9ocMNa3C',
      accounts:['c0d2bb5265034916abe8379285037b512543d5abcfdba0f2574fa15c235ba7a7']
    }
  }
};
