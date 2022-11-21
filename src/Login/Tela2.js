import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
import axios from "axios"
export default function Tela2() {
    const{cad,setCad} = useContext(MyContext)
    const navigate = useNavigate()
    function cadastrar(event){
        event.preventDefault()
        if(cad.senha!==cad.senha2){
            alert('As senha não coincidem')
        }
        else{
            const promise = axios.post("https://projeto14-mywallet-back-v3.onrender.com/cadastro",cad)
        promise.then((res)=>navigate('/') & console.log(res.data)& console.log('cadastrado'))


        promise.catch((err) =>alert(err.response.data))
        }
    }
    return (
        <Container>
            <img src={logo}/>
            <form onSubmit={cadastrar}>
            <input placeholder="Nome" onChange={e=>setCad(e2 => ({ ...e2, nome: e.target.value }))} value={cad.nome} type="text" required />
            <input placeholder="email" onChange={e=>setCad(e2 => ({ ...e2, email: e.target.value }))} value={cad.email} type="email" required/>
            <input placeholder="senha" onChange={e=>setCad(e2 => ({ ...e2, senha: e.target.value }))} value={cad.senha} type="password" required/>
            <input placeholder="Repita sua senha" onChange={e=>setCad(e2 => ({ ...e2, senha2: e.target.value }))} value={cad.senha2} type="password" required/>
            <button type="submit">Entrar</button>
            </form>
           <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
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
    
