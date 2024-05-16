import TextField from '../TextField'
import './Form.css'

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Fill the blanks to create the player card</h2>
                <TextField label="Name" placeholder="Enter your name" />
                <TextField label="Position" placeholder="Enter your position" />
                <TextField label="Image" placeholder="Enter the image address" />
            </form>
        </section>
    )
}

export default Form