import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import './Player.css';

// Função para obter URL da imagem do jogador
async function obterURLdaImagem(nomeJogador) {
    try {
        const nomeFormatado = nomeJogador.toLowerCase().replace(/\s/g, '-');
        const urlJogador = `https://www.nba.com/player/${nomeFormatado}`;
        const response = await axios.get(urlJogador);
        const $ = cheerio.load(response.data);
        const urlImagem = $('meta[property="og:image"]').attr('content');
        return urlImagem;
    } catch (error) {
        console.error('Erro ao obter URL da imagem:', error);
        return null;
    }
}

const Player = ({ name, position, highSchool, draftPick, draftedBy }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        obterURLdaImagem(name).then(url => {
            if (url) {
                setImage(url);
            }
        });
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
