//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Data passed to component through props
const Content = props => {
    const url = `https://api.scripture.api.bible/v1/bibles/${props.id}`;
    const navigate = useNavigate();

    const getBible = async() => {
        // Pass API Key in header
        const response = await fetch(url + '/books?include-chapters=true&include-chapters-and-sections=true', {
            method: 'get',
            headers: {
            'api-key': props.apiKey
            }
        });
        const data = await response.json();
        console.log(data);

        navigate('books', {state: {data: data, url: url}});
        
    }

    return (
        <li style={styles.container}>
            {/* Output name of Bible in a list item */}
            <button onClick={getBible}>{props.name}</button>
        </li>
    );
}

export default Content;

// Styles
const styles = {
    container: {
        
    }
}