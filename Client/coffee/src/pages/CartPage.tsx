import { useEffect } from "react";
import Cart from "../components/Cart";
import { setCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getError,
  getLoad,
  getProducts,
} from "../features/products/productsSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
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

    const data = JSON.parse(localStorage.getItem("cart"));

    dispatch(setCart(data));
  }, []);

  const productList = useSelector((state) => state.products.items.data) || [];

  const cartItems = useSelector((state) => state.cart.cart);

  const mainData = cartItems?.map((item) => {
    let temp = productList.find((data) => {
      return data._id === item.id;
    });

    if (temp) {
      temp = { ...temp, quantity: item.quantity };
    }

    return temp;
  });

  return (
    <>
      <div className="bg-black py-[45px]">
        <h2 className="text-[24px] text-center font-mono font-[900] tracking-[1px] text-[#D2B071] mb-[50px] underline underline-offset-[10px] decoration-wavy">
          Cart Products
        </h2>

        {cartItems?.length > 0 ? (
          <div className="w-screen bg-black flex flex-col gap-[30px]!">
            {mainData.map((item) => {
              const value = mainData.every((a) => a === undefined) || false;

              return (
                !value && (
                  <Cart
                    key={item._id}
                    id={item._id}
                    quantity={item.quantity}
                    image={item.images[0]}
                    name={item.name}
                  />
                )
              );
            })}
          </div>
        ) : (
          <p className="text-[24px] text-center font-mono font-[900] tracking-[1px] text-[#D2B071] mb-[50px]">
            No Products Found...
          </p>
        )}

        <div className="min-h-[100px] w-fit bg-black px-[15px] py-[18px] mx-auto mt-[80px]">
          <p className="text-[#D2B071] font-[800] text-[17px] tracking-[.8px]">
            Add Order Note
          </p>

          <p className="text-[#89734A] font-[500] text-[15px] tracking-[1.2px] mt-[4px]">
            Taxes and shipping calculated at checkout
          </p>

          <Link to="https://buy.stripe.com/test_00w9AV1tpa3qg8LdeWbQY03">
            <button className="h-[60px] w-[320px] mt-[30px] bg-[#D2B071] rounded-[10px] cursor-pointer">
              <div className="flex justify-center items-center gap-[10px]">
                <p className="text-black font-[700] whitespace-nowrap tracking-[.9px]">
                  PLACE ORDER Rs.{123}
                </p>
                <img src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
                <i className="fa-solid fa-angle-right text-black font-[900]"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
