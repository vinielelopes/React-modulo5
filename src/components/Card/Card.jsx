import React from 'react';
import "./Card.css";

export function Card (){
    return (
        <div className='itens'>
            <div className="item1">
        <img></img>
        <h4> Nome</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>

        </div>
        
    )
}