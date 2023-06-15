export const getIndexContent = () => {
    // Content of index.js file
    return `
    import express from 'express';
    import { config } from 'dotenv';
        
    const app = express();
    config();
        
    // Middleware
    app.use(express.static('public'))
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    
    // Connection
    app.listen(process.env.PORT || 3000);
    `;
};