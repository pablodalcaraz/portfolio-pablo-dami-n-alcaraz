import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contactRoute from './routes/contactRoute.js';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config()

const _dirname = path.dirname(fileURLToPath(import.meta.url));

const app= express();
const port= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', contactRoute);
app.use(express.static(_dirname + "/public"));
app.use(express.static(_dirname + "/assets"));


app.listen(port, ()=> {
    console.log(`Servidor corriendo en puerto ${port}`);
});


