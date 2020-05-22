const util = require('util');
const exec = util.promisify(require('child_process').exec);
// console.log(process.argv);
const argv = require('minimist')(process.argv.slice(2));
const version = argv.version;

if (version) {
  console.log(`version: ${version}`);
} else {
  console.log(`version must me specified!\n\tusage: npm run train -- --version  <VERSION>`);
}
/*
const config = require('../data/config.json');
const appId = config.Microsoft.nluLUIS_appId;
const subscriptionKey = config.Microsoft.nluLUIS_subscriptionKey;

async function doIt() {
  try {
    const { stdout, stderr } = await exec(`npx bf luis:train:run --appId ${appId} --versionId {VERSION_ID} --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY}`);
    const result = stdout.trim();
    console.log(result);
    console.log(stderr);
  } catch (error) {
    console.log('error', error);
  }
}

doIt();
*/