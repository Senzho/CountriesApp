import './App.css';
import React,{useState, useEffect} from 'react';
import CountriesList from './CountriesList';
import FilterForm from './FilterForm';

const countriesUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    var data = await fetch(countriesUrl).then(res => {
        return res.json();
      }
    );
    data.sort((a, b) => a.name.official > b.name.official ? 1 : -1);
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  function search(column, keyword) {
    if (column === 'all') {

    }else{
      
    }
  }

  function search(columns, keyword){

  }

  return (
    <div className="App">
      <FilterForm search={search}/>
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
