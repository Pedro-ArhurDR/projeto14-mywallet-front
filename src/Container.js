import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Tela1 from "./Login/Tela1";
import Tela2 from "./Login/Tela2"
import Tela3 from "./Menu/Tela3";
import Tela4 from "./Registrar/Tela4";
import Tela5 from "./Registrar/Tela5";
import MyContext from "./contexts/myContext";
import { useState } from "react";
export default function Container() {
    const [registros,setRegistros] = useState([
    ])
    const [registro,setRegistro] = useState([
    ])
    const [log,setLog]= useState({
        email:"",
        senha:"",
        Bearer:""
    })
    const [cad,setCad]=useState({
        nome:"",
        email:"",
        senha:"",
        senha2:""
    })
    const [nomeT,setNomeT]=useState('')
    const [id,setId] = useState('')

    return (
        <MyContext.Provider value={{log,setLog,cad,setCad,registros,setRegistros,registro,setRegistro,nomeT,setNomeT,id,setId }} >
        <Global>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Tela1 />} />
                    <Route path='/cadastro' element={<Tela2 />} />
                    <Route path='/menu' element={<Tela3 />} />
                    <Route path='/entrada' element={<Tela4 />} />
                    <Route path='/saida' element={<Tela5 />} />
                </Routes>
            </BrowserRouter>
        </Global>
        </MyContext.Provider> 
    )
}

const Global = styled.div`
height:100%;
width:100%;
`;

