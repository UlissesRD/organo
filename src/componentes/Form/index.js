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

    return (
        <section className="form">
            <form>
                <h2>Fill the blanks to create the player card</h2>
                <TextField label="Name" placeholder="Enter your name" />
                <TextField label="Position" placeholder="Enter your position" />
                <TextField label="High School" placeholder="Enter your high school" />
                <TextField label="Draft Pick" placeholder="Enter your draft pick number" />
                <DropDown label="Drafted By" itens={teams}/>
                <TextField label="Image" placeholder="Enter the image address" />
                <DropDown label="Team" itens={teams}/>
            </form>
        </section>
    )
}

export default Form