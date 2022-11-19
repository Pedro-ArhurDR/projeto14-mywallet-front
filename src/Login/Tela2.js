import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
export default function Tela2() {
    const{cad,setCad} = useContext(MyContext)
    console.log(cad)
    const navigate = useNavigate()
    function cadastrar(event){
        event.preventDefault()
        if(cad.senha!==cad.senha2){
            alert('As senha não coincidem')
        }
        else{
            navigate('/')
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
    background-color:#8C11BE;
    height:100vh;
    width:100%;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    form{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }
    button{
        width:328px;
        height:46px;
        border-radius: 5px;
        background-color:#A328D6;
        color:#FFFFFF;
        margin:10px 0;
    }
    input{
        margin:5px 0;
        width:326px;
        height:58px;
        font-size: 20px;
    }
    img{
        margin-bottom:10px;
    }
`
    
