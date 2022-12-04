// Navigation Component

// React Imports
import React from 'react';

// React Router Imports
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={styles.container}>
            <div style={styles.logo}>
                <p>The Word</p>
            </div>
            <div style={styles.links}>
                <ul style={styles.list}>
                    <li style={styles.item}>
                        <NavLink to="/dashboard">
                            Home
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink to="/bible">
                            Bible
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink to="/readingPlans">
                            Reading Plans
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink to="/lessonPlans">
                            Lesson Plans
                        </NavLink>
                    </li>
                    <li style={styles.item}>
                        <NavLink to="/worship">
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
        padding: '0 8%',
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