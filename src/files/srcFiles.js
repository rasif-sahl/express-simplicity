export const getSrcFiles = () => {
    return {
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
    }
};