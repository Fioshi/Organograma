import Jogador from '../Jogador'
import "./Time.css"

export const Time = (props) => {
    return (
        (props.jogadores.length > 0) ? <section className="time" style={ {backgroundColor: props.corSecundaria} }>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='grupo'>
                {props.jogadores.map((jogador) => <Jogador corDestaque = {props.corPrimaria} key={jogador.nome} nome={jogador.nome} cargo= {jogador.cargo} imagem={jogador.imagem}/>)}
            </div>
        </section>
        : " "
    ) 
}