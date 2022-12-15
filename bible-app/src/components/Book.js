//Child/Dummy Content.js
//Parent - App.js

// React Router Imports
import { useNavigate, useLocation } from 'react-router-dom';

// Data passed to component through props
const Content = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state.url;
    const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';


    const getBook = async() => {
        // Pass API Key in header
        const response = await fetch(url + `/books/${props.id}/chapters`, {
            method: 'get',
            headers: {
            'api-key': apiKey
            }
        });
        const data = await response.json();

        // Navigate to next page sending url and data states
        navigate('read', {state:{ url: url, data: data}});
    }

    return (
        <li>
            {/* Output name of Bible in a list item */}
            <button className='item' onClick={getBook}>{props.name}</button>
        </li>
    );
}

export default Content;