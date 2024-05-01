import { useState } from 'react';
import './Card.css';

function Cards() {
    const [cardImageUrl, setCardImageUrl] = useState('');

    const fetchRandomCard = async () => {
    try {
        const response = await fetch('https://api.scryfall.com/cards/random');
        const data = await response.json();
        setCardImageUrl(data.image_uris.normal);
        } catch (error) {
        console.error('Error fetching random card:', error);
        }
    };

    return (
        <div className="container">

        {cardImageUrl && (
            <div>
            <img src={cardImageUrl} alt="Random Magic The Gathering Card" className="card-image" />
            </div>
        )}
        <button className="button" onClick={fetchRandomCard}>
            {cardImageUrl ? 'This card sucks! Find me a new one!' : 'Get a random card'}
        </button>
        </div>
    );
}

export default Cards; 