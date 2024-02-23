import Image from "next/image";

const feedback = () => {
  return (
    <>
      <section className="h-min-screen w-full ">
        <div data-aos="zoom-in-down">
          <header className="pt-24 font-bold text-36px flex justify-center text-dumb_black ml-4 max-sm:text-30px max-sm:ml-0 max-sm:pt-10">
            <h2>Customer Experience</h2>
          </header>
          <p className="flex justify-center mt-2 font-normal text-light_gray text-16px  max-sm:px-4 max-sm:w-full text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            laborum
          </p>

          <article className="mt-8 grid grid-cols-4 gap-4 ml-32 max-sm:grid-cols-2  max-sm:ml-4 max-sm:mr-4 max-sm:gap-8">
            <div>
              <Image src="/Circle Layer.svg" alt="int" width={40} height={40} />
              <h3 className="text-low_black font-bold text-22px">Integrity</h3>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>
            <div>
              <Image src="/Scenery.svg" alt="Demon" width={40} height={40} />
              <h6 className="text-low_black font-bold text-22px">
                Demonstrate
              </h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Demonstrating a strong Will to Win in the market place
              </p>
            </div>

            <div className="max-sm:hidden">
              <Image
                src="/Object Ungroup.svg"
                alt="Divers"
                width={40}
                height={40}
              />
              <h6 className="text-low_black font-bold text-22px">Diversity</h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Promoting Diversity in the work place and community
              </p>
            </div>

            <div>
              <Image src="/User Arrows.svg" alt="Team" width={40} height={40} />
              <h6 className="text-low_black font-bold text-22px">Teamwork</h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                semper aenean id pen
              </p>
            </div>

            <div>
              <Image
                src="/Object Ungroup.svg"
                alt="Collab"
                width={40}
                height={40}
              />
              <h6 className="text-low_black font-bold text-22px">
                Collaboration
              </h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>

            <div>
              <Image src="/Rocket.svg" alt="Tech" width={40} height={40} />
              <h6 className="text-low_black font-bold text-22px">Technology</h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>

            <div className="max-sm:hidden">
              <Image src="/Bag.svg" alt="Corp" width={40} height={40} />
              <h6 className="text-low_black font-bold text-22px">Corporate</h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>

            <div>
              <Image src="/Cube.svg" alt="Digital" width={40} height={40} />
              <h6 className="text-low_black font-bold text-22px">Digital</h6>
              <p className="text-light_gray text-14px font-normal md:w-1/2">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>
          </article>
        </div>
      </section>
      ;
    </>
  );
};

export default feedback;
