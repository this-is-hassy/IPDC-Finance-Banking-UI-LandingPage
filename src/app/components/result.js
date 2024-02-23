import React from "react";

const result = () => {
  return (
    <>
      <div className="h-min w-full">
        <div className="max-sm:pb-8">
          <h4 className="flex justify-center text-36px font-semibold text-dumb_black pt-10 max-sm:text-22px ">
            0ur best results for the year
          </h4>
          <p className="flex justify-center text-16px font-normal text-dark_grey max-sm:px-4 max-sm:mt-4 max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus matti eleifend.
          </p>
          <div data-aos="flip-down">
            <div className="grid grid-cols-4 gap-28 mt-12 max-sm:grid-cols-2 max-sm:gap-12 max-sm:mt-10  max-sm:px-6">
              <div className="text-pink text-40px font-bold">
                57.6 bn
                <div className="text-dark_grey text-16px font-normal">
                  LOAN PORTFOLIO
                </div>
              </div>

              <div className="text-low_black text-40px font-bold">
                0.95%
                <div className="text-dark_grey text-16px font-normal">
                  CLASSIFIED LOAN PORTFOLIO
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                388.5%
                <div className="text-dark_grey text-16px font-normal">
                  CLASSIFIED LOAN PORTFOLIO
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                50.4 bn
                <div className="text-dark_grey text-16px font-normal">
                  Deposit
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                6.1 bn
                <div className="text-dark_grey text-16px font-normal">
                  SHAREHOLDERS EQUITY
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                18.51%
                <div className="text-dark_grey text-16px font-normal">
                  CAPITAL ADEQUACY RATIO
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                8.5 bn
                <div className="text-dark_grey text-16px font-normal">
                  MARKET CAPITALIZATION
                </div>
              </div>
              <div className="text-low_black text-40px font-bold">
                AAA
                <div className="text-dark_grey text-16px font-normal">
                  CREDIT RATING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default result;
