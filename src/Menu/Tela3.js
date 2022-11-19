import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import vector from "../img/Vector.png"
import { useState } from "react"
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
export default function Tela3() {
        const [registros,setRegistros] = useState([
            {
                data:'3/11',
                descricao:'bala',
                valor:10,
                status:'saida',
            },
            {
                data:'3/11',
                descricao:'bala',
                valor:10,
                status:'entrada',
            }
        ])


    const navigate = useNavigate()
    return (
        <Container>
            <Topo>
                Ola, Fulano <img onClick={()=>navigate('/')} src={vector} />
            </Topo>
            <Registros>
                {registros.length===0?<p>Não há registros de entrada ou saída</p>:
                registros.map((e,i)=><div key={i}> <p>{e.data}</p> <h3>{e.descricao}</h3> <Valor color={e.status==='entrada'?'#03AC00':'#C70000'}>{e.valor}</Valor> </div>)
                }
            </Registros>
            <Botoes>
                <div onClick={()=>navigate('/entrada')}> <AddCircleOutline color={'#00000'} height="25px "width="25px" /> Nova entrada</div> 
                <div onClick={()=>navigate('/saida')}> <RemoveCircleOutline color={'#00000'} height="25px "width="25px" /> Nova saída</div>
            </Botoes>
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

`
const Botoes = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    div{
        width:156px;
        height:114px;
        background-color:#A328D6;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        border-radius: 5px;
    }
`
const Valor = styled.h4`
    color: ${props=>props.color};
    font-size: 16px;
`

const Topo = styled.div`
    height:70px;
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 26px;
`
const Registros = styled.div`
    width:90%;
    height:326px;
    background-color:white;
    color:#868686;
    margin:40px 0 ;
    border-radius: 5px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    div{
        display:flex;
        justify-content:space-between;
    }
    h3{
        color:black;
    }
`


