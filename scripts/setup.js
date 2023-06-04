import fs from 'fs';
import { join } from 'path';

const createFolderStructure = (baseDir, structure) => {
  Object.entries(structure).forEach(([name, content]) => {
    const itemPath = join(baseDir, name);

    if (typeof content === 'object') {
      fs.mkdirSync(itemPath);
      createFolderStructure(itemPath, content);
    } else if (typeof content === 'string') {
      fs.writeFileSync(itemPath, content);
    }
  });
};

const baseDir = process.cwd();
const structure = {
  src: {
    'controllers': {},
    'models': {},
    'routes': {},
    'services': {},
  },
  config: {},
  public: {},
};

createFolderStructure(baseDir, structure);

const files = [
  {
    name: 'index.js',
    content: `import express from 'express';
    import { config } from 'dotenv';
      
    const app = express();
    config();
      
    // Middleware
    app.use(express.static('public'))
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
      
    // Connection
    app.listen(3000);`,
  },
  {
    name: 'userControllers.js',
    content: 'console.log("All the controllers related code will be included here");',
    directory: 'src/controllers',
  },
  {
    name: 'userModels.js',
    content: 'console.log("All the models related files will be included here");',
    directory: 'src/models',
  },
  {
    name: 'userRoutes.js',
    content: 'console.log("All the routes related files will be included here");',
    directory: 'src/routes',
  },
  {
    name: 'userServices.js',
    content: 'console.log("All the services related files will be included here");',
    directory: 'src/services',
  },
  {
    name: 'env-example',
    content: '',
  },
  {
    name: 'config.js',
    content: 'console.log("Configuration related code will be added here (DB configuration)");',
    directory: 'config',
  },
  {
    name: 'index.html',
    content: `<!DOCTYPE html>
    <html>
        <body>
            <h1>Hello Sofa</h1>
        </body>
    </html>`,
    directory: 'public',
  },
];


files.forEach((file) => {
  const filePath = join(baseDir, file.directory || '', file.name);
  fs.writeFileSync(filePath, file.content);
});