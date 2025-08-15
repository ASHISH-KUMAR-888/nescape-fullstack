const ShimmerFooter = () => {
  return (
    <>
      <div className="min-h-[100px] w-screen bg-[#F2F2F2] px-[20px] py-[60px] flex flex-col gap-[25px] lg:gap-[50px] lg:px-[70px]">
        <div className="flex flex-col gap-y-[20px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:pr-[20px]">
          <div className="w-[100px] h-[50px] bg-[lightgrey] animate-pulse rounded-[8px]"></div>

          <div className="w-[150px] h-[60px] bg-[lightgrey] animate-pulse rounded-[8px]"></div>
        </div>

        <div className="mt-[24px] flex flex-col gap-[15px] lg:flex-row lg:gap-[40px] lg:mt-[0]">
          <div className="w-[50%] h-[50px] bg-[lightgrey] animate-pulse rounded-[8px]"></div>

          <div className="mt-[20px] flex items-center gap-[20px] lg:gap-[30px] lg:mt-[0] lg:mt-[-6px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[lightgrey] animate-bounce"></div>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[lightgrey] animate-bounce"></div>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[lightgrey] animate-bounce"></div>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[lightgrey] animate-bounce"></div>
          </div>
        </div>

        <div className="mt-[30px] flex flex-col justify-between gap-[15px] mt-[10px] lg:flex-row lg:justify-start lg:gap-[50px] lg:mt-[0]">
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px] lg:w-[100px] lg:h-[40px]"></div>
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px]lg:w-[100px] lg:h-[40px]"></div>
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px]lg:w-[100px] lg:h-[40px]"></div>
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px]lg:w-[100px] lg:h-[40px]"></div>
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px]lg:w-[100px] lg:h-[40px]"></div>
          <div className="w-[190px] h-[40px] bg-[lightgrey] animate-pulse rounded-[8px]lg:w-[100px] lg:h-[40px]"></div>
        </div>

        <div className="mt-[5px] w-[90%] h-[50px] bg-[lightgrey] animate-pulse rounded-[8px] lg:w-[70%]"></div>
      </div>
    </>
  );
};

export default ShimmerFooter;
