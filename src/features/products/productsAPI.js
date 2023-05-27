import instance from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await instance.get("/product");
  return data.data.data;
};

export const postProduct = async (formData) => {
  await instance.post("/product", formData);
};

export const deleteProduct = async (productId) => {
  await instance.delete(`/product/${productId}`);
};
