import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Structure from './components/Structure'
import Footer from './components/Footer'
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";


function App (props) {

  const [data, setData] = useState([])
  const [startDate, setStartDate] = useState(Date.now())
  
  const handleChange = date => {
   setStartDate(date);
  };

  useEffect(()=>{
    const date = moment(startDate).format("YYYY-MM-DD");
 
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=WSzgyshEH2w05Jecoz4QDuuLylIM8Z3EqZSZ8Xwr&date=${date}`)
      .then(res => {
        console.log("RESPONSE DATA:", res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log("ERROR Fetching API:", err)
      })

      console.log("StartDateProps", startDate);
  },[startDate])
 

  return (
    <div className="App">
        <Structure selected={startDate} handleChange={handleChange} data={data}/>
        <Footer/>
    </div>
  );
}

export default App;
