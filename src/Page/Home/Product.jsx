import { useEffect, useState } from "react";
import Title from "../../Components/Title";

const Product = () => {
  const [products, setProduct] = useState();
  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(products);
  return (
    <div>
      <Title
        title="Exclusive Products"
        subTitle="Unleash the Power of Advanced Technology"
      ></Title>
      <div>
        {products.map((product) => (
          <div key={product.id}></div>
        ))}
      </div>
    </div>
  );
};

export default Product;
