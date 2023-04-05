import './Jogador.css'

export const Jogador = ({nome, imagem, cargo, corDestaque}) => {
    
    return (
        <div className='jogador'>
            <div className='cabecalho' style={ {backgroundColor:corDestaque} }>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}