const { merge } = require('sol-merger');


async function run_script() {
  const mergedCode = await merge("./contracts/TinfoilNFT.sol");
  console.log(mergedCode);
}

module.exports = async function (callback) {
  try {
    await run_script();
  }
  catch (error) {
    console.log(error)
  }
  callback()
}

