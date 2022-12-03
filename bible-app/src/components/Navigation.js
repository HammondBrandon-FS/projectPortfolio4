// Navigation Component

// React Imports
import React from 'react';

// React Router Imports
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={styles.container}>
            <div style={styles.logo}>
                <p>Company</p>
            </div>
            <div style={styles.links}>
                <ul style={styles.list}>
                    <li style={styles.item}>
                        <NavLink>
                            Home
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink>
                            Bible
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink>
                            Reading Plans
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink>
                            Lesson Plans
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink>
                            Worship
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div style={styles.buttons}>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </nav>
    );
}

export default Navigation;

// Styles
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 8%',
        background: '#ffd'
    },
    links: {
        width: '30%'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: '0',
        margin: '0'
    },
    item: {
        
    },
    buttons: {
        display: 'flex'
    }
}