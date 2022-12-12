//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Data passed to component through props
const Content = props => {
    const url = `https://api.scripture.api.bible/v1/bibles/${props.id}/books`;
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

    const navigate = useNavigate();

    const getBible = async() => {
        // Pass API Key in header
        const response = await fetch(url, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();

        props.setBooks(data);
        props.setUrl(`https://api.scripture.api.bible/v1/bibles/${props.id}`);

        navigate('books', {state: url});
    }

    return (
        <li>
            {/* Output name of Bible in a list item */}
            <button onClick={getBible}>{props.name}</button>
        </li>
    );
}

export default Content;

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}