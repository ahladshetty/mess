import express from 'express'
import sequelize  from './DB/db.js';
import "dotenv/config";
import cors from 'cors'

import userRouter from './routes/userRoutes.js'
import menuRouter from './routes/menuRoutes.js'

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use(cors());

app.use(userRouter)
app.use(menuRouter)

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log(`Server is running on port ${port}`);
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

  (async () => {
    try {
        await sequelize.sync({});
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
   
    app.listen(port, () => {
        connectToDatabase();
    });
})();
