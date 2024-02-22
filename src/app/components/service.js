import Image from "next/image";
import React from "react";

const service = () => {
  return (
    <>
      <div className="w-full h-screen max-sm:h-full  bg-rose-50">
        <h3 className="flex justify-center font-bold text-dumb_black text-36px pt-12">
          Our Services
        </h3>
        <p className="flex justify-center max-sm:ml-5 max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          
        >
          <div className="grid grid-cols-4 gap-32 mx-20 pt-16 max-sm:grid-cols-1 max-sm:gap-20  ">
            <div className="overflow-hidden  rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300"
                src="/service-1.png"
                width={500}
                height={500}
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC SAVING SCHEMES
                <img src="/Arrow Circle Right.svg" alt="save" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300 "
                src="/service-2.png"
                width={500}
                height={500}
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC Personal loan
                <img src="/Arrow Circle Right.svg" alt="Pers loan" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300 "
                src="/service-3.png"
                width={500}
                height={500}
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC Deposit schemes
                <img src="/Arrow Circle Right.svg" alt="deposit" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300"
                src="/service-4.png"
                width={500}
                height={500}
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC auto loan
                <img src="/Arrow Circle Right.svg" alt="auto loan" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default service;
