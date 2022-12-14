// Bibles Page Component

// React Imports
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components


const Study = () => {
    const location = useLocation();
    const verses = [];
    const passage = location.state.data.data.content;
    console.log(passage);
    for (let i = 0; i < passage.length; i++) {
        let para = passage[i].items;
        if(para.length > 0) {
            para.forEach(e => {
                if(e.text) {
                    verses.push(e.text + ' ');
                }
                else if (e.items[0].text) {
                    verses.push(e.items[0].text + ' ');
                }
            })
        }
    }
    console.log(verses);
    return (
        <div style={styles.container}>
            <h2>{location.state.name}</h2>
            {verses}
        </div>
    );
}

export default Study;

const styles = {
    container: {
        padding: '0 8%'
    }
}