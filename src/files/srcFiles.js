export const getSrcFiles = () => {
    return {
        'controllers':{
          'userControllers.js': `import { 
  userList,
} from '../models/userModels.js';

/**
 * 
 * This will be an example function when you are getting data from the DB
 * 
 * export function getUserList(req, res) {
        userList((error, results) => {
            if (error) {
            res.status(500).send('Error retrieving data from the database');
            } else {
            res.json(results);
            }
        });
    } 
 * 
*/

export function getUserList(req, res) {
    res.send(userList())
}

export function postUserList(req, res) {
    res.send(req.params.id);
}`,
        },
        'models':{
          'userModels.js': `/**
* Database Connection
* 
* You can use this variable any where in your application.
* This wil mostly be used in the model files when you are trying to fetch data from the DB.
* Ex :-
* export function userList(callback) {
    const query = 'SELECT * FROM users';

    database.query(query, (error, results) => {
        if (error) {
            console.error('Error executing database query:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
  }
*
* You can use a similar function to get data from the database.
*
* Un-Comment the connection attribute and the import statement after adding the DB details to the .env
*/
// import connection from '../../config/config.js';

export function userList() {

  // connection

  const userList = [
      {name: "Jhony", mobile: "12345678"},
      {name: "Peter", mobile: "12345678"}
  ]

  return userList;
}`,
        },
        'routes':{
          'api.js':`import express from 'express';
import userRoutes from './users.js';
// import other route files as needed

const api = express.Router();

// Configure routes
api.use('/users', userRoutes);
// Add other route configurations

export default api;`,

          'users.js': `import { Router } from 'express';
import { 
    getUserList,
    postUserList,
} from '../controllers/userControllers.js';

// Declaring the router
const router = Router()

// Routes
router.get('/', getUserList);
router.get('/:id', postUserList);

export default router`,
        },
        'services':{
          'helper.js': 'console.log("All the services related files will be included here");',
        },
        'middleware':{
          'auth.js': 'console.log("All the authentication related files will be included here");',
        },
    }
};