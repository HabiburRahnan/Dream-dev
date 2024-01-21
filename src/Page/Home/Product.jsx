import { useEffect, useState } from "react";
import Title from "../../Components/Title";

const Product = () => {
  const [products, setProduct] = useState();
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(products);
  return (
    <div className="py-10">
      <Title
        title="Exclusive Products"
        subTitle="Unleash the Power of Advanced Technology"
      ></Title>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products?.map((product) => (
          <div
            key={product.id}
            className="card card-side bg-base-100  px-5 border border-blue-600 hover:border-black transition   "
          >
            <figure>
              <img src={product.image} alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title hover:underline">{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
