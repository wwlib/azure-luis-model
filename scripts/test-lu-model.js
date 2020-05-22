const util = require('util');
const exec = util.promisify(require('child_process').exec);

const config = require('../data/config.json');
const appId = config.Microsoft.nluLUIS_appId;
const subscriptionKey = config.Microsoft.nluLUIS_subscriptionKey;

async function doIt() {
  try {
    const { stdout, stderr } = await exec(`npx bf luis:test --in ./test/test.lu --appId ${appId} --subscriptionKey ${subscriptionKey} --out ./test/results --staging --force`);
    const result = stdout.trim();
    console.log(result);
    console.log(stderr);
  } catch (error) {
    console.log('error', error);
  }
}

doIt();