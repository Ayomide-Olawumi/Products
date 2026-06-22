import React, { useState, useEffect } from 'react';
import Carousel from "../Componenets/Carousel.jsx";
import axios from 'axios';

const Quotes = () => {
  const [quotesArray, setQuotesArray] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then(res => setQuotesArray(res.data.quotes));
  }, []);

  return (
    <div>
      <Carousel quotes={quotesArray} />
    </div>
  );
};

export default Quotes;