//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Data passed to component through props
const Chapter = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state;
    console.log(url);
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

    //const navigate = useNavigate();

    const getChapter = async() => {
        // Pass API Key in header
        const response = await fetch(url, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();

        props.setChapters(data);

        navigate('study', {state: props.url});
    }

    return (
        <li>
            {/* Output name of Bible in a list item */}
            <button onClick={getChapter}>{props.name}</button>
        </li>
    );
}

export default Chapter;

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}