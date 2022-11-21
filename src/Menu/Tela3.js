import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import vector from "../img/Vector.png"
import { useContext, useState, useEffect } from "react"
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import MyContext from "../contexts/myContext"
import axios from "axios"
import Saldo from "./Saldo"
export default function Tela3() {
    const { nomeT, log } = useContext(MyContext)
    const navigate = useNavigate()
    const [records, setRecords] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${log.Bearer}`
            }
        }
        const promise = axios.get(`http://localhost:5000/menu`, config)
        promise.then(res => console.log(res) & console.log(log.Bearer) & setRecords(res.data)
        )
        promise.catch(erro => {
            console.log(erro)
        })

    }, [])
    function exit() {
        const config = {
            headers: {
                Authorization: `Bearer ${log.Bearer}`
            }
        }
        const promise = axios.delete(`http://localhost:5000/menu`, config)
        promise.then(res => console.log(res)& navigate('/')
        )
        promise.catch(erro => {
            console.log(erro.message)
        })
    }
    console.log(log.Bearer)
    return (
        <Container>
            <Topo>
                Ola, {nomeT} <img onClick={exit} src={vector} />
            </Topo>
            <Registros>
                {records.length === 0 ? <p>Não há registros de entrada ou saída</p> :
                    records.map((e, i) => <div key={i}> <p>{e.data}</p> <h3>{e.descricao}</h3>
                        <Valor color={e.status === 'entrada' ? '#03AC00' : '#C70000'}>
                            R$ {e.valor}</Valor> </div>)
                }
                <Saldo records={records} />
            </Registros>
            <Botoes>
                <div onClick={() => navigate('/entrada')}> <AddCircleOutline color={'#00000'} height="25px " width="25px" /> Nova entrada</div>
                <div onClick={() => navigate('/saida')}> <RemoveCircleOutline color={'#00000'} height="25px " width="25px" /> Nova saída</div>
            </Botoes>
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

`
const Botoes = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    div{
        width:156px;
        height:114px;
        background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 20px;
  font-weight: 500;
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
  touch-action: manipulation;
    }
`
const Valor = styled.h4`
    color: ${props => props.color};
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
    position: relative;
    div{
        display:flex;
        justify-content:space-between;
    }
    h3{
        color:black;
        font-weight: 300;
    }

`


