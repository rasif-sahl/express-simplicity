export const getPackageContent = () => {
    return JSON.stringify(
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
            "nodemon": "^2.0.22",
            "mysql": "^2.18.1",
          },
        },
        null,
        2
    );
};

export const getEnvDetails = () => {

  return `# Express js port
PORT=3000

#Database Details
DB_HOST=
DB_USERNAME=
DB_PASSWORD=""
DB_NAME=
SOCKET_PATH=`
}

export const getConfigDetails = () => {
  return `import { createConnection } from 'mysql';
import { config } from 'dotenv';

config()

const connection = createConnection({
  host : process.env.DB_HOST,
  database : process.env.DB_NAME,
  user : process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  socketPath: process.env.SOCKET_PATH,
});

connection.connect(function(error){
  if(error){
    throw error
  }
  else{
    console.log('Express Simplicity Application Has Been Successfully connected to the database')
  }
});

export default connection;`
}