import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

  const [dado, setDado] = useState({});

  const getApi = async () => {
    try {
      let res = await fetch (url)
      console.log(res)
      setDado(res)
    }catch(erro){
      console.log(erro)
    }

  }

  getApi()

  return (
    <div>
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
     
      <div className= 'middle'>
        <div className='textNews'>
          <h3>Ajude o algorítimo a ser mais certeiro</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <form className='form'>
          <label> Seu nome:</label>
          <input type='text'></input>
          <label>Email:</label>
          <input type='text'></input>
          <label>CPF:</label>
          <input type='text'></input>
          <div>
            <br></br>
            <input type='radio' value='female' name='gender'></input>
            <label>  Feminino</label>
            <input type='radio' value='male' name='gender'></input>
            <label>  Masculino</label>
            <input type='radio' value='nogender' name='gender'></input>
            <label>  Não-binário</label>
            <br></br><br></br>
            <button className='enviar'>Enviar</button>
             

          </div>
        </form>
      </div>
      <br></br>
      <div className='hr1'>
        <span className="hr1Text">
          Sua seleção especial
        </span>
      </div>
          <br></br>
      <div className="itens1">
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        </div>
      <div className="itens2">
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
        <div className="item1">
        <img></img>
        <h4> Name</h4>
        <p> descricao blabla</p>
        <h5>R$11,00</h5>
        <h4>R$10,00</h4>
        <h6>10x de R$1,00</h6>
        <button className='comprar'>Comprar</button>
        </div>
      </div>
     
        <br></br><br></br>
        <button className='botao'>Ainda mais produtos aqui!</button>
        <br></br><br></br>
        <br></br>
        <div className='hr2'>
        <span className="hr2Text">
          Compartilhe a novidade
        </span>
      </div>
      <br></br>
        <div className="compartilhar">
          <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
          <label>Nome do seu amigo: </label>
          <input type='text'></input>
          <label>  E-mail: </label>
          <input type='text'></input>
        </div>
        <br></br>
        <button className='botao'>Enviar agora</button>
        <br></br>
        <br></br>
      <div className='footerBig'>
        <footer className='footer'>
          <p>Testando suas habilidades em HTML, CSS e JS. </p>
            <p>Linx Impulse 2019</p>

        </footer>
      </div>
    </div>
  );
}

export default App;
