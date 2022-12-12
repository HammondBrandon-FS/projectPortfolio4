// Bibles Page Component

// React Imports
import React, { useEffect } from 'react';

//Components


const Study = props => {
    // Constants for API Information
    const url = props.url + `/chapters/${props.id}/verses`;
    console.log(url);
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

        console.log(data);

    }

    // getData after render using useEffect
    useEffect(() => {
        getData();
    }, [])

    return (
        <div style={styles.container}>
            <h2>English Bibles</h2>
            <p></p>
        </div>
    );
}

export default Study;

const styles = {
    container: {
        padding: '0 8%'
    }
}