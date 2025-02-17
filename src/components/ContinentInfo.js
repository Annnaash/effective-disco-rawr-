import React from "react";

export default function ContinentInfo({ continent }) {
    return (
      <div className="continent-info">
        <h2>{continent.name}</h2>
        <p>Area: {continent.areaSqKm.toLocaleString()} sq km</p>
        <p>Population: {continent.population.toLocaleString()}</p>
        <p>Number of Countries: {continent.countries}</p>
        <p>Major Lines: {continent.lines.join(", ")}</p>
        <p>Oceans: {continent.oceans.join(", ")}</p>
        <p>Developed Countries: {continent.developedCountries.join(", ")}</p>
      </div>
    )
  }
  
  