import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [highSchool, setHighSchool] = useState('')
    const [draftPick, setDraftPick] = useState('')
    const [draftedBy, setDraftedBy] = useState('')
    const [team, setTeam] = useState('')

    const callBack = (event) => {
        event.preventDefault()
        props.playerCreated({
            name,
            position,
            highSchool,
            draftPick,
            draftedBy,
            team
        })
        setName('')
        setPosition('')
        setHighSchool('')
        setDraftPick('')
        setDraftedBy('')
    }

    return (
        <section className="form">
            <form onSubmit={callBack}>
                <h2>Fill the blanks to create the player card</h2>
                <TextField
                    mandatory={true}
                    label="Name"
                    placeholder="Enter the player's name"
                    v={name}
                    changed={v => setName(v)}
                />
                <TextField
                    mandatory={true}
                    label="Position"
                    placeholder="Enter the player's position(s)"
                    v={position}
                    changed={v => setPosition(v)}
                />
                <TextField
                    mandatory={true}
                    label="High School"
                    placeholder="High school or last team before being drafted"
                    v={highSchool}
                    changed={v => setHighSchool(v)}
                />
                <TextField
                    mandatory={true}
                    label="Draft Pick"
                    placeholder="Draft pick number or 'Undrafted'"
                    v={draftPick}
                    changed={v => setDraftPick(v)}
                />
                <DropDown
                    mandatory={false}
                    label="Drafted By"
                    items={props.teams}
                    v={draftedBy}
                    changed={v => setDraftedBy(v)}
                />
                <DropDown
                    mandatory={true}
                    label="Team"
                    items={props.teams}
                    v={team}
                    changed={v => setTeam(v)}
                />
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form