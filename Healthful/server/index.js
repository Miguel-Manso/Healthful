import express from "express";
import cors from "cors";
import { testConnect } from "./testConnect.js";
import { routes } from "./routes.js";

const port = process.env.PORT = 4000
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}),
)

app.use(routes)

testConnect().then((res) => {
    if(res == true){
        app.listen(port, ()=>{
            console.log('Server Running on Port ' + port)
        })
    }
})

