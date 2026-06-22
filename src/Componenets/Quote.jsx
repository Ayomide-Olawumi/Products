import React from 'react';
import {useParams} from 'react-router-dom';
import '../styles/quotes.css'

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <h1>Quote</h1>
      <div>
        <h3>{quote.quote}</h3>
        <h3>{quote.author}</h3>
      </div>

    </div>
  )
}

export default Quote
