//Child/Dummy Content.js
//Parent - App.js

// React Imports
import React from 'react';

// Data passed to component through props
const Content = props => {
    return (
        <div style={styles.container}>
            <ul>
                <li>
                    {/* Output name of Bible in a list item */}
                    <h3>{props.language}</h3>
                    <a href='index.html'>{props.name}</a>
                </li>
            </ul>
        </div>
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