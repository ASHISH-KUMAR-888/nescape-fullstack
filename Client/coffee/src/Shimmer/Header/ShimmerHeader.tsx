const ShimmerHeader = () => {
  return (
    <>
      <div className="h-[60px] w-screen bg-[#F2F2F2] px-[30px] flex justify-between items-center">
        <div className="h-[35px] w-[40px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>

        <div className="w-[100px] h-[40px] mt-[10px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>

        <div className="h-[35px] w-[40px] bg-[lightgrey] rounded-[8px] animate-bounce"></div>
      </div>
    </>
  );
};

export default ShimmerHeader;
