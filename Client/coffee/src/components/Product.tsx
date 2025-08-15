import { Link } from "react-router-dom";
import { wishlist } from "../features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { add } from "../features/cart/cartSlice";

const Product = ({
  id,
  image,
  type,
  name,
  taste,
  heartWishlist,
  toggle,
  toggleCart,
  lastToggle,
}) => {
  const dispatch = useDispatch();

  const cartHandler = useCallback(() => {
    dispatch(add({ id, quantity: 1 }));
  }, []);

  const wishlistHandler = useCallback(() => {
    dispatch(wishlist({ id }));
  }, []);

  return (
    <>
      <div className="relative">
        <i
          className={`fa-solid fa-cart-shopping absolute top-[20px] left-[20px] cursor-pointer text-[22px] hover:text-[#454545] ${
            toggleCart && "text-[red] hover:text-[brown]"
          }  ${lastToggle && "text-[red] hover:text-[brown]"}`}
          onClick={cartHandler}
        ></i>

        <i
          className={`fa-solid fa-heart absolute top-[20px] right-[20px] cursor-pointer text-[22px] hover:text-[#454545] ${
            heartWishlist && "text-[red] hover:text-[brown]"
          }  ${toggle && "text-[red] hover:text-[brown]"}`}
          onClick={wishlistHandler}
        ></i>

        <Link to={`/product-detail/${id}`}>
          <div className="min-h-[100px] w-[280px]  rounded-[8px] bg-[white] shadow-xl">
            <div className=" bg-gradient-to-t from-[transparent,60%] to-[#F3F3F3] rounded-t-[8px] pt-[20px]">
              <img
                className="h-[180px] mx-auto"
                src={`${import.meta.env.VITE_URL}${image}`}
                alt={name}
              />
            </div>

            <div className="px-[16px] py-[16px] flex flex-col justify-between gap-[10px]">
              <p className="text-[#222222] font-[300] text-[14px] tracking-[.5px]">
                {type}
              </p>
              <p className="text-[#222222] font-[800] text-[20px] tracking-[.8px]">
                {name}
              </p>
              <p className="text-[#222222] font-[500] text-[14px] tracking-[.5px]">
                {taste}
              </p>

              <div className="flex items-center gap-[15px] mt-[4px]">
                <p className="text-[#000000] font-[700] text-[16px]">
                  Add to compare
                </p>

                <i className="fa-solid fa-plus text-[#BE4C4B] text-[16px] cursor-pointer"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
