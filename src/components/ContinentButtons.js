import React from "react";

export default function ContinentButtons({ continents, onContinentClick }) {
    return (
      <div className="continent-buttons">
        {continents.map((continent) => (
          <button key={continent.code} onClick={() => onContinentClick(continent.code)} className="continent-button">
            {continent.name}
          </button>
        ))}
      </div>
    )
  }
  
  