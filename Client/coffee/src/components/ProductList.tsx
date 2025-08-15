import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/wishlist/wishlistSlice";
import { setCart } from "../features/cart/cartSlice";

const ProductList = ({ DATA }) => {
  const reduxSubscribe = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const wishlistId = JSON.parse(localStorage.getItem("wishlist")) || [];
    dispatch(setData(wishlistId));

    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(setCart(cartData));
  }, []);

  const cartFullData = useSelector((state) => state.cart.cart);

  return (
    <>
      <div
        className={`w-screen p-[20px] py-[70px] flex justify-center gap-[30px] flex-wrap lg:gap-x-[50px] lg:gap-y-[70px]`}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_URL}background.jpg)`,
        }}
      >
        {DATA.map((item) => {
          const toggle = reduxSubscribe?.some(
            (wishlistId) => wishlistId.id === item._id
          );

          const toggleCart = cartFullData?.some((data) => data.id === item._id);

          return (
            <Product
              key={item._id}
              id={item._id}
              image={item.images[0]}
              type={item.type}
              name={item.name}
              taste={item.taste}
              toggle={toggle}
              toggleCart={toggleCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
