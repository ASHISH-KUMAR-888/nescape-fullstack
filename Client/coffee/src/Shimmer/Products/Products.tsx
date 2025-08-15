const Products = () => {
  return (
    <>
      <div className="h-[390px] w-[280px]  rounded-[8px] bg-[white] shadow-xl flex flex-col justify-between pl-[26px] py-[20px]">
        <div className="w-[90%] h-[220px] bg-[lightgrey] rounded-[8px] animate-pulse"></div>
        <div className="w-[90%] h-[22px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>
        <div className="w-[80%] h-[22px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>
        <div className="w-[70%] h-[22px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>
      </div>
    </>
  );
};

export default Products;
