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
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input className="form-control" type="text" name="productName" value={productName} 
            onChange={e => setProductName(e.target.value) } />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" type="text" name="description" value={description} 
            onChange={e => setDescription(e.target.value) } />
        </div>
        <div  className="form-group">
          <label>Price</label>
          <input className="form-control" type="number" name="price" value={price} 
            onChange={e => setPrice(e.target.value) } />
        </div >
        <div className="form-group">
          <label>Stock</label>
          <input className="form-control" type="number" name="stock" value={stock} 
            onChange={e => setStock(e.target.value) } />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormAddProducts
