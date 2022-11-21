
import styled from "styled-components"
export default function Saldo({records}) {
    let contador = 0
    records.map((e)=>e.status==='saida'? contador = contador - parseFloat(e.valor) : contador = contador + parseFloat(e.valor))
    console.log('CONTADOR  ',contador)
    let final = contador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(
        <SaldoF><p>SALDO</p>{contador>0?<h2>{final}</h2>:<h4>{final}</h4> }</SaldoF>
    )
        
    
}

const SaldoF = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
width:90%;
bottom:0;
left:5%;
P{  font-weight:bold;
    font-size: 17px;
    color: black;
}

h4{
    color:#C70000;
    font-size: 17px;
}
h2{
    color:#03AC00;
    font-weight:300;
    font-size: 17px;
}`