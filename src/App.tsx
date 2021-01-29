import React, {useState} from 'react';
import axios from 'axios';
import './styles.css'
import {Local} from './types/Local'

function App() {

  const [cep,setCep] = useState<string>("");

  const [local,setLocal]  = useState<Local>();

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setLocal(resposta.data))
  }
  return (
    <div className="App">
      <h1>Localizador através do CEP</h1><br/>
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Ver Endereço</button>
      <>
        <p>uf: {local?.uf}</p>
        <p>cidade: {local?.localidade}</p>
        <p>bairro: {local?.bairro}</p>
        <p>logradouro: {local?.logradouro}</p>
      </>
    </div>
  );
}

export default App;
