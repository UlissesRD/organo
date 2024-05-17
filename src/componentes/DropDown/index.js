import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>
                {props.label}
            </label>
            <select onChange={event => props.changed(event.target.value)} required={props.mandatory} value={props.v}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown