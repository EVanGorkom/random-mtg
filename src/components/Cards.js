import { useState } from 'react';
import CardFilter from './CardFilter';
import './Card.css';

function Cards() {
    const [cardImageUrl, setCardImageUrl] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);
    const fetchRandomCard = async () => {
        let uri;
        if (selectedColors.length > 0) {
            let colorQuery = `c:${selectedColors.join('')}`;
            uri = `https://api.scryfall.com/cards/search?q=${colorQuery}&order=random&unique=cards&include_extras=false&include_multilingual=false&include_variations=false`;
        } else {
            uri = 'https://api.scryfall.com/cards/random';
        }

        try {
            const response = await fetch(uri);
            const data = await response.json();
            console.log(data)
            if (data.data && data.data.length) {
                // first conditional handles the search endpoint with the color filter. Now we need to randomize and select the card.
                const randomIndex = Math.floor(Math.random() * data.data.length);
                const card = data.data[randomIndex];
                setCardImageUrl(card.image_uris ? card.image_uris.normal : '');
            } else if (data.image_uris) {
                // second conditional handles the singular endpoint 'cards/random' which will only ever give a single card
                setCardImageUrl(data.image_uris ? data.image_uris.normal : '');
            } else {
                // third conditional handles errors.
                setCardImageUrl('');
                alert('No cards found for the selected colors.');
            }
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };

    return (
        <div className="container">
        <h3>Random Magic Card</h3>
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
            {cardImageUrl ? 'Find me a new one' : 'Get a random card'}
        </button>
        <br/>
        </div>
    );
}

export default Cards; 