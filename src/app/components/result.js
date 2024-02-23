const Result = () => {
  return (
    <main className="h-min w-full">
        <section className="pb-8">
          <h1 className="flex justify-center text-36px font-semibold text-dumb_black pt-10 max-sm:text-22px ">
            Our best results for the year
          </h1>
          <p className="flex justify-center text-16px font-normal text-dark_grey max-sm:px-4 max-sm:mt-4 max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus matti eleifend.
          </p>
          <article data-aos="flip-down">
            <div className="grid grid-cols-4 gap-28 mt-12 max-sm:grid-cols-2 max-sm:gap-12 max-sm:mt-10  max-sm:px-6">
              <div className="text-pink text-40px font-bold">
                57.6 bn
                <p className="text-dark_grey text-16px font-normal">
                  LOAN PORTFOLIO
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                0.95%
                <p className="text-dark_grey text-16px font-normal">
                  CLASSIFIED LOAN PORTFOLIO
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                388.5%
                <p className="text-dark_grey text-16px font-normal">
                  CLASSIFIED LOAN PORTFOLIO
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                50.4 bn
                <p className="text-dark_grey text-16px font-normal">
                  Deposit
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                6.1 bn
                <p className="text-dark_grey text-16px font-normal">
                  SHAREHOLDERS EQUITY
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                18.51%
                <p className="text-dark_grey text-16px font-normal">
                  CAPITAL ADEQUACY RATIO
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                8.5 bn
                <p className="text-dark_grey text-16px font-normal">
                  MARKET CAPITALIZATION
                </p>
              </div>
              <div className="text-low_black text-40px font-bold">
                AAA
                <p className="text-dark_grey text-16px font-normal">
                  CREDIT RATING
                </p>
              </div>
            </div>
          </article>
        </section>
    </main>
  );
};

export default Result;