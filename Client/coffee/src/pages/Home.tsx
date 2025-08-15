import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getError,
  getLoad,
  getProducts,
} from "../features/products/productsSlice";
import ProductList from "../components/ProductList";
import ShimmerProduct from "../Shimmer/Products/ShimmerProduct";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "api/call",
      payload: {
        url: "/products",
        method: "get",
        data: {},
        onStart: getLoad.type,
        onSuccess: getProducts.type,
        onError: getError.type,
      },
    });
  }, []);

  const DATA = useSelector((state) => state.products.items.data) || [];
  const LOAD = useSelector((state) => state.products.loading);

  return <>{LOAD ? <ShimmerProduct /> : <ProductList DATA={DATA} />}</>;
};

export default Home;
