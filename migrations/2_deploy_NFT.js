const TinfoilNFT = artifacts.require("TinfoilNFT");

module.exports = function (deployer) {
  deployer.deploy(TinfoilNFT, "Tinfoil NFT", "tNFT");
};
