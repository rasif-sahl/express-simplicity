#!/usr/bin/env node

const generateFileStructure = require('./src/fileStructure.js');
const installDependencies = require('./src/dependencies.js');
const { getIndexContent } = require('./src/files/index.js');
const { getPackageContent } = require('./src/files/package.js');
const { getLandingPage } = require('./src/files/landing.js');
const { getSrcFiles } = require('./src/files/srcFiles.js');

const generateModule = () => {
  const baseDir = process.cwd();
  const structure = {
    'index.js': getIndexContent(),
    'src': getSrcFiles(),
    'env-example': "",
    'public': {
      'index.html' : getLandingPage(),
    },
    'config' : {
      'config.js' : 'console.log("Configuration related code will be added here (DB configuration)");',
    },
    'package.json': getPackageContent(),
  };

  generateFileStructure(baseDir, structure);
  installDependencies();
};

generateModule();
