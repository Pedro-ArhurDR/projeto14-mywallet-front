import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
export default function Tela1() {
    const navigate = useNavigate()
    const {log,setLog} = useContext(MyContext)
    console.log(log)

    function login(event){
        event.preventDefault()
        navigate('/menu')
    }
    return (
        <Container>
            <img src={logo}/>
            <form onSubmit={login}>
            <input placeholder="email" onChange={e=>setLog(e2 => ({ ...e2, email: e.target.value }))} value={log.email} type="email" required />
            <input placeholder="senha" onChange={e=>setLog(e2 => ({ ...e2, senha: e.target.value }))} value={log.senha} type="password" required/>
            <button type="submit">Entrar</button>
            </form>
           <Link to='/cadastro'><p>Primeira vez? Cadastre-se!</p></Link>
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
    button{
        width:328px;
        height:46px;
        border-radius: 5px;
        background-color:#A328D6;
        color:#FFFFFF;
        margin:10px 0;
    }
    form{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
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
    
