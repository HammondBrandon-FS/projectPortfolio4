// Parent Component - App.js

// React Imports
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Components
import Navigation from './components/Navigation';

// Pages
import Dashboard from './pages/Dashboard';
import Bible from './pages/Bible';
import Reading from './pages/Reading';
import Lesson from './pages/Lesson';
import Worship from './pages/Worship';

function App() {

  return (
    <div style={styles.container}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/bible' element={<Bible />}/>
        <Route path='/readingPlans' element={<Reading />}/>
        <Route path='/lessonPlans' element={<Lesson />}/>
        <Route path='/worship' element={<Worship />}/>
      </Routes>
    </div>
  );
}

export default App;

// Styles
const styles = {
  container: {
    background: '#e5e9f1'
  }
}