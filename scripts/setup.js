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
    'example.js' : 'console.log("Hello from example.js");',
  },
  config: {},
  public: {},
  'myfile.txt': 'Content for myfile.txt',
};

createFolderStructure(baseDir, structure);

// const filePath = join(baseDir, 'myfile.txt');
// const fileContent = 'Content for myfile.txt';

// writeFileSync(filePath, fileContent);

// console.log('File created:', filePath);


const files = [
  {
    name: 'myfile.txt',
    content: 'Content for myfile.txt',
  },
  {
    name: 'example.js',
    content: 'console.log("Hello from example.js");',
    directory: 'src', // Specify the subdirectory path
  },
];


files.forEach((file) => {
  const filePath = join(baseDir, file.directory || '', file.name);
  fs.writeFileSync(filePath, file.content);
  console.log('File created:', filePath);
});


// files.forEach((file) => {
//   const filePath = path.join(baseDir, file.directory, file.name);
//   fs.writeFileSync(filePath, file.content);
//   console.log('File created:', filePath);
// });
