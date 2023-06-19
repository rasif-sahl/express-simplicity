export const getIndexContent = () => {
    // Content of index.js file
    return `
import express from 'express';
import { config } from 'dotenv';
import api from './src/routes/api.js';

const app = express();
config();
    
// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.use('/api/', api);

// Connection
app.listen(process.env.PORT || 3000);
    `;
};