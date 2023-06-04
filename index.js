import express from 'express';
import { config } from 'dotenv';

const app = express();
config();

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Connection
app.listen(3000);