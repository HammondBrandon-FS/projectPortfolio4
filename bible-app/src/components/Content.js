//Child/Dummy Content.js
//Parent - App.js

import React from 'react';

const Content = props => {
    return (
        <div style={styles.container}>
            <ul>
                <li>
                    {props.data}
                </li>
            </ul>
        </div>
    );
}

export default Content;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}