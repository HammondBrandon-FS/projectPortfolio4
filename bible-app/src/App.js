// Parent Component - App.js

import React, { useState, useEffect } from 'react';

import Content from './components/Content';

function App() {
  const [bibles, setBibles] = useState({
    items: []
  });

  const url = 'https://api.scripture.api.bible/v1/bibles';
  const apiKey = '48393b9fab990a5b66b3225ed30151e2';

  const getData = async () => {
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'api-key': apiKey
      }
    });
    const data = await response.json();
    setBibles({
      items: data.data
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={styles.container}>
      {bibles.items.map(bible => {
        return <Content key={bible.id} data={bible.name} />
      })}
    </div>
  );
}

export default App;

const styles = {
  container: {
    background: '#e5e9f1'
  }
}