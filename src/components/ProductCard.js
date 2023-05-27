import React from "react";
import { BiListPlus } from "react-icons/bi";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="bg-indigo-500 text-white p-1 rounded-full w-8 h-8 absolute right-2 text-center">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={`https://aladintech-backend.onrender.com/${product.Img}`} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return <li className="text-sm ">{feature}</li>;
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            className=" bg-indigo-500 rounded-full px-2 flex px-16 gap-8 items-center text-white text-bold"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <svg
              class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>{" "}
            <span className="">Remove</span>
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        )}
        {/* {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";
// import { BiListPlus } from "react-icons/bi";
// import { MdDeleteForever } from "react-icons/md";
// import { useDispatch } from "react-redux";

// // import {
// //   addToCart,
// //   removeFromCart,
// // } from "../redux/actionCreators/productActions";

// import { useLocation } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   console.log("product__________________", product);
//   return (
//     <div
//       className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
//       key={product._id}
//     >
//       {pathname.includes("cart") && (
//         <div className="bg-indigo-500 text-white p-1 rounded-full w-8 h-8 absolute right-2 text-center">
//           <p>{product.quantity}</p>
//         </div>
//       )}
//       <div className="h-52 w-52 mx-auto">
//         <img src={product.image} alt={product.model} />
//       </div>
//       <h1 className="font-bold text-center">{product.model}</h1>
//       <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
//       <div className=" flex-1">
//         <ul className="space-y-2">
//           {product.keyFeature.map((feature) => {
//             return <li className="text-sm ">{feature}</li>;
//           })}
//         </ul>
//       </div>
//       <div className="flex gap-2 mt-5">
//         {pathname.includes("cart") && (
//           <button
//             className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
//             // onClick={() => dispatch(removeFromCart(product))}
//           >
//             <MdDeleteForever />
//           </button>
//         )}
//         {!pathname.includes("cart") && (
//           <button
//             className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
//             // onClick={() => dispatch(addToCart(product))}
//           >
//             Add to cart
//           </button>
//         )}
//         {!pathname.includes("cart") && (
//           <button
//             title="Add to wishlist"
//             className="bg-indigo-500  py-1 px-2 rounded-full"
//           >
//             <BiListPlus className="text-white" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
