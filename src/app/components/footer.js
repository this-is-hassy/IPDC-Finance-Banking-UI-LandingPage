import Image from "next/image";

const footer = () => {
  return (
    <>
      <div className="h-[250px] max-sm:h-[80px] w-full">
        <div className="grid grid-cols-5 gap-16 mt-12 max-sm:mt-8 max-sm:grid-cols-1">
          <div className="">
            <h5 className="text-black max-sm:flex max-sm:justify-center ">
            About the company
            </h5>
            <p className="text-14px text-dark_grey mt-4 max-sm:hidden">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch
            </p>
            <div className="max-sm:flex max-sm:justify-center">
              <div className="flex justify-center mt-12 -ml-14 max-sm:mt-2 max-sm:-ml-0">
                <a href="#" className="mx-2">
                  <Image src="/facebook.svg" alt="fb" width={25} height={25}/>
                </a>
                <a href="#" className="mx-2">
                  <Image src="/youtube.svg" alt="yt" width={25} height={25}/>
                </a>
                <a href="#" className="mx-2">
                  <Image src="/linkedin.svg" alt="ld" width={25} height={25}/>
                </a>
                <a href="#" className="mx-2">
                  <Image src="/instagram.svg" alt="insta" width={25} height={25}/>
                </a>
              </div>
            </div>
          </div>
          <h6 className=" max-sm:hidden">
            Products
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">CSR Activities</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Green Banking</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">News</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Ongoing Campgain</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Updates</a>
            </p>
          </h6>
          <div className=" max-sm:hidden">
            Get Started
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Career</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Contact Us</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Government Securities</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Examples</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">NIS</a>
            </p>
          </div>
          <div className=" max-sm:hidden">
            About
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">IPDC at a Glance</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Mission, Vision & Values</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Corporate Governance</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Shareholders</a>
            </p>
            <p className="text-14px text-dark_grey mt-4">
              <a href="#">Investor Relations</a>
            </p>
          </div>
          <div className=" max-sm:hidden">
            <a href="#" className="flex items-center pl-4">
              <Image src="/call.svg" alt="" className="pr-2" width={40} height={40}/>
              16519
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
