
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

    const buttonAlt = (idUser, nome, email, senha) =>{

        Axios.put(`http://localhost:4000/usuario/alterar/${idUser}`,{
            emailUser: email,
            nomeUser: nome.nome,
            senhaUser: senha
        }).then(window.location.reload(false)
)

        
    }

    const buttonDel = (idUser, nome, email, senha) =>{

        Axios.delete(`http://localhost:4000/usuario/delete/${idUser}`).then(window.location.reload(false))
       
    }

    useEffect(()=>{
        Axios.get('http://localhost:4000/usuario').then((response) => {
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
                        
                        <NomeUser key={value.idUser}> {value.nomeUser}
                            <Input onChange={handleChangeValues} Id="nome" Name="nome" type="text" estilo="1" placeholder="Alterar Nome"/>
                            <Button onClick={()=>buttonAlt(value.idUser, alter, value.emailUser, value.senhaUser)} conteudo="Alterar" type="button"/>
                            <Button onClick={()=>buttonDel(value.idUser, null, null, null)} conteudo="Deletar" type="button" estilo="3"/>
                        </NomeUser>
                    )
            })}

            </TodosUsers>
            

        </UsersBox>
        </UsersContainer>
    )

}