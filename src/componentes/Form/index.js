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

    const callBack = (event) => {
        event.preventDefault()
        console.log('Form has been submitted')
    }

    return (
        <section className="form">
            <form onSubmit={callBack}>
                <h2>Fill the blanks to create the player card</h2>
                <TextField mandatory={true} label="Name" placeholder="Enter your name" />
                <TextField mandatory={true} label="Position" placeholder="Enter your position(s)" />
                <TextField mandatory={true} label="High School" placeholder="Enter your high school or previous team" />
                <TextField mandatory={true} label="Draft Pick" placeholder="Enter your draft pick number or 'Undrafted'" />
                <DropDown mandatory={true} label="Drafted By" items={teams}/>
                <TextField label="Image" placeholder="Enter the image address" />
                <DropDown mandatory={true} label="Team" items={teams}/>
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form