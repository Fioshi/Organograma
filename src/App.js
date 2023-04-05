import { useState } from 'react'
import './App.css'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import { Rodape } from './componentes/Rodape/Rodape'

function App() {

  const times = [
    {
      nome: "Cachorros",
      corPrimaria: "#57c278",
      corSecundaria: "#D9F7E9 "
    },
    {
      nome: "Calopsitas",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Hamster",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    }
  ]

  const [jogadores, setJogador] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter((jogador) => jogador.time === time.nome)} />)}
      <Rodape />

    </div>
  );
}

export default App;