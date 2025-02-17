import React, { useState } from 'react';
import ContinentButtons from './components/ContinentButtons';
import ContinentInfo from './components/ContinentInfo';
import CountryList from './components/CountryList';
import continentsData from './data/continents.json';  
import countriesData from './data/countries.json';  
import './styles.css';

export default function App() {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const handleContinentClick = (continentCode) => {
    const selected = continentsData.find(c => c.code === continentCode);
    setSelectedContinent(selected);
  };

  const getCountriesForContinent = (continentCode) => {
    if (!continentCode) return [];
    
    return countriesData.filter(country => country.continent === continentCode);
  };

  return (
    <div className="app">
      <h1>Continent Explorer</h1>

      {/* Buttons for continents */}
      <ContinentButtons 
        continents={continentsData} 
        onContinentClick={handleContinentClick} 
      />

      {/* Display continent info and the list of countries */}
      {selectedContinent && (
        <>
          <ContinentInfo continent={selectedContinent} />
          
          {/* Pass the filtered countries to the CountryList component */}
          <CountryList countries={getCountriesForContinent(selectedContinent.code)} />
        </>
      )}
    </div>
  );
}
