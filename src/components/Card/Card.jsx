import React from 'react';
import "./Card.css";

export function Card (props){
    return (
        <div className='itens'>
            <div className="item1">
        <img src ={props.image}></img>
        <h4> {props.name}</h4>
        <p> {props.description}</p>
        <h5>De R${props.oldPrice},99</h5>
        <h4>Por: R${props.price},99</h4>
        <h6>ou {props.installments.count}x de R${' '}
            {props.installments.value}0</h6>
        <button className='comprar'>Comprar</button>
        </div>

        </div>
        
    )
}