import Image from "next/image";

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
                <Image src="/partner-1.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-2.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-3.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-4.png" width={200} height={200}></Image>
              </li>
            </ul>
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <li>
                <Image src="/partner-1.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-2.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-3.png" width={200} height={200}></Image>
              </li>
              <li>
                <Image src="/partner-4.png" width={200} height={200}></Image>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 flex justify-center items-baseline">
          <Image className="pl-4" src="/Ellipse 2.svg" alt="page2" width={30} height={30}/>
          <Image className="pl-4" src="/Ellipse 3.svg" alt="page3" width={30} height={30}/>
          <Image className="pl-4" src="/Ellipse 4.svg" alt="page4" width={30} height={30}/>
        </div>
      </div>
    </>
  );
};

export default partner;
