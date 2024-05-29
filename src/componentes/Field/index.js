import { type } from '@testing-library/user-event/dist/type'
import './Field.css'

const Field = (props) => {

    const digited = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className={`field field-${type}`}>
            <label>
                {props.label}
            </label>
            <input
                type={props.type}
                value={props.v}
                onChange={digited}
                required={props.mandatory}
                placeholder={props.placeholder}
            />
        </div>
    )
}



export default Field