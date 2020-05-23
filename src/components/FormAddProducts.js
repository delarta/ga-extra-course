import React, {useState} from 'react'

function FormAddProducts(props) {
  // id: 1,
  //   productName: "Dell Laptop 13 inch",
  //   description: "lorem",
  //   price: 900,
  //   stock: 10
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      productName,
      description,
      price,
      stock
    }

    props.AddProduct(newData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input type="text" name="productName" value={productName} 
            onChange={e => setProductName(e.target.value) } />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" value={description} 
            onChange={e => setDescription(e.target.value) } />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={price} 
            onChange={e => setPrice(e.target.value) } />
        </div>
        <div>
          <label>Stock</label>
          <input type="number" name="stock" value={stock} 
            onChange={e => setStock(e.target.value) } />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormAddProducts
