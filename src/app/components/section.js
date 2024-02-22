import Image from "next/image";
import React from "react";

const section = () => {
  return (
    <>
      <div className="h-[495px] w-full max-sm:h-[900px] ">
        <div className="flex max-sm:block ">
          <div className="w-1/2 max-sm:w-full overflow-hidden ">
            <Image
              className="max-sm:w-full transform hover:scale-110 transition-all duration-300 "
              src="/section-img.png"
              width={500}
              height={500}
            ></Image>
          </div>

          <div className="w-1/2 max-sm:w-full max-sm:block pt-16 max-sm:pt-0">
            <h4 className="text-36px font-bold text-dumb_black  max-sm:ml-8 max-sm:mt-7">
              IPDC AT A GLANCE
            </h4>
            <p className="w-2/3 font-normal text-16px text-dark_grey mt-4 max-sm:justify-center max-sm:w-4/5 max-sm:ml-8 text-justify">
              IPDC Finance Limited (previously known as "Industrial Promotion
              and Development Company of Bangladesh Limited") is the first
              private sector financial institution of the country established in
              1981 by a distinguished group of shareholders namely International
              Finance Corporation (IFC), USA, German Investment and Development
              Company (DEG), Germany, The Aga Khan Fund for Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and the Government of Bangladesh.
            </p>
            <a
              href="#"
              className="inline-flex mt-11 text-[19.33px] text-pink font-normal  max-sm:ml-8 max-sm:mt-10 "
            >
              Read More
              <img src="/right arrow.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default section;
