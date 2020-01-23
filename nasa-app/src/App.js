import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Structure from './components/Structure'
import Footer from './components/Footer'

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=WSzgyshEH2w05Jecoz4QDuuLylIM8Z3EqZSZ8Xwr')
      .then(res => {
        console.log("RESPONSE DATA:", res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log("ERROR Fetching API:", err)
      })
  },[])
 

  return (
    <div className="App">

        <Structure data={data}/>
        <Footer/>
    </div>
  );
}

export default App;
