import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="h-[250px] max-sm:h-[80px] w-full">
        <div className="grid grid-cols-5 gap-16 mt-12 max-sm:mt-8 max-sm:grid-cols-1">
          <section>
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
          </section>
          <nav>
            <h6 className=" max-sm:hidden">
            Products
            </h6>
            <ul>
              <li><a href="#">CSR Activities</a></li>
              <li><a href="#">Green Banking</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Ongoing Campgain</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </nav>
          <nav>
            <h6>Get Started</h6>
            <ul>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Government Securities</a></li>
              <li><a href="#">Examples</a></li>
              <li><a href="#">NIS</a></li>
            </ul>
          </nav>
          <nav>
            <h6>About</h6>
            <ul>
              <li><a href="#">IPDC at a Glance</a></li>
              <li><a href="#">Mission, Vision & Values</a></li>
              <li><a href="#">Corporate Governance</a></li>
              <li><a href="#">Shareholders</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </nav>
          <div>
            <a href="#" className="flex items-center pl-4">
              <Image src="/call.svg" alt="" className="pr-2" width={40} height={40}/>
              16519
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;