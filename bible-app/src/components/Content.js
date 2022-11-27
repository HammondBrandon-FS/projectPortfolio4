//Child/Dummy Header.js
//Parent - App.js

import React from 'react';

const Header = props => {
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

export default Header;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}