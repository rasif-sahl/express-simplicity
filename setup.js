#!/usr/bin/env node

const generateFileStructure = require('./src/fileStructure.js');
const installDependencies = require('./src/dependencies.js');
const { getIndexContent } = require('./src/files/index.js');

const generateModule = () => {
  const baseDir = process.cwd();
  const structure = {
    'index.js': getIndexContent(),
    'src': {
      'controllers':{
        'userControllers.js': 'console.log("All the controllers related code will be included here");',
      },
      'models':{
        'userModels.js': 'console.log("All the models related files will be included here");',
      },
      'routes':{
        'userRoutes.js': 'console.log("All the routes related files will be included here");',
      },
      'userServices':{
        'helper.js': 'console.log("All the services related files will be included here");',
      },
    },
    'env-example': "",
    'public': {
      'index.html' : `<!DOCTYPE html>
        <html>
            <body>
                <h1>Hello Express</h1>
            </body>
        </html>`,
    },
    'config' : {
      'config.js' : 'console.log("Configuration related code will be added here (DB configuration)");',
    },
    'package.json': JSON.stringify(
      {
        name: 'express-simplicity',
        version: '1.0.12',
        "type": "module",
        "main": "index.js",
        "scripts": {
          "express": "nodemon index.js",
        },
        dependencies: {
          "dotenv": "^16.1.3",
          "express": "^4.18.2",
          "nodemon": "^2.0.22"
        },
      },
      null,
      2
    ),
  };

  generateFileStructure(baseDir, structure);
  installDependencies();
};

generateModule();
