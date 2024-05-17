import './TextField.css'

const TextField = (props) => {

    const digited = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.v} onChange={digited} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}



export default TextField