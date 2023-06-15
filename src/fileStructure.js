// fileStructure.js
const fs = require('fs');
const path = require('path');

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

module.exports = generateFileStructure;
