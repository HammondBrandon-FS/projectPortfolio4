//Child/Dummy Content.js
//Parent - App.js

import './content.css'

// React Imports
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Data passed to component through props
const Content = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state.url;
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

    //const navigate = useNavigate();

    const getBook = async() => {
        // Pass API Key in header
        const response = await fetch(url + `/books/${props.id}/chapters`, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();

        navigate('read', {state:{ url: url, data: data}});
    }

    return (
        <li style={styles.container}>
            {/* Output name of Bible in a list item */}
            <button className='button' style={styles.button} onClick={getBook}>{props.name}</button>
        </li>
    );
}

export default Content;

// Styles
const styles = {
    button: {
        fontSize: '1.2em',
        background: 'none',
        border: 'none'
    }
}