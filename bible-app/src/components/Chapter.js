//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Data passed to component through props
const Chapter = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state.url;
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';
    const chapter = props.name;

    //const navigate = useNavigate();

    const getChapter = async() => {
        // Pass API Key in header
        const response = await fetch(url + `/passages/${props.id}?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();
        console.log(data);
        navigate('study',{state:{data: data, url: url, name: chapter}});
    }

    return (
        <li>
            {/* Output name of Bible in a list item */}
            <button className='item' onClick={getChapter}>{props.name}</button>
        </li>
    );
}

export default Chapter;