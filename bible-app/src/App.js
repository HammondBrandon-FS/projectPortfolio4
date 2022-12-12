// Parent Component - App.js

// React Imports
import React, { useState } from 'react';
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

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [url, setUrl] = useState(`Tom`);

  return (
    <div style={styles.container}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/bible/*' element={<Bible setBooks={setBooks} setUrl={setUrl}/>}/>
        <Route path='/readingPlans' element={<Reading />}/>
        <Route path='/lessonPlans' element={<Lesson />}/>
        <Route path='/worship' element={<Worship />}/>
        <Route path='bible/books/*' element={<Books setBook={setBook} book={book} data={books}/>}/>
        <Route path='bible/books/read/*' element={<Explore  setChapters={setChapters} data={book} url={url}/>}/>
        <Route path='bible/books/read/study' element={<Study data={chapters}/>}/>
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