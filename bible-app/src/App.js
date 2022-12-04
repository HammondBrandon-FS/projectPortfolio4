// Parent Component - App.js

// React Imports
import React, { useState, useEffect } from 'react';
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
  // State to hold loaded bibles
  const [bibles, setBibles] = useState({
    items: []
  });

  // Constants for API Information
  const url = 'https://api.scripture.api.bible/v1/bibles';
  const apiKey = 'b3dc6055a5ff2fac477e057ec84127e1';

  // getData connects to API asynchronously
  const getData = async () => {
    // Pass API Key in header
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'api-key': apiKey
      }
    });
    const data = await response.json();

    // Set array in state
    setBibles({
      items: data.data
    });
  }

  // Sort bibles by name of language
  function sortBibles() {
    bibles.items.sort((a, b) => {
      const nameA = a.language.name.toUpperCase();
      const nameB = b.language.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  // getData after render using useEffect
  useEffect(() => {
    getData();
  }, [])

  sortBibles();

  return (
    <div style={styles.container}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/bible' element={<Bible data={bibles.items}/>}/>
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