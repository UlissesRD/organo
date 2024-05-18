import Player from '../Player';
import './Team.css'

const Team = (props) => {

    const css = { backgroundColor: props.color }

    const logoPath = `/imagens/logos/${props.name}.png`;

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
                <div>
                    {props.players.map(player => <Player
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