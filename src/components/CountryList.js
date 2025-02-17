import React from 'react';

export default function CountryList({ countries }) {
  return (
    <div className="country-list">
      <h3>Countries in this Continent:</h3>
      <ul>
        {countries.map(country => (
          <li key={country.code}>
            {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
