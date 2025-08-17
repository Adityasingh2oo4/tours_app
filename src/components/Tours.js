import React from "react";
import Card from "./Card";
import '../index.css';

function Tours({ tours = [], removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Tour Destinations</h2>
      </div>
      <div className="cards">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))
        ) : (
          <p>No tours available.</p>
        )}
      </div>
    </div>
  );
}

export default Tours;
