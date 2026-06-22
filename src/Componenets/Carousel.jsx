import React, { useState } from 'react';
import Quote from './Quote';
import "../styles/quotes.css";

const Carousel = ({ quotes }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

if (!quotes || quotes.length === 0) {
  return <h2>Loading...</h2>;
}

const nextQuote = () => {
  setCurrentIndex(prev =>
    prev === quotes.length - 1 ? 0 : prev + 1
  );
};

const prevQuote = () => {
  setCurrentIndex(prev =>
    prev === 0 ? quotes.length - 1 : prev - 1
  );
};

return (
  <div className="carousel">
    <button onClick={prevQuote}>Prev</button>

    <Quote quote={quotes[currentIndex]} />

    <button onClick={nextQuote}>Next</button>
  </div>
)
}

export default Carousel