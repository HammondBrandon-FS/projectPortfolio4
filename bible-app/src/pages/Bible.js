// Bibles Page Component

// React Imports
import React, { useState, useEffect } from 'react';

// Images
import Cross from '../images/cross.jpg';

//Components
import Content from '../components/Content';
import Footer from '../components/Footer';

const Bible = () => {
    const english = [];

    // State to hold loaded bibles
    const [bibles, setBibles] = useState({
        items: []
    });

    // Constants for API Information
    const url = 'https://api.scripture.api.bible/v1/bibles';
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

    // getData connects to API asynchronously
    const getData = async () => {
        // Pass API Key in header
        const response = await fetch(url, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();

        // Set array in state
        setBibles({
            items: data.data
        });

    }

    // Sort Bibles by name of language
    function sortBibles() {
        bibles.items.sort((a, b) => {
        const nameA = a.language.name.toUpperCase();
        const nameB = b.language.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
        });
    }

    // Separate English Bibles from list
    function separateBibles() {
        bibles.items.forEach(bible => {
            if (bible.language.name.toLowerCase() === "english") {
                english.push(bible);
            }
        })
    }

    // getData after render using useEffect
    useEffect(() => {
        getData();
    }, [])

    // Sort and Separate Bibles
    sortBibles();
    separateBibles();

    return (
        <div>
            {/* Hero Image */}
            <div style={styles.hero}>
                <h2 style={styles.heading}>Choose a Bible</h2>
            </div>
            <div style={styles.container}>
                <h2 style={styles.title}>English Bibles</h2>
                {/* English Bibles List */}
                <ul style={styles.list}>
                    {english.map(bible => {
                        return <Content key={bible.id} id={bible.id} name={bible.name} language={bible.language.name} apiKey={apiKey}/>
                    })}
                </ul>
            </div>
            <Footer />
        </div>
        
    );
}

export default Bible;

const styles = {
    container: {
        padding: '0 8%'
    },
    hero: {
        background: `url(${Cross})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '18% 0',
        boxShadow: '0px 10px 10px #806A57 inset'
    },
    heading: {
        color: '#FEF6C2',
        fontSize: '3em',
        padding: '0',
        margin: '0',
        textShadow: '2px 2px 1px black'
    },
    title: {
        paddingTop: '2%',
        color: '#151C22'
    }
}