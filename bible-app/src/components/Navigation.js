// Navigation Component

// React Imports
import React from 'react';

// React Router Imports
import { NavLink } from 'react-router-dom';

// Components
import Button from './Button';

const Navigation = () => {
    return (
        <nav style={styles.container}>
            <div>
                <h1 style={styles.logo}>The Word</h1>
            </div>
            <div style={styles.links}>
                <ul style={styles.list}>
                    <li>
                        <NavLink to="/dashboard" style={({ isActive }) => ({
                            color: isActive ? '#806A57' : '#151C22',
                            fontWeight: isActive ? 'bold' : '400',
                            fontSize: '1.1em',
                            borderBottom: isActive ? '2px solid #806A57' : 'none',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            textDecoration: 'none'
                        })}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bible" style={({ isActive }) => ({
                            color: isActive ? '#806A57' : '#151C22',
                            fontWeight: isActive ? 'bold' : '400',
                            fontSize: '1.1em',
                            borderBottom: isActive ? '2px solid #806A57' : 'none',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            textDecoration: 'none'
                        })}>
                            Bible
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/readingPlans" style={({ isActive }) => ({
                            color: isActive ? '#806A57' : '#151C22',
                            fontWeight: isActive ? 'bold' : '400',
                            fontSize: '1.1em',
                            borderBottom: isActive ? '2px solid #806A57' : 'none',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            textDecoration: 'none'
                        })}>
                            Reading Plans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lessonPlans" style={({ isActive }) => ({
                            color: isActive ? '#806A57' : '#151C22',
                            fontWeight: isActive ? 'bold' : '400',
                            fontSize: '1.1em',
                            borderBottom: isActive ? '2px solid #806A57' : 'none',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            textDecoration: 'none'
                        })}>
                            Lesson Plans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/worship" style={({ isActive }) => ({
                            color: isActive ? '#806A57' : '#151C22',
                            fontWeight: isActive ? 'bold' : '400',
                            fontSize: '1.1em',
                            borderBottom: isActive ? '2px solid #806A57' : 'none',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            textDecoration: 'none'
                        })}>
                            Worship
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div style={styles.buttons}>
                <button style={styles.logIn}>Log In</button>
                <Button label='Sign Up' />
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
        margin: 'auto',
        background: '#DFDFD5',
        borderBottom: '2px solid #806A57',
        position: 'fixed',
        top: '0',
        width: '100%',
        boxSizing: 'border-box'
    },
    logo: {
        color: '#806A57',
        fontWeight: 'bold',
        fontSize: '2em',
        margin: '0'
    },
    links: {
        width: '33%'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: '0',
        margin: '0'
    },
    buttons: {
        display: 'flex'
    },
    signUp: {
        background: '#4F9AD8',
        color: '#fff',
        padding: '8px 20px',
        border: 'none',
        fontSize: '1.1em'
    },
    logIn: {
        background: 'none',
        padding: '8px 20px',
        border: 'none',
        fontSize: '1.1em'
    }
}