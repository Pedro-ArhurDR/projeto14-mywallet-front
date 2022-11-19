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
    const [registro,setRegistro] = useState([
        {
            data:'',
            descricao:'',
            valor:0,
            status:'',
        }
    ])
    const [log,setLog]= useState({
        email:"",
        senha:"",
    })
    const [cad,setCad]=useState({
        nome:"",
        email:"",
        senha:"",
        senha2:""
    })
    const [entradas,setEntradas] = useState(0)
    const [saidas,setSaidas] = useState(0)
    console.log('entradas', entradas)
    console.log('saidas', saidas)
    return (
        <MyContext.Provider value={{log,setLog,cad,setCad,registros,setRegistros,registro,setRegistro,entradas,setEntradas,saidas,setSaidas}} >
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

