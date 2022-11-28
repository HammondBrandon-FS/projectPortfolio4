// Parent Component - App.js

// React Imports
import React, { useState, useEffect } from 'react';
// Components
import Content from './components/Content';

function App() {
  // State to hold loaded bibles
  const [bibles, setBibles] = useState({
    items: []
  });

  // Constants for API Information
  const url = 'https://api.scripture.api.bible/v1/bibles';
  const apiKey = '48393b9fab990a5b66b3225ed30151e2';

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
      items: sortBibles(data.data)
    });
    console.log(data.data);
  }

  // Sort bibles by name of language
  function sortBibles(data) {
    data.sort((a, b) => {
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
    
    return data;
  }

  // getData after render using useEffect
  useEffect(() => {
    getData();
  })

  return (
    <div style={styles.container}>
      <div>
        <input placeholder='Search'></input>
        <button>Search</button>
      </div>
      {/* Loop through array in state and output Content component for each item */}
      {bibles.items.map(bible => {
        return <Content key={bible.id} name={bible.name} language={bible.language.name} />
      })}
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