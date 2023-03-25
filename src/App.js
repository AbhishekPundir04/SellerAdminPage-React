import React, { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import ProductList from "./components/AddForm/ProductList";
function App() {
  const [productList, setproductList] = useState([]);
  const productHandler =(pId, price, pName, catgo) =>{
    setproductList((prevProductList)=>
    {
      return [...prevProductList, {id: pId, sellingPrice: price, proName: pName, category: catgo}];
    })
  }

  return (
    <div>
      <AddForm onAddproducts={productHandler}/>
      <ProductList products={productList} />
      <div>
        <h2>Products</h2>
      </div>
      <div>
        <h3>Electronics</h3>
      </div>
      <div>
        <h3>SkinCare</h3>
      </div>
      <div>
        <h3>Food</h3>
      </div>
    </div>
  );
}

export default App;
