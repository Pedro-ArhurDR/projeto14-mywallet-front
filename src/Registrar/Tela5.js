import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
export default function Tela5() {
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Nova saída</h1>
            <input placeholder="Valor" type="number"/>
            <input placeholder="Descrição" type="text"/>
            <button onClick={()=>navigate("/menu")}>Salvar Saída</button>
        </Container>
    )
}

const Container = styled.div`
    background-color:#8C11BE;
    height:100vh;
    width:100%;
    color:#FFFFFF;
    display:flex;
    align-items:center;
    flex-direction:column;
    h1{
        margin: 30px 0;
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
    
