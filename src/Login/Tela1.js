import styled from "styled-components"
import logo from '../img/MyWallet.png'
import { Link, useNavigate } from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
import axios from "axios"
export default function Tela1() {
    const navigate = useNavigate()
    const { log, setLog, nomeT, setNomeT, id, setId } = useContext(MyContext)

    function login(event) {
        event.preventDefault()
        const promise = axios.post("http://localhost:5000/", log)
        promise.then((res) => res.data.token & console.log(res.data) & setId(res.data.emailExist._id) &
            console.log('LOGADO') & setLog(e2 => ({ ...e2, Bearer: res.data.token })) & setNomeT(res.data.emailExist.nome) & navigate('/menu'))
        promise.catch((err) => alert('Senha e/ou email incorreto(s)'))
    }
    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <input placeholder="email" onChange={e => setLog(e2 => ({ ...e2, email: e.target.value }))} value={log.email} type="email" required />
                <input placeholder="senha" onChange={e => setLog(e2 => ({ ...e2, senha: e.target.value }))} value={log.senha} type="password" required />
                <button type="submit">Entrar</button>
            </form>
            <Link to='/cadastro'><p>Primeira vez? Cadastre-se!</p></Link>
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

button {
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

button:hover,button:focus {
  background-color: #F082AC;
}
    form{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
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
    h1{
        margin-bottom:10px;
    }
`

