import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import Field from '../Field'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [highSchool, setHighSchool] = useState('')
    const [draftPick, setDraftPick] = useState('')
    const [draftedBy, setDraftedBy] = useState('')
    const [team, setTeam] = useState('')

    //const [teamName, setTeamName] = useState('')
    //const [color, setColor] = useState('')
    //const [logo, setLogo] = useState('')

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

    //const handleFileChange = (event) => {
    //    const file = event.target.files[0];
    //    if (file) {
    //        const reader = new FileReader();
    //        reader.onloadend = () => {
    //            setLogo(reader.result);
    //        };
    //        reader.readAsDataURL(file);
    //    }
    //};

    //const handleTeamSubmit = (event) => {
    //    event.preventDefault();
    //    props.saveTeam({
    //        name: teamName,
    //        color,
    //        logo
    //    });
    //    setTeamName('');
    //    setColor('');
    //    setLogo(null);
    //};


    return (
        <section className="form-container">
            <form className="form" onSubmit={callBack}>
                <h2>Fill the blanks to create the player card</h2>
                <Field
                    mandatory={true}
                    label="Name"
                    placeholder="Enter the player's name"
                    v={name}
                    changed={v => setName(v)}
                />
                <Field
                    mandatory={true}
                    label="Position"
                    placeholder="Enter the player's position(s)"
                    v={position}
                    changed={v => setPosition(v)}
                />
                <Field
                    mandatory={true}
                    label="High School"
                    placeholder="High school or last team before being drafted"
                    v={highSchool}
                    changed={v => setHighSchool(v)}
                />
                <Field
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

            {/* 
            <form className="form" onSubmit={ /*handleTeamSubmit*//*(event) => {
                event.preventDefault()
                props.saveTeam({
                    name: teamName,
                    color,
                    //logo
                })
                setTeamName('')
                setColor('')
                //setLogo('')
            }}>

                <h2>Fill the blanks to create a new team</h2>
                <Field
                    mandatory={true}
                    label="Name"
                    placeholder="Enter the team's name"
                    v={teamName}
                    changed={v => setTeamName(v)}
                />
                <Field
                    mandatory={true}
                    type="color"
                    label="Background color"
                    placeholder="Enter the team's primary color"
                    v={color}
                    changed={v => setColor(v)}
                />
                <div className="text-field">
                     <label>Logo</label>
                     <input type="file" onChange={handleFileChange} accept="image/png" />
                 </div> 
                
                <Button>
                    Create team
                </Button>
            </form>
            */}
        </section>
    )
}

export default Form