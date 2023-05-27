import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  togglePostSuccess,
} from "../../features/products/productsSlice";
import { toast } from "react-hot-toast";
import { useAddProductMutation } from "../../features/api/apiSlice";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  // const { isLoading, postSuccess, error, isError } = useSelector((state) => state.products)
  // const dispatch = useDispatch();
  const [postProduct, { isLoading, isSuccess }] = useAddProductMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Posting...", { id: addProduct });
    }

    if (isSuccess) {
      toast.success("Product Added", { id: addProduct });
      reset();
    }
  }, [isLoading, isSuccess]);

  const [Img, setImg] = useState();

  console.log("Image", Img);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     toast.loading("Posting...", { id: "addProduct" })
  //   }

  //   if (!isLoading && postSuccess) {
  //     toast.success("Product added", { id: "addProduct" });
  //     dispatch(togglePostSuccess())
  //     reset()
  //   }

  //   if (!isLoading && isError) {
  //     toast.error(error, { id: "addProduct" })
  //   }
  // }, [isLoading, isError, error, postSuccess])

  const submit = async (data) => {
    // const product = {
    //   model: data.model,
    //   rating: data.rating,
    //   // brand: data.brand,
    //   // status: data.status === "true" ? true : false,
    //   price: data.price,
    //   keyFeature: [
    //     data.keyFeature1,
    //     data.keyFeature2,
    //     data.keyFeature3,
    //     data.keyFeature4,
    //   ],
    //   // spec: [],
    // };

    console.log("data", data);

    const formData = new FormData();
    formData.append("Img", Img);
    formData.append("model", data.model);
    formData.append("rating", data.rating);
    formData.append("price", data.price);
    formData.append("keyFeature1", data.keyFeature1);
    formData.append("keyFeature2", data.keyFeature2);
    formData.append("keyFeature3", data.keyFeature3);
    formData.append("keyFeature4", data.keyFeature4);

    // console.log("product", product);
    // dispatch(addProduct(product));
    console.log("addProductInfo", formData);
    postProduct(formData);
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input type="text" id="model" {...register("model")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Price{" "}
          </label>
          <input type="text" id="price" {...register("price")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="rating">
            Rating
          </label>
          <input type="text" id="rating" {...register("rating")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          {/* <input type="text" name="image" id="image" {...register("image")} /> */}

          <input accept="image/*" type="file" onChange={imageChange} />
        </div>

        {/* <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select name="brand" id="brand" {...register("brand")}>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div> */}
        {/* <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            Image
          </label>
          <input type="text" name="price" id="price" {...register("price")} />
        </div> */}

        {/* <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="available"
                value={true}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col w-full max-w-xs"></div> */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            {...register("keyFeature1")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            {...register("keyFeature2")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            {...register("keyFeature3")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            {...register("keyFeature4")}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
