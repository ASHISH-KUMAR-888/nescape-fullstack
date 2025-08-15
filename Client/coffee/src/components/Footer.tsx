const Footer = ({ DATA, logo }) => {
  return (
    <>
      <div className="min-h-[100px] w-screen bg-[#302216] px-[20px] py-[60px] text-white flex flex-col gap-[25px] lg:gap-[50px] lg:px-[70px]">
        <div className="lg:flex lg:justify-between lg:items-center lg:pr-[20px]">
          <img
            className="w-[100px] mb-[16px]"
            src={`${import.meta.env.VITE_URL}${logo}`}
            alt="Logo"
          />

          <div className="flex items-center gap-[7px] lg:mt-[-7.9px]">
            <i className="fa-solid fa-location-dot text-[22px]"></i>
            <p className="underline underline-offset-[7px] text-[17.5px] mt-[-3px] tracking-[.8px] font-[500]">
              Global (English)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[40px]">
          <p className="text-[15px] font-[300] leading-[19px] tracking-[.5px] lg:text-[18px]">
            Follow NESCAFÉ® Global on social media for even more delicious
            coffee content.
          </p>

          <div className="flex items-center gap-[20px] lg:gap-[30px] lg:mt-[-6px]">
            <i className="fa-brands fa-facebook text-[22px] lg:text-[24px]"></i>
            <i className="fa-brands fa-youtube text-[22px] lg:text-[24px]"></i>
            <i className="fa-brands fa-instagram text-[22px] lg:text-[24px]"></i>
            <i className="fa-brands fa-twitter text-[22px] lg:text-[24px]"></i>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[15px] mt-[10px] lg:flex-row lg:justify-start lg:gap-[50px]">
          {DATA.length > 0 &&
            DATA.map((anchor) => {
              return (
                <a
                  key={anchor._id}
                  className="font-[500] underline underline-offset-[6px] decoration-wavy tracking-[2px] leading-[32px]"
                  href="#"
                >
                  {anchor.anchor}
                </a>
              );
            })}
        </div>

        <p className="mt-[5px] font-[300] text-[13px] tracking-[2px] lg:text-[16px]">
          NESCAFÉ®, NESCAFÉ® Dolce Gusto® and Nespresso® are registered
          trademarks of Société de Produits Nestlé S.A.
        </p>
      </div>
    </>
  );
};

export default Footer;
