import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';

import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Atlanta Hawks',
      color: '#EB425F',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Boston Celtics',
      color: '#3F9971',
      championships: '17x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Brooklyn Nets',
      color: '#303030',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Charlotte Hornets',
      color: '#5E9FAD',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Chicago Bulls',
      color: '#EB425F',
      championships: '6x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Cleveland Cavaliers',
      color: '#803049',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Dallas Mavericks',
      color: '#3775AF',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Denver Nuggets',
      color: '#23375A',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Detroit Pistons',
      color: '#336BAB',
      championships: '3x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Golden State Warriors',
      color: '#FFCC3D',
      championships: '7x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Houston Rockets',
      color: '#FF305E',
      championships: '2x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Indiana Pacers',
      color: '#FFC854',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Los Angeles Clippers',
      color: '#1C2B40',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Los Angeles Lakers',
      color: '#FFC72C',
      championships: '17x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Memphis Grizzlies',
      color: '#426299',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Miami Heat',
      color: '#C23A62',
      championships: '3x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Milwaukee Bucks',
      color: '#205032',
      championships: '2x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Minnesota Timberwolves',
      color: '#1C2E47',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'New Orleans Pelicans',
      color: '#F44D65',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'New York Knicks',
      logo: '2x NBA Champions',
      color: '#FF8E33',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Oklahoma City Thunder',
      color: '#FF7357',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Orlando Magic',
      color: '#64AAD8',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Philadelphia 76ers',
      color: '#446099',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Phoenix Suns',
      color: '#F67E3F',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Portland Trail Blazers',
      color: '#DD4862',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Sacramento Kings',
      color: '#7E579D',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'San Antonio Spurs',
      color: '#545454',
      championships: '5x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Toronto Raptors',
      color: '#CF4A4F',
      championships: '1x NBA Champions',
    },
    {
      id: uuidv4(),
      name: 'Utah Jazz',
      color: '#29415B',
      championships: '',
    },
    {
      id: uuidv4(),
      name: 'Washington Wizards',
      color: '#F43753',
      championships: '',
    }
  ]);

  const [players, setPlayers] = useState([])

  const newPlayer = (player) => {
    //debugger
    //console.log(player)
    setPlayers([...players, player])
  }

  function playerDelete(id) {
      setPlayers(players.filter(player => player.id !== id))
  }

  function changeTeamColor(color, id){
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  //function saveTeam(newTeam){
  //  setTeams([...teams, {...newTeam, id: uuidv4()}])
  //}

  return (
    <div className="App">
      <Banner />

      <Form 
        //saveTeam={saveTeam}
        teams={teams.map(team => team.name)} 
        playerCreated={player => newPlayer(player)} 
      />

      {teams.map(team => <Team 
        changeColor={changeTeamColor}
        key={team.name} 
        id={team.id}
        name={team.name} 
        color={team.color} 
        championships={team.championships}
        players={players.filter(player => player.team === team.name)}
        deleting={playerDelete}
      />)}

    </div>
  );
}

export default App;
