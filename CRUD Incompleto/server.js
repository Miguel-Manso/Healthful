import express from "express";
import cors from "cors";
import { routes } from "./routes.js";
import { teste_conexao } from "./test_bd.js";
const port = process.env.PORT = 4000 //Definindo Porta
const app = express()

app.use(express.json()) //Linha para aceitar JSON
app.use(cors())
app.use(express.urlencoded({
    extended : true
}))

app.use(routes);

    teste_conexao().then((res) => {
        if (res == true)
        {
            app.listen(port, () => {
                console.log(`Servidor Funcionando na porta ${ port }`)
            })
        }
    })