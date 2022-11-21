import styled from "styled-components"
import {useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../contexts/myContext"
import dayjs from "dayjs"
import axios from "axios"
import { useState } from "react"
export default function Tela5() {
    const navigate = useNavigate()
    const { registros, setRegistros, registro, setRegistro, saidas, setSaidas,id } = useContext(MyContext)
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    function saida(event) {
        event.preventDefault()
        console.log(registro)
        const promise = axios.post("http://localhost:5000/saida",registro)
        promise.then((res)=>setValor('')&
        setDescricao('')&
        setRegistros([...registros, registro])&
        console.log(registro)&
        setRegistro([])&
        navigate('/menu'))
        promise.catch((err) => alert('Registro inválido'))
    }
    return (
        <Container>
            <h1>Nova Saída</h1>
            <form onSubmit={saida}>
                <input placeholder="Valor" type="number" 
                value={valor} onChange={e => setRegistro(e2 => ({...e2,userId:id,valor: e.target.value })) & setValor(e.target.value)} required />
                <input placeholder="Descrição" type="text" value={descricao}
                    onChange={e => setRegistro(e2 => ({ ...e2,userId:id, descricao: e.target.value }))
                    &setDescricao(e.target.value) } required />
                <button type='submit'>Salvar Saída</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
    height:100vh;
    width:100%;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
    h1{
        color:#C70000;
        margin: 30px 0;
    }
    form{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }
    button{
        background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
    }
    input{
        padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  color: #2C3E50;
  font-size: 13px;
    }
    img{
        margin-bottom:10px;
    }
`

