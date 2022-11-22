import express from "express";
import cors from 'cors'
import { ConnectSqlServerTest } from './database.js'
import { routes } from "./routes.js";

const PORT = process.env.PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({
    extended : true,
}),
);

app.use(routes);

ConnectSqlServerTest().then((data) =>{
    if(data)
    {
        app.listen(PORT, ()=>{
            console.log('Server running');
        });
    }
});