import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const teams = [
        'Atlanta Hawks',
        'Boston Celtics',
        'Brooklyn Nets',
        'Charlotte Hornets',
        'Chicago Bulls',
        'Cleveland Cavaliers',
        'Dallas Mavericks',
        'Denver Nuggets',
        'Detroit Pistons',
        'Golden State Warriors',
        'Houston Rockets',
        'Indiana Pacers',
        'Los Angeles Clippers',
        'Los Angeles Lakers',
        'Memphis Grizzlies',
        'Miami Heat',
        'Milwaukee Bucks',
        'Minnesota Timberwolves',
        'New Orleans Pelicans',
        'New York Knicks',
        'Oklahoma City Thunder',
        'Orlando Magic',
        'Philadelphia 76ers',
        'Phoenix Suns',
        'Portland Trail Blazers',
        'Sacramento Kings',
        'San Antonio Spurs',
        'Toronto Raptors',
        'Utah Jazz',
        'Washington Wizards'
    ]

    const[name, setName] = useState('')
    const[position, setPosition] = useState('')
    const[highSchool, setHighSchool] = useState('')
    const[draftPick, setDraftPick] = useState('')
    const[draftedBy, setDraftedBy] = useState('')
    const[image, setImage] = useState('')
    const[team, setTeam] = useState('')

    const callBack = (event) => {
        event.preventDefault()
        console.log('Form has been submitted =>', name, position, highSchool, draftPick, draftedBy, image, team)
    }

    return (
        <section className="form">
            <form onSubmit={callBack}>
                <h2>Fill the blanks to create the player card</h2>
                <TextField 
                    mandatory={true} 
                    label="Name" 
                    placeholder="Enter your name" 
                    v={name}
                    changed={v => setName(v)}
                />
                <TextField 
                    mandatory={true} 
                    label="Position" 
                    placeholder="Enter your position(s)" 
                    v={position}
                    changed={v => setPosition(v)}
                />
                <TextField 
                    mandatory={true} 
                    label="High School" 
                    placeholder="Enter your high school or previous team" 
                    v={highSchool}
                    changed={v => setHighSchool(v)}
                />
                <TextField 
                    mandatory={true} 
                    label="Draft Pick" 
                    placeholder="Enter your draft pick number or 'Undrafted'" 
                    v={draftPick}
                    changed={v => setDraftPick(v)}
                />
                <DropDown 
                    mandatory={true} 
                    label="Drafted By" 
                    items={teams}
                    v={draftedBy}
                    changed={v => setDraftedBy(v)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Enter the image address" 
                    v={image}
                    changed={v => setImage(v)}
                />
                <DropDown 
                    mandatory={true} 
                    label="Team" 
                    items={teams}
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