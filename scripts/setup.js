import { mkdirSync } from 'fs';
import { join } from 'path';

const createFolderStructure = (baseDir, structure) => {
  Object.entries(structure).forEach(([folderName, subStructure]) => {
    const folderPath = join(baseDir, folderName);
    mkdirSync(folderPath);

    if (subStructure) {
      createFolderStructure(folderPath, subStructure);
    }
  });
};

const baseDir = process.cwd();
const structure = {
  src: {},
  config: {},
  tests: {}
};

createFolderStructure(baseDir, structure);
