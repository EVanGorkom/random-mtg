import { useState } from 'react';
import CardFilter from './CardFilter';
import './Card.css';

function Commander() {
    const [cardImageUrl, setCardImageUrl] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

    const fetchRandomCard = async () => {
        let uri;
        if (selectedColors.length > 0) {
            const colorIdentityQuery = selectedColors.join('');
            uri = `https://api.scryfall.com/cards/random?q=is%3Acommander+color%3D${colorIdentityQuery}`;
        } else {
            uri = 'https://api.scryfall.com/cards/random?q=is%3Acommander'
        }

        try {
            const response = await fetch(uri);
            const data = await response.json();
            if (data.image_uris && data.image_uris.normal) {
                setCardImageUrl(data.image_uris.normal);
            } else {
                setCardImageUrl('');
                alert('No commander found for the selected colors.');
            }
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
        Filter by color
        <CardFilter onColorSelect={setSelectedColors} colors={selectedColors} />
        <br/>
        <button className="button" onClick={fetchRandomCard}>
            {cardImageUrl ? 'Eh, I\'m not feeling this one' : 'Give me a random Commander'}
        </button>
        <br/>
        </div>
    );
}

export default Commander; 