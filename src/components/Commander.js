import { useState } from 'react';
import './Card.css';

function Commander() {
    const [cardImageUrl, setCardImageUrl] = useState('');

    const fetchRandomCard = async () => {
    try {
        const response = await fetch('https://api.scryfall.com/cards/random?q=is%3Acommander');
        const data = await response.json();
        setCardImageUrl(data.image_uris.normal);
        } catch (error) {
        console.error('Error fetching random card:', error);
        }
    };

    return (
        <div className="container">
        <h3>Random Commander</h3>
        {cardImageUrl && (
            <div>
            <img src={cardImageUrl} alt="Random Magic The Gathering Card" className="card-image" />
            </div>
        )}
        <br/>
        <button className="button" onClick={fetchRandomCard}>
            {cardImageUrl ? 'Eh, I\'m not feeling this one' : 'Give me a random Commander'}
        </button>
        </div>
    );
}

export default Commander; 