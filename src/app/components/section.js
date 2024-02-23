import Image from "next/image";

const Section = () => {
  return (
    <section className="h-[495px] w-full max-sm:h-[900px] ">
      <div className="flex max-sm:block ">
        <figure className="w-1/2 max-sm:w-full overflow-hidden ">
          <Image
            className="max-sm:w-full transform hover:scale-110 transition-all duration-300 "
            src="/section-img.png"
            alt='section image'
            width={500}
            height={500}
          />
        </figure>

        <article className="w-1/2 max-sm:w-full max-sm:block pt-16 max-sm:pt-0">
          <h2 className="flex max-sm:justify-center text-3xl font-bold text-dumb_black max-sm:mt-7">
            IPDC AT A GLANCE
          </h2>
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
            className="inline-flex mt-11 text-[19.33px] text-pink font-normal  max-sm:ml-8 max-sm:mt-6 "
          >
            Read More
            <Image src="/right arrow.svg" alt="arrow" width={30} height={30} />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Section;