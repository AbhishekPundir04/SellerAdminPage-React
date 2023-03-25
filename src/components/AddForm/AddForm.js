import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import SelectOption from "./SelectOption";

const AddForm = (props) => {
  const [enteredProduct, setenteredProduct] = useState("");
  const [enteredSellingPrice, setenteredSellingPrice] = useState("");
  const [enteredProductName, setenteredProductName] = useState("");
  const [enteredCategory, setenteredCategory] = useState("");
  const [error, setError] = useState();

  const addProductHandler = (event) => {
    event.preventDefault();
    if (
      enteredProduct.trim().length === 0 ||
      enteredSellingPrice.trim().length === 0 ||
      enteredProductName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a some value",
      });
      return;
    }
    if (+enteredProduct < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a positive value",
      });
      return;
    }
    props.onAddproducts(
      enteredProduct,
      enteredSellingPrice,
      enteredProductName,
      enteredCategory
    );

    setenteredProduct("");
    setenteredSellingPrice("");
    setenteredProductName("");
    setenteredCategory("");
  };
  const productChnangeHandler = (event) => {
    setenteredProduct(event.target.value);
  };
  const sellingPriceHandler = (event) => {
    setenteredSellingPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setenteredProductName(event.target.value);
  };
  const categoryChnangeHandler = (event) => {
    setenteredCategory(event.target.value);
  };

  const errorHandler = ()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>} 
      <Card>
        <form onSubmit={addProductHandler}>
          <label>Product Id</label>
          <input
            id="productId"
            type="text"
            value={enteredProduct}
            onChange={productChnangeHandler}
          />
          <label>Selling Price</label>
          <input
            id="sellingId"
            type="number"
            value={enteredSellingPrice}
            onChange={sellingPriceHandler}
          />
          <label>Product Name</label>
          <input
            id="nameId"
            type="text"
            value={enteredProductName}
            onChange={productNameHandler}
          />
          <label>Choose A Category</label>
          <SelectOption
            value={enteredCategory}
            onChange={categoryChnangeHandler}
          />
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
