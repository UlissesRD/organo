import './DropDown.css'

const DropDown = (props) => {
    console.log(props.items)
    return (
        <div className='drop-down'>
            <label>
                {props.label}
            </label>
            <select required>={props.mandatory}
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropDown