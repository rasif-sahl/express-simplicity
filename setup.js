#!/usr/bin/env node

import generateFileStructure from './src/fileStructure.js';
import installDependencies from './src/dependencies.js';
import { getIndexContent } from './src/files/index.js';
import { getPackageContent } from './src/files/package.js';
import { getLandingPage } from './src/files/landing.js';
import { getSrcFiles } from './src/files/srcFiles.js';

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
