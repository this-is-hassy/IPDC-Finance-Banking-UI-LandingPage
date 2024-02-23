import Image from "next/image";

const service = () => {
  return (
    <main className="w-full h-screen max-sm:h-min  bg-rose-50">
        <header>
          <h1 className="flex justify-center font-bold text-dumb_black text-36px pt-12">
            Our Services
          </h1>
          <p className="flex justify-center max-sm:px-4 max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
            mattis vel feugiat erat tortor eleifend.
          </p>
        </header>
        <section
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
        >
          <div className="grid grid-cols-4 gap-32 mx-20 pt-16 max-sm:grid-cols-1 max-sm:gap-12 max-sm:mx-12  ">
            <article className="overflow-hidden  rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300"
                src="/service-1.png"
                width={500}
                height={500}
                alt="ser-1"
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC SAVING SCHEMES
                <Image
                  src="/Arrow Circle Right.svg"
                  alt="save"
                  width={50}
                  height={50}
                />
              </a>
            </article>
            <article className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300 "
                src="/service-2.png"
                width={500}
                height={500}
                alt="ser-2"
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC Personal loan
                <Image
                  src="/Arrow Circle Right.svg"
                  alt="Pers loan"
                  width={50}
                  height={50}
                />
              </a>
            </article>
            <article className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300 "
                src="/service-3.png"
                width={500}
                height={500}
                alt="ser-3"
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 text-dumb_black font-semibold text-22px"
              >
                IPDC Deposit schemes
                <Image
                  src="/Arrow Circle Right.svg"
                  alt="deposit"
                  width={50}
                  height={50}
                />
              </a>
            </article>
            <article className="overflow-hidden rounded-lg">
              <Image
                className="transform hover:scale-110 transition-all duration-300"
                src="/service-4.png"
                width={500}
                height={500}
                alt="ser-4"
              ></Image>
              <a
                href="#"
                className="flex justify-between pt-5 max-sm:pb-5 text-dumb_black font-semibold text-22px"
              >
                IPDC Finance auto loan
                <Image
                  src="/Arrow Circle Right.svg"
                  alt="auto loan"
                  width={50}
                  height={50}
                />
              </a>
            </article>
          </div>
        </section>
    </main>
  );
};

export default service;