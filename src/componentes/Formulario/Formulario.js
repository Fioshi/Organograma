import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../Campo-texto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = (props) => {

    const [nome, setNome] = useState(' ')
    const [funcao, setCargo] = useState(' ')
    const [imagem, setImagem] = useState(' ')
    const [time, setTime] = useState(' ')

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            funcao,
            imagem,
            time
        });
        setNome(" ")
        setCargo(" ")
        setImagem("")
        setTime("")
    }

    return (
        <section className='container'>
            <form className='form' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do time</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                />
                <CampoTexto
                    valor={funcao}
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true}
                    label='Função'
                    placeholder='Digite seu cargo' />
                <CampoTexto
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label='Imagem'
                    placeholder='Informe o endereço da imagem que deseja' />
                <ListaSuspensa
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio={true}
                    label='Time'
                    itens={props.times} />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )

}

