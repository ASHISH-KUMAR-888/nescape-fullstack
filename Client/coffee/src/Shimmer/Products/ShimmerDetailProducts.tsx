const ShimmerDetailProducts = () => {
  return (
    <>
      <div className="min-h-[100px] w-screen py-[50px] bg-[#F2F2F2] flex flex-col gap-[30px] pb-[35px] md:flex-row md:gap-[60px] md:py-[100px]" style={{backgroundImage: `url(${import.meta.env.VITE_URL}background.jpg)`}}>
        <div className="min-h-[320px] w-screen gap-[20px] pb-[15px] relative flex flex-col justify-center items-center bg-[#F2F2F2] md:w-[40%] md:rounded-br-[50px]">
          <i className="fa-solid fa-angle-left text-[lightgrey] animate-bounce text-[28px] absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer md:hidden!"></i>
          <i className="fa-solid fa-angle-right animate-bounce text-[lightgrey] text-[28px] absolute top-[50%] right-[20px] translate-y-[-50%] cursor-pointer md:hidden!"></i>

          <div className="h-[390px] w-[80%] rounded-[8px] animate-pulse bg-[lightgrey] block md:hidden"></div>
          <div className="h-full w-[80%] rounded-[8px] animate-pulse bg-[lightgrey] hidden md:block"></div>

          <div className="flex justify-center items-center gap-[7px] md:hidden">
            <div className="h-[15px] w-[15px] animate-bounce rounded-[50%] bg-[lightgrey]"></div>
            <div className="h-[15px] w-[15px] animate-bounce rounded-[50%] bg-[lightgrey]"></div>
            <div className="h-[15px] w-[15px] animate-bounce rounded-[50%] bg-[lightgrey]"></div>
            <div className="h-[15px] w-[15px] animate-bounce rounded-[50%] bg-[lightgrey]"></div>
          </div>

          <div className="hidden md:block md:flex md:justify-center md:items-center md:gap-[10px]">
            <div className="h-[50px] w-[50px] animate-bounce cursor-pointer bg-[lightgrey] rounded-[10px]"></div>
            <div className="h-[50px] w-[50px] animate-bounce cursor-pointer bg-[lightgrey] rounded-[10px]"></div>
            <div className="h-[50px] w-[50px] animate-bounce cursor-pointer bg-[lightgrey] rounded-[10px]"></div>
            <div className="h-[50px] w-[50px] animate-bounce cursor-pointer bg-[lightgrey] rounded-[10px]"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-[20px] pl-[40px] pr-[20px] md:w-[60%]">
          <div className="h-[30px] w-[300px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>
          <div className="h-[30px] w-[150px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>

          <div className="flex justify-start items-center gap-[25px] mt-[15px]">
            <div>
              <i className="fa-solid fa-star animate-bounce text-[lightgrey]"></i>
              <i className="fa-solid fa-star animate-bounce text-[lightgrey]"></i>
              <i className="fa-solid fa-star animate-bounce text-[lightgrey]"></i>
              <i className="fa-solid fa-star animate-bounce text-[lightgrey]"></i>
              <i className="fa-solid fa-star animate-bounce text-[lightgrey]"></i>
            </div>

            <div className="h-[30px] w-[100px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>
          </div>

          <div className="h-[30px] w-[60%] rounded-[8px] bg-[lightgrey] mt-[15px] animate-pulse"></div>

          <div className="mt-[20px] flex flex-col gap-[10px] mt-[15px]">
            <div className="h-[30px] w-[150px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>

            <div className="w-[230px] h-[40px] rounded-[10px] px-[20px] bg-[#F2F2F2] flex justify-between items-center">
              <div className="h-[30px] w-[50px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>

              <div className="h-[70%] w-[2px] bg-[#CCCCCC] rounded-[8px] animate-pulse"></div>

              <div className="h-[30px] w-[70px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[10px] mt-[15px]">
            <div className="h-[30px] w-[100px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>
            <div className="h-[30px] w-[100px] rounded-[8px] bg-[lightgrey] animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerDetailProducts;
