import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductOneLoad,
  getProductOne,
  getProductOneError,
} from "../features/products/productOneSlice";
import ShimmerDetailProducts from "../Shimmer/Products/ShimmerDetailProducts";

const ProductDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "api/call",
      payload: {
        url: `/products/${id}`,
        method: "get",
        data: {},
        onStart: getProductOneLoad.type,
        onSuccess: getProductOne.type,
        onError: getProductOneError.type,
      },
    });

    scrollTo(0, 0);
  }, []);

  const loading = useSelector((state) => state.product.loading);

  const product = useSelector((state) => state.product.product.data);

  return (
    <>
      {loading ? <ShimmerDetailProducts /> : <ProductDetail item={product} />}
    </>
  );
};

export default ProductDetailPage;
