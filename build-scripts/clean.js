const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(require('child_process').exec);
const dir = './client/dist';
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

let command = 'rimraf client/dist/*';
async function execute(cmd) {
  try {
  	await exec(cmd);
    console.log(chalk.green('cleaned up dist folder'));
  } catch (e) {
  	console.log(e);
    console.log(chalk.red('cleaning dist folder failed'));
  }
}
execute(command);


