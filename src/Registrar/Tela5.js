import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../contexts/myContext"
import dayjs from "dayjs"
export default function Tela5() {
    const navigate = useNavigate()
    const {registros,setRegistros,registro,setRegistro,saidas,setSaidas} = useContext(MyContext)
    function saida(event) {
        event.preventDefault()
        setRegistros([...registros,registro])
        setSaidas(saidas+ parseInt(registro.valor))
        setRegistro([])
        navigate('/menu')
    }
    return (
        <Container>
            <h1>Nova entrada</h1>
            <form onSubmit={saida}>
            <input placeholder="Valor" type="number" value={registro.valor} onChange={e=>setRegistro(e2 => ({ ...e2,
                 valor: e.target.value,data:dayjs().format('DD/MM'),status:'saida'
                 }))} required/>
            <input placeholder="Descrição" type="text" value={registro.descricao} 
            onChange={e=>setRegistro(e2 => ({ ...e2, descricao: e.target.value,data:dayjs().format('DD/MM'),status:'saida' }))} required/>
            <button type='submit'>Salvar Saída</button>
            </form>
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
    
