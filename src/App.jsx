import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import { Card } from "./components/Card/Card";


function App() {
  const [pagina, setPagina] = useState(1);
  const [dado, setDado] = useState([]);

async function getApi (){
    try {
      let res = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pagina}`)
      let resposta = await res.json()

      setDado([...dado,...resposta.products])
      setPagina(numero => numero + 1)

    }catch(erro){
      console.log(erro)
    }

  }

  useEffect(() => getApi, []);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div>
      <div className = 'headerDiv'>
        <Header/>
    
      </div >
     
      <div className= 'middle'>
        <div className='textNews'>
          <h3>Ajude o algorítimo a ser mais certeiro</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <label> Seu nome:</label>
          <input  className='inputText' {...register("nome", { required: true, minLength: 10 })} type='text'></input>
          {errors.nome && <span>Esse campo é obrigatório.</span>}
          <label>Email:</label>
          <input  className='inputText' {...register("email", { required: true,  pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Enter a valid e-mail address',
    } })} type='email'/>
          {errors.email && <span>Esse campo é obrigatório.</span>}
          <label>CPF:</label>
          <input className='inputText' {...register("cpf", { required: true,  pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: 'CPF inválido ',
            } })}/>
          {errors.cpf && <span>Esse campo é obrigatório.<br></br>
             (digite no formato xxx.xxx.xxx-xx)</span>}

          

          <div>
            <br></br>
            <input {...register("gender", { required: true})} type='radio' value='female' name='gender'></input>
            <label>  Feminino</label>
            <input {...register("gender", { required: true})} type='radio' value='male' name='gender'></input>
            <label>  Masculino</label>
            <input {...register("gender", { required: true})} type='radio' value='nogender' name='gender'></input>
            <label>  Não-binário</label>
            <br></br>
            {errors.gender && <span>Esse campo é obrigatório.</span>}

            <br></br><br></br>
            <input type='submit' value='Enviar' className='enviar'/>
             

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
      <div className="cardDiv">
        {dado?.map((produto) => (
            (<Card 
              image={produto.image}
              name={produto.name}
              description={produto.description}
              oldPrice={produto.oldPrice}
              price={produto.price}
              installments={produto.installments}
            />
            
            
          )
      ))}
        
        
      </div>
     
        <br></br><br></br><br></br>
        <button onClick={getApi}className='botao'>Ainda mais produtos aqui!</button>
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

          <form  className= 'form2' onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Nome do seu amigo: </label>
          <br></br>
            
          <input className='inputText' {...register("nome2", { required: true, minLength: 10 })} type='text'></input>
          {errors.nome2 && <span>Esse campo é obrigatório.</span>}
            </div>
            <div>
            <label>  E-mail: </label>
          <br></br>
          <input {...register("email2", { required: true,  pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Enter a valid e-mail address',
    } })} className='inputText' type='email'/>
              {errors.email2 && <span>Esse campo é obrigatório.</span>}


            </div>
            <br></br>
            <input type='submit' value='Enviar agora' className='botao'/>


          </form>

        </div>
        <br></br>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
