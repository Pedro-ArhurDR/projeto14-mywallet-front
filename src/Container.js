import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Tela1 from "./Login/Tela1";
import Tela2 from "./Login/Tela2"
import Tela3 from "./Menu/Tela3";
import Tela4 from "./Registrar/Tela4";
import Tela5 from "./Registrar/Tela5";
export default function Container() {
    return (
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
    )
}

const Global = styled.div`
height:100%;
width:100%;
`;

