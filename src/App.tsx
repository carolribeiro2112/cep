import React, {useState} from 'react';
import axios from 'axios';
import {Local} from '../types/Local'

function App() {

  const [cep,setCep] = useState<string>("");

  const [local,setLocal]  = useState<Local>();

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setLocal(resposta.data))
  }
  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Ver tempo</button>
      <h1>Local</h1>
      <>
        <p>{local?.uf}</p>
        <p>{local?.localidade}</p>
        <p>{local?.bairro}</p>
        <p>{local?.logradouro}</p>
      </>
    </div>
  );
}

export default App;
