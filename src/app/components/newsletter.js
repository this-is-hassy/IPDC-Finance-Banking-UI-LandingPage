import React from "react";

const newsletter = () => {
  return (
    <>
      <div className="bg-rose-50 h-[350px] max-sm:h-[300px] w-full">
        <h5 className="font-bold text-36px text-dumb_black pt-10 flex justify-center">
          Newsletter
        </h5>
        <p className="flex justify-center text-16px font-normal text-light_gray mt-4 max-sm:px-4 max-sm:mt-2 max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>
        <div className="flex justify-center mt-20 max-sm:mt-14 max-sm:px-10">
        <input type="" placeholder="Your email" className="border-2 border-zinc-200 rounded-sm w-72 max-sm:w-48 h-11 pl-4" />
        <button className="text-white  bg-pink px-5 py-[10px] text-12px rounded-sm ml-4">
          SUBSCRIBE
        </button>
        </div>
      </div>
    </>
  );
};

export default newsletter;
