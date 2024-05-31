import React, { useState, useEffect } from 'react';

import NBA from 'nba';

import './Player.css';

import { FaTrash } from "react-icons/fa";

import { IoMdHeart, IoMdHeartEmpty} from "react-icons/io";

const Player = ({ player, deleting, onFav }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        const findPlayer = NBA.findPlayer(player.name);

        if (!findPlayer) {
            console.error(`${player.name} não encontrado na API`);
            setImage(`/imagens/playersUpdate/${player.name}.png`);
        } else {
            const playerId = findPlayer.playerId;
            setImage(`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`);
        }
    }, [player.name]);

    function favoriting() {
        onFav(player.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favoriting
    }

    return (
        <div className='player'>
            <FaTrash 
                size={25} 
                color='white' 
                className='delete' 
                onClick={() => deleting(player.id)}
            />
            <div className='header'>
                <img src={image} alt={player.name}/>
            </div>
            <div className='footer'>
                <h4>{player.name}</h4>
                <h5>{player.position}</h5>
                <h5>{player.highSchool}</h5>
                <h5>{player.draftPick}</h5>
                <h5>{player.draftedBy}</h5>
                <div className='fav'>
                    {player.favorite 
                        ? <IoMdHeart {...propsFavorite} color='red' /> 
                        : <IoMdHeartEmpty  {...propsFavorite} color='black' />}
                </div>
            </div>
        </div>
    );
}

export default Player;
