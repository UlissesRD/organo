import React, { useState, useEffect } from 'react';

import NBA from 'nba';

import './Player.css';

const Player = ({ name, position, highSchool, draftPick, draftedBy }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        const findPlayer = NBA.findPlayer(name);

        if (!findPlayer) {
            console.error(`${name} não encontrado na API`);
            setImage(`/imagens/playersUpdate/2021/${name}.png` || `/imagens/playersUpdate/2022/${name}.png` || `/imagens/playersUpdate/2023/${name}.png`);
        } else {
            const playerId = findPlayer.playerId;
            setImage(`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`);
        }
    }, [name]);

    return (
        <div className='player'>
            <div className='header'>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h5>{highSchool}</h5>
                <h5>{draftPick}</h5>
                <h5>{draftedBy}</h5>
            </div>
        </div>
    );
}

export default Player;
