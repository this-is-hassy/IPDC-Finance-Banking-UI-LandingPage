import React from "react";

const partner = () => {
  return (
    <>
      <div className="bg-rose-50 w-full h-[449px]  max-sm:h-[370px] mt-10">
        <div data-aos="flip-up">
          <h3 className="pt-16  text-2xl text-dumb_black font-normal flex justify-center">
            BUSINESS PARTNERS
          </h3>

          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            class="w-full pt-24 max-sm:pt-12 px-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img src="./partner-1.png" alt="client-Img1" />
              </li>
              <li>
                <img src="./partner-2.png" alt="client-Img2" />
              </li>
              <li>
                <img src="./partner-3.png" alt="client-Img3" />
              </li>
              <li>
                <img src="./partner-4.png" alt="client-Img4" />
              </li>
            </ul>
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <li>
                <img src="./partner-1.png" alt="client-Img1" />
              </li>
              <li>
                <img src="./partner-2.png" alt="client-Img2" />
              </li>
              <li>
                <img src="./partner-3.png" alt="client-Img3" />
              </li>
              <li>
                <img src="./partner-4.png" alt="client-Img4" />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 flex justify-center items-baseline">
          <img className="pl-4" src="/Ellipse 2.svg" alt="page2" />
          <img className="pl-4" src="/Ellipse 3.svg" alt="page3" />
          <img className="pl-4" src="/Ellipse 4.svg" alt="page4" />
        </div>
      </div>
    </>
  );
};

export default partner;
