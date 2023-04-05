import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select
                onChange={e => props.aoAlterado(e.target.value)}
                className='lista-suspensa-select'
                required={props.obrigatorio}
                value={props.valor}> <option value=" "></option>
                {props.itens.map(item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    );

}