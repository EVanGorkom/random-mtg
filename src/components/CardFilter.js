// import { useState } from 'react';

// function CardFilter({ onColorSelect, initialColors }) {
//     const [selectedColors, setSelectedColors] = useState(initialColors || []);
    
//     const handleChange = (color, isChecked) => {
//         if (isChecked) {
//             setSelectedColors([...selectedColors, color]);
//         } else {
//             setSelectedColors(selectedColors.filter(c => c !== color));
//         }
//     };

//     return (
//         <div>
//             {['W', 'U', 'B', 'R', 'G'].map(color => (
//                 <label key={color}>
//                     {color}
//                     <input
//                         type="checkbox"
//                         onChange={(e) => handleChange(color, e.target.checked)}
//                         checked={selectedColors.includes(color)}
//                     />
//                 </label>
//             ))}
//         </div>
//     );
// }

// export default CardFilter;


// import React from 'react';

// function CardFilter({ onColorSelect }) {
//     const colors = ['W', 'U', 'B', 'R', 'G']; // White, Blue, Black, Red, Green
//     const handleChange = (event) => {
//         const selectedColors = colors.filter(color =>
//         document.getElementById(color).checked
//         );
//         onColorSelect(selectedColors);
//     };

//     return (
//         <div>
//         {colors.map(color => (
//             <label key={color}>
//             {color}
//             <input
//                 id={color}
//                 type="checkbox"
//                 onChange={handleChange}
//             />
//             </label>
//         ))}
//         </div>
//     );
// }

// export default CardFilter;

import React, { useState } from 'react';

function CardFilter({ onColorSelect }) {
    const colors = ['W', 'U', 'B', 'R', 'G']; // White, Blue, Black, Red, Green
    const [selectedColors, setSelectedColors] = useState([]);

    const handleChange = (color) => {
        const newSelectedColors = selectedColors.includes(color)
        ? selectedColors.filter(c => c !== color)
        : [...selectedColors, color];
        setSelectedColors(newSelectedColors);
        onColorSelect(newSelectedColors);
    };

    return (
        <div>
        {colors.map(color => (
            <label key={color}>
            <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleChange(color)}
            /> {color}
            </label>
        ))}
        </div>
    );
}

export default CardFilter;