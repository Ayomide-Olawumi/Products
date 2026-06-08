import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div>
      <h1>Product Details</h1>

      {product ? (
        <div>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>

          <img src={product.thumbnail} width="200" />

          <br />

          <Link to="/">Back</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetails