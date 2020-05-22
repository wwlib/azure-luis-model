const util = require('util');
const exec = util.promisify(require('child_process').exec);

const config = require('../data/config.json');
const appId = config.Microsoft.nluLUIS_appId;
const subscriptionKey = config.Microsoft.nluLUIS_subscriptionKey;
const endpoint = config.Microsoft.nluLUIS_endpoint;

async function doIt() {
  try {
    const { stdout, stderr } = await exec(`npx bf luis:version:import --subscriptionKey ${subscriptionKey} --appId ${appId} --endpoint ${endpoint} --in ./luis-json/converted.json`);
    const result = stdout.trim();
    console.log(result);
    console.log(stderr);
  } catch (error) {
    console.log('error', error);
  }
}

doIt();