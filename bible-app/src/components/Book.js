//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Data passed to component through props
const Content = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state + `/${props.id}/chapters`;
    console.log(url);
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

    //const navigate = useNavigate();

    const getBook = async() => {
        // Pass API Key in header
        const response = await fetch(url, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();
        props.setBook(data);

        navigate('read', {state: url});
    }

    return (
        <li>
            {/* Output name of Bible in a list item */}
            <button onClick={getBook}>{props.name}</button>
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