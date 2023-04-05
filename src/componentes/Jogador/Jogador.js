import './Jogador.css'

export const Jogador = ({nome, imagem, funcao, corDestaque}) => {

    return (
        <div className='jogador'>
            <div className='cabecalho' style={ {backgroundColor:corDestaque} }>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}