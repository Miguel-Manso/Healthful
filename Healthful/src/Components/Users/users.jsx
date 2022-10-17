
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/button";
import Input from "../Input/input";
import {  NomeUser, TodosUsers, TituloUsers, UsersBox, UsersContainer } from "./style";


export function Users () {

    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState()
    const [alter, setAlter] = useState()

    const handleChangeValues  = (value) =>{
        setAlter(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const buttonAlt = (id, nome, email, senha) =>{

        Axios.put(`http://localhost:3001/usuario/update/${id}`,{
            email: email,
            nome: nome.nome,
            senha: senha
        }).then(window.location.reload(false)
)

        
    }

    const buttonDel = (id, nome, email, senha) =>{

        Axios.delete(`http://localhost:3001/usuario/delete/${id}`).then(window.location.reload(false))
       
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/usuario/get').then((response) => {
            setUsuarios(response.data)
        })
    },[])
    return (
        
        <UsersContainer>
        <UsersBox>

            <TituloUsers>Usuários:</TituloUsers>

            <TodosUsers>
            
            {typeof usuarios !== "undefined" && usuarios.map((value)=>{
                    
                  
                    return(
                        
                        <NomeUser key={value.id}> {value.nome}
                            <Input onChange={handleChangeValues} Id="nome" Name="nome" type="text" estilo="1" placeholder="Alterar Nome"/>
                            <Button onClick={()=>buttonAlt(value.id, alter, value.email, value.senha)} conteudo="Alterar" type="button"/>
                            <Button onClick={()=>buttonDel(value.id, null, null, null)} conteudo="Deletar" type="button" estilo="3"/>
                        </NomeUser>
                    )
            })}

            </TodosUsers>
            

        </UsersBox>
        </UsersContainer>
    )

}