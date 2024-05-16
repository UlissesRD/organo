import './DropDown.css'

const DropDown = (props) => {
    console.log(props.itens)
    return (
        <div className='drop-down'>
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropDown