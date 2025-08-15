import { useRef, useState } from "react";

const ProductDetail = ({ item }) => {
  const images = item?.images || [];

  const [index, setIndex] = useState(0);

  const [mobindex, setMobindex] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);

  const slider = (index: number) => {
    setIndex(index);
  };

  const previous = () => {
    setMobindex((prev) => prev - 1);

    mobindex <= 0 && setMobindex(images.length - 1);
  };

  const next = () => {
    setMobindex((prev) => prev + 1);
    mobindex >= images.length - 1 && setMobindex(0);
  };

  const start = (event) => {
    startX.current = event.touches[0].clientX;
  };

  const end = (event) => {
    endX.current = event.changedTouches[0].clientX;

    const total = startX.current - endX.current;

    setMobindex((prev) => {
      if (total > 50) {
        return prev >= images.length - 1 ? 0 : prev + 1;
      } else if (total < -50) {
        return prev <= 0 ? images.length - 1 : prev - 1;
      }
      return prev;
    });
  };

  return (
    <div
      className="min-h-[100px] w-screen text-[#222222] flex flex-col gap-[30px] pb-[35px] md:flex-row md:gap-[60px]"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_URL}background.jpg)`,
      }}
    >
      <div
        className="min-h-[320px] w-screen pb-[15px] relative flex flex-col justify-center items-center bg-black md:w-[40%] md:bg-[transparent] md:rounded-br-[50px]"
        onTouchStart={start}
        onTouchEnd={end}
      >
        <i
          className="fa-solid fa-angle-left text-[white] text-[28px] absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer md:hidden!"
          onClick={previous}
        ></i>
        <i
          className="fa-solid fa-angle-right text-[white] text-[28px] absolute top-[50%] right-[20px] translate-y-[-50%] cursor-pointer md:hidden!"
          onClick={next}
        ></i>

        <img
          className="h-full block md:hidden"
          src={`${import.meta.env.VITE_URL}${images[mobindex]}`}
          alt="product"
        />

        <img
          className="h-full hidden md:block"
          src={`${import.meta.env.VITE_URL}${images[index]}`}
          alt="product"
        />

        <div className="flex justify-center items-center gap-[7px] md:hidden">
          {images?.map((d: string, i: number) => {
            return (
              <div
                key={i}
                className={`h-[15px] w-[15px] rounded-[50%] border-[1px] border-white ${
                  i === mobindex && "bg-gradient-to-b from-[pink] to-[purple]"
                }`}
              ></div>
            );
          })}
        </div>

        <div className="hidden md:block md:flex md:justify-center md:items-center md:gap-[10px]">
          {images?.map((d: string, i: number) => {
            return (
              <img
                key={i}
                className={`h-[50px] w-[50px] cursor-pointer rounded-[10px] ${
                  i === index && "border-[2.5px] border-black"
                } `}
                src={`${import.meta.env.VITE_URL}${d}`}
                alt="Slides"
                onClick={() => slider(i)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-[5px] pl-[40px] pr-[20px] md:w-[60%]">
        <p className="font-[300] text-[14px] tracking-[1px]">{item?.type}</p>

        <p className="font-[600] text-[35px] tracking-[1.4px] leading-[40px]">
          {item?.name}
        </p>

        <div className="flex justify-start items-center gap-[25px] mt-[15px]">
          <div>
            <i className="fa-solid fa-star text-[#DCA3A2]"></i>
            <i className="fa-solid fa-star text-[#DCA3A2]"></i>
            <i className="fa-solid fa-star text-[#DCA3A2]"></i>
            <i className="fa-solid fa-star text-[#DCA3A2]"></i>
            <i className="fa-solid fa-star text-[#DCA3A2]"></i>
          </div>
          <p className="font-[300] text-[15px] tracking-[.8px] underline underline-offset-[5px] cursor-pointer mt-[-5px]">
            Write a review
          </p>
        </div>

        <p className="font-[300] tracking-[1px] leading-[24px] text-[17px] mt-[15px]">
          {item?.description}
        </p>

        <div className="mt-[20px] flex flex-col gap-[10px] mt-[15px]">
          <p className="font-[500] tracking-[.3px] leading-[23px] text-[15px]">
            Package size and format
          </p>

          <div className="w-full h-[40px] rounded-[10px] px-[20px] bg-[#F1EDE9] flex justify-between items-center  md:w-[340px] md:px-[30px]">
            <div>
              {item?.size?.name && (
                <p className="font-[500] text-[15px]"> {item.size.name} </p>
              )}
            </div>

            <div className="h-[70%] w-[2px] bg-[#CCCCCC] rounded-[8px]"></div>

            {item?.size?.amount?.map((data: string, i: number) => {
              return (
                <p key={i} className="font-[300] text-[15px]">
                  {data}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-[10px] mt-[15px]">
          <p className="font-[300] text-[17px] underline underline-offset-[5px] cursor-pointer">
            Recycling
          </p>

          <p className="font-[300] text-[17px] underline underline-offset-[5px] cursor-pointer">
            Ingredients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
