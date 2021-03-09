const {catchRevert} = require("./exceptions")
const TinfoilNFT = artifacts.require("TinfoilNFT");

contract('collateral tests', async (accounts)=>{
  let token;
  let owner = accounts[0];
  let user1 = accounts[1];
  let user2 = accounts[2];

  before('init', async function () {
  })

  beforeEach('init setup', async function () {
    token = await TinfoilNFT.new("testToken", "tt");
  })

  it('test contract creation', async ()=>{
    let name = await token.name();
    let symbol = await token.symbol();
    assert.equal(name, 'testToken');
    assert.equal(symbol, 'tt');
  })

  it('test setters', async ()=>{
    let tokenURI = "a";
    let tokenType = "1";
    await token.mintNewNFT(user1, tokenType, tokenURI);
    await token.setTokenURI('0', "cc");
    assert.equal((await token.tokenURI(0)).toString(), "cc")
    await token.setBaseURI("dd");
    assert.equal((await token.baseURI()).toString(), "dd");
  })

  it('test mint token contract', async ()=>{
    let tokenURI = "a";
    let tokenType = "1";
    await token.mintNewNFT(user1, tokenType, tokenURI);
    let currentId = await token.idTracker();
    assert.equal(currentId.toString(), "1")
    assert.equal((await token.tokenType(0)).toString(), "1")

    tokenType = "3"
    await token.mintNewNFT(user1, tokenType, tokenURI);
    currentId = await token.idTracker();
    assert.equal(currentId.toString(), "2")
    assert.equal((await token.tokenType(1)).toString(), "3")
  })

  it('test burn token', async ()=>{
    let tokenURI = "a";
    let tokenType = "1";
    await token.mintNewNFT(user1, tokenType, tokenURI);
    let currentId = await token.idTracker();
    assert.equal(currentId.toString(), "1")
    assert.equal((await token.tokenType(0)).toString(), "1")

    await token.burn(0);
    assert.equal((await token.balanceOf(owner)).toString(), 0);

  })

  it('test pause contract', async ()=>{
    await token.pause()
    let tokenURI = "a"
    let tokenType = "1"
    await catchRevert(token.mintNewNFT(user1, tokenType, tokenURI));
    await token.unpause()
    await token.mintNewNFT(user1, tokenType, tokenURI);
  })

  it('test contract ownership', async ()=>{
    let tokenURI = "a";
    let tokenType = "1";
    await catchRevert(token.mintNewNFT(user1, tokenType, tokenURI, {from: user1}));
    await catchRevert(token.mintNewNFTWithData(user1, tokenType, tokenURI, "0x123", {from: user1}));
    await catchRevert(token.setBaseURI("dd", {from: user1}));
  })
})
