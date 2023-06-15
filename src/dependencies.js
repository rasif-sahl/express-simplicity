// dependencies.js
const { exec } = require('child_process');

const installDependencies = () => {
  exec('npm install', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependencies: ${error.message}`);
      return;
    }
    console.log('Dependencies installed successfully!');
  });
};

module.exports = installDependencies;
