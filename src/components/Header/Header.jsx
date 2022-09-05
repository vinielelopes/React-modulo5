import React from "react";
import "./header.css"


export function Header (){
    return(
    <div className = 'header'>
        <header>
            <h3> uma seleção de produtos</h3>
            <h1>
                especial para você
            </h1>
            <p> 
            Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
            </p>
            <div className='botoes'>
                <button className="botaoHeader"> Conheça a Linx </button>
                <button className="botaoHeader"> Ajude o algoritmo</button>
                <button className="botaoHeader">
                Seus produtos
                </button>
                <button className="botaoHeader"> Compartilhe</button>

            </div>
            <br></br>
            <br></br>

        </header>

    </div >
    );
}
