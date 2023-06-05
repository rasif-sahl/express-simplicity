#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const generateFileStructure = (baseDir, structure) => {
  Object.entries(structure).forEach(([name, content]) => {
    const itemPath = path.join(baseDir, name);

    if (typeof content === 'object') {
      fs.mkdirSync(itemPath);
      generateFileStructure(itemPath, content);
    } else if (typeof content === 'string') {
      fs.writeFileSync(itemPath, content);
    }
  });
};

const installDependencies = () => {
  exec('npm install', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependencies: ${error.message}`);
      return;
    }
    console.log('Dependencies installed successfully!');
  });
};

const generateModule = () => {
  const baseDir = process.cwd();
  const structure = {
    'index.js':`import express from 'express';
    import { config } from 'dotenv';
      
    const app = express();
    config();
      
    // Middleware
    app.use(express.static('public'))
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
      
    // Connection
    app.listen(3000);`,
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
          "mkdirp": "^3.0.1",
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