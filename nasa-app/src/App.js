import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Structure from './components/Structure'

function App() {

  const [data, setData] = useState([])

  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=kGDq1a4zRwPjocxEgwJ7tbNwuVfh7pPjNxlAdxAe')
  .then(res => {
    console.log("RESPONSE DATA:", res.data)
    setData(res.data)
  })
  .catch(err => {
    console.log("ERROR Fetching API:", err)
  })

  return (
    <div className="App">
        <Structure data={data}/>
    </div>
  );
}

export default App;
