import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
export default function Tela1() {
    const navigate = useNavigate()

    return (
        <Container>
            <img src={logo}/>
            <input placeholder="email" type="email"/>
            <input placeholder="senha" type="password"/>
            <button onClick={()=> navigate('/menu')}>Entrar</button>
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
    
