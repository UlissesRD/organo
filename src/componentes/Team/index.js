import './Team.css'
import NBA from 'nba'; 

const Team = (props) => {

    const css = {backgroundColor: props.color}

    const teamId = NBA.teamIdFromName(props.name);

    const logoPath = `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`;

    const sortedPlayers = props.players.sort((a,b) => a.name.localeCompare(b.name));

    return (
        <>
            <label className='team-label'>
                {props.name}
            </label>
            <section className='team' style={css}>
                <img src={logoPath} alt={`Logo do ${props.name}`} className='team-logo' />
                <h2 className='team-championships'>
                    {props.championships}
                </h2>
                <div className='players' key={props.name}>
                    {sortedPlayers.map(player => <Player key = {player.name}
                        name={player.name}
                        position={player.position}
                        highSchool={player.highSchool}
                        draftPick={player.draftPick}
                        draftedBy={player.draftedBy}

                    />)}
                </div>
            </section>
            
        </>
    )
}

export default Team