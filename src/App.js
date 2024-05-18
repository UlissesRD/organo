import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';

function App() {

  const teams = [
    {
      name: 'Atlanta Hawks',
      color: '#EB425F',
      championships: '1x NBA Champions',
    },
    {
      name: 'Boston Celtics',
      color: '#3F9971',
      championships: '17x NBA Champions',
    },
    {
      name: 'Brooklyn Nets',
      color: '#303030',
      championships: '',
    },
    {
      name: 'Charlotte Hornets',
      color: '#5E9FAD',
      championships: '',
    },
    {
      name: 'Chicago Bulls',
      color: '#EB425F',
      championships: '6x NBA Champions',
    },
    {
      name: 'Cleveland Cavaliers',
      color: '#803049',
      championships: '1x NBA Champions',
    },
    {
      name: 'Dallas Mavericks',
      color: '#3775AF',
      championships: '1x NBA Champions',
    },
    {
      name: 'Denver Nuggets',
      color: '#23375A',
      championships: '1x NBA Champions',
    },
    {
      name: 'Detroit Pistons',
      color: '#336BAB',
      championships: '3x NBA Champions',
    },
    {
      name: 'Golden State Warriors',
      color: '#FFCC3D',
      championships: '7x NBA Champions',
    },
    {
      name: 'Houston Rockets',
      color: '#FF305E',
      championships: '2x NBA Champions',
    },
    {
      name: 'Indiana Pacers',
      color: '#FFC854',
      championships: '',
    },
    {
      name: 'Los Angeles Clippers',
      color: '#1C2B40',
      championships: '',
    },
    {
      name: 'Los Angeles Lakers',
      color: '#FFC72C',
      championships: '17x NBA Champions',
    },
    {
      name: 'Memphis Grizzlies',
      color: '#426299',
      championships: '',
    },
    {
      name: 'Miami Heat',
      color: '#C23A62',
      championships: '3x NBA Champions',
    },
    {
      name: 'Milwaukee Bucks',
      color: '#205032',
      championships: '2x NBA Champions',
    },
    {
      name: 'Minnesota Timberwolves',
      color: '#1C2E47',
      championships: '',
    },
    {
      name: 'New Orleans Pelicans',
      color: '#F44D65',
      championships: '',
    },
    {
      name: 'New York Knicks',
      logo: '2x NBA Champions',
      color: '#FF8E33',
      championships: '',
    },
    {
      name: 'Oklahoma City Thunder',
      color: '#FF7357',
      championships: '',
    },
    {
      name: 'Orlando Magic',
      color: '#64AAD8',
      championships: '',
    },
    {
      name: 'Philadelphia 76ers',
      color: '#446099',
      championships: '',
    },
    {
      name: 'Phoenix Suns',
      color: '#F67E3F',
      championships: '',
    },
    {
      name: 'Portland Trail Blazers',
      color: '#DD4862',
      championships: '1x NBA Champions',
    },
    {
      name: 'Sacramento Kings',
      color: '#7E579D',
      championships: '1x NBA Champions',
    },
    {
      name: 'San Antonio Spurs',
      color: '#545454',
      championships: '5x NBA Champions',
    },
    {
      name: 'Toronto Raptors',
      color: '#CF4A4F',
      championships: '1x NBA Champions',
    },
    {
      name: 'Utah Jazz',
      color: '#29415B',
      championships: '',
    },
    {
      name: 'Washington Wizards',
      color: '#F43753',
      championships: '',
    }
  ]

  const [players, setPlayers] = useState([])

  const newPlayer = (player) => {
    console.log(player)
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} playerCreated={player => newPlayer(player)} />

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        color={team.color} 
        championships={team.championships}
        players={players.filter(player => player.team == team.name)}
      />)}

    </div>
  );
}

export default App;
