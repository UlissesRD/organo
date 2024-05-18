import './Team.css'

const Team = (props) => {

    const css = {backgroundColor: props.color}

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
            </section>
            
        </>
    )
}

export default Team