import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getError,
  getLoad,
  getProducts,
} from "../features/products/productsSlice";
import { useEffect } from "react";
import ShimmerProduct from "../Shimmer/Products/ShimmerProduct";
import { setData } from "../features/wishlist/wishlistSlice";
import { setCart } from "../features/cart/cartSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();

  const reduxSubscribe = useSelector((state) => state.wishlist.wishlist);

  const cartIdData = useSelector((state) => state.cart.cart);

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

    const wishlistId = JSON.parse(localStorage?.getItem("wishlist")) || [];

    dispatch(setData(wishlistId));

    const cartId = JSON.parse(localStorage?.getItem("cart")) || [];

    dispatch(setCart(cartId));
  }, []);

  const productList =
    useSelector((state) => state?.products?.items?.data) || [];

  const DATA = JSON.parse(localStorage.getItem("wishlist")) || [];

  const LOAD = useSelector((state) => state.products.loading);

  const fullData = DATA.map((item) => {
    return productList.find((data) => {
      return data._id === item.id;
    });
  });

  return (
    <>
      {LOAD && fullData.length > 0 ? (
        <ShimmerProduct />
      ) : fullData.length === 0 ? (
        <p className="text-[30px] font-[800] font-mono text-center py-[70px]">
          No Product Found...
        </p>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${import.meta.env.VITE_URL}background.jpg)`,
            }}
          >
            <h2 className="text-[26px] font-mono font-[800] tracking-[1px] text-[hotpink] underline underline-offset-[8px] decoration-wavy text-center mt-[20px] md:text-[40px] md:underline-offset-[10px]">
              WISHLIST PRODUCTS
            </h2>

            <div
              className="w-screen p-[20px] py-[70px] flex justify-center gap-[30px] flex-wrap lg:gap-x-[50px] lg:gap-y-[70px]"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_URL
                }background.jpg)`,
              }}
            >
              {fullData?.map((item) => {
                const lastToggle = cartIdData.some(
                  (data) => data.id === item._id
                );

                return (
                  item !== undefined &&
                  item !== null && (
                    <Product
                      key={item._id}
                      id={item._id}
                      image={item.images[0]}
                      type={item.type}
                      name={item.name}
                      taste={item.taste}
                      heartWishlist={true}
                      lastToggle={lastToggle}
                    />
                  )
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WishlistPage;
