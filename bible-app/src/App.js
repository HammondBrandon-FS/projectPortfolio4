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
import Books from './components/Books';
import Explore from './components/Explore';
import Study from './components/Study';

function App() {

  return (
    <div style={styles.container}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/bible/*' element={<Bible />}/>
        <Route path='/readingPlans' element={<Reading />}/>
        <Route path='/lessonPlans' element={<Lesson />}/>
        <Route path='/worship' element={<Worship />}/>
        <Route path='bible/books/*' element={<Books />}/>
        <Route path='bible/books/read/*' element={<Explore />}/>
        <Route path='bible/books/read/study' element={<Study />}/>
      </Routes>
    </div>
  );
}

export default App;

// Styles
const styles = {
  container: {
    background: '#DFDFD5',
    margin: '2.5% 0 0 0'
  }
}