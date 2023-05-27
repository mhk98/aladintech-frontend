import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
import { getProducts } from "../../features/products/productsSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  // const { products, isLoading } = useSelector((state) => state.products);
  const { brands, stock } = filter;

  // useEffect(() => {
  //   fetch("https://aladintech-backend.onrender.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data));
  //   dispatch(getProducts());
  // }, []);

  // useEffect(() => {
  //   dispatch(loadProductData());
  // }, [dispatch]);

  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const product = data?.data;

  console.log("product", product);
  const activeClass = "text-white  bg-indigo-500 border-white";

  // let content;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  // if (products.length) {
  //   content = products.map((product) => (
  //     <ProductCard key={product.model} product={product}></ProductCard>
  //   ));
  // }
  // if ((products.length && stock) || brands.length) {
  //   content = products
  //     .filter((product) => {
  //       if (stock) {
  //         return product.status === true;
  //       }
  //       return product;
  //     })
  //     .filter((product) => {
  //       if (brands.length) {
  //         return brands.includes(product.brand);
  //       }
  //       return product;
  //     })

  //     .map((product) => <ProductCard key={product.model} product={product} />);
  // }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      {/* <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold `}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold 

          `}
          onClick={() => dispatch(toggleBrands("amd"))}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold `}
          onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {product.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}

        {/* {content} */}
      </div>
    </div>
  );
};

export default Home;
