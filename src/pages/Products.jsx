import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Api = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setProducts(res.data.products)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
<h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <h2>${product.price}</h2>
          <h2>{product.category}</h2>
          <p>{product.description}</p>

          <img
            src={product.images[0]}
            alt={product.title}
            width="200"
          />

          <br />

          <Link to={`/productdetails/${product.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Api