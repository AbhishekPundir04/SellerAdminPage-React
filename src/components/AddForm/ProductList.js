import Card from "../UI/Card";
const ProductList = (props) => {
  return (
    <Card>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.id} {product.sellingPrice} {product.proName} {product.category}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductList;
