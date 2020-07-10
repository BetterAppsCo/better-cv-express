const sass = require('node-sass');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const getDirName = require('path').dirname;
const fs = require('fs');

function compileSass(options = {}) {
  mkdirp(getDirName(options.dest), function(err) {
    if (err) {
      return console.log(chalk.red('Failed: ' + options.dest + ' could not be created.', err));
    }
    sass.render(
      {
        file: options.src,
        outputStyle: options.style
      },
      function(err, result) {
        if (err) {
          return console.log(chalk.red('Failed: ' + options.src + ' could not be transpiled.', err));
        }
        fs.writeFile(options.dest, result.css, function(err) {
          if (err) {
            return console.log(chalk.red('Failed: ' + options.src + ' not created.', err));
          }
          console.log(chalk.green('Success: ' + options.dest + ' generated.'));
        });
      }
    );
  });
}
let style = process.argv[2] === 'dev' ? 'expanded' : 'compressed';
compileSass({
  src: './client/app/styles/main.scss',
  dest: './client/dist/css/bundle.css',
  style
});
