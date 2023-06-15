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
            "nodemon": "^2.0.22"
          },
        },
        null,
        2
    );
};

export const getEnvDetails = () => {

  return `# Express js port
PORT=3000`
}