import Products from "./Products";

const ShimmerProduct = () => {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <div className="w-screen p-[20px] py-[70px] flex justify-center gap-[30px] flex-wrap lg:gap-x-[50px] lg:gap-y-[70px]" style={{backgroundImage: `url(${import.meta.env.VITE_URL}background.jpg)`}}>
        {DATA.map((item, index) => {
          return <Products key={index} />;
        })}
      </div>
    </>
  );
};

export default ShimmerProduct;
