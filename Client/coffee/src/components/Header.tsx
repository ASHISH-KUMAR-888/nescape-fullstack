import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <>
      <div className="h-[60px] w-screen bg-[#302216] pr-[38px] relative flex justify-end items-center">
        <img
          className="w-[100px] mb-[10px] absolute left-[50%] transform translate-x-[-50%]"
          src={`${import.meta.env.VITE_URL}${logo}`}
          alt="Logo"
        />

        <div className=" flex justify-center items-center gap-[15px] md:gap-[25px]">
          <Link to="/cart">
            <i
              className="fa-solid fa-cart-shopping text-white text-[25px] cursor-pointer hover:text-cyan-100"
              title="Shopping Cart"
            ></i>
          </Link>

          <Link to="/wishlist">
            <i
              className="fa-solid fa-heart text-[25px] text-[red] hover:text-red-400  cursor-pointer"
              title="Wishlist"
            ></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
