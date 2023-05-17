import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../stores/productSlice";
import { AiFillStar } from "react-icons/ai";
import { add } from "../stores/cartSlice";
import Category from "./Category";

const Product = () => {
  const selectedValue = useSelector((state) => state.category.selectedValue);
  const { data: products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product, quantity) => {
    dispatch(add({ ...product, quantity }));
  };

  if (products.status === STATUSES.ERROR) return <h2>Something went wrong</h2>;
  if (products.status === STATUSES.LOADING) return <h2>Loading...</h2>;

  console.log(selectedValue);

  const filteredProducts = selectedValue
    ? products.filter((product) => product.category.includes(selectedValue))
    : products;

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Category />
      <div className="productsWrapper">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <span className="raiting">
              {product.rating.rate}
              <AiFillStar />
            </span>
            <img src={product.image} alt="product photo" />
            <h4>{product.title}</h4>
            <h3>
              {product.price} <span>$</span>
            </h3>
            <button
              className="btn"
              onClick={() => {
                const quantity = parseInt(prompt("quantity:", "1"), 10) || 1;
                handleAdd(product, quantity);
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
