import Image from "next/image";

const header = () => {
  return (
    <>
      <header className=" my-2 flex justify-between items-center max-sm:justify-between max-sm:px-4">
        <a href="#">
          <Image src="/logo.png" alt="logo" width={120} height={120}/>
        </a>
        <nav className=" flex items-center text-12px max-sm:hidden">
          <ul className="px-8">Retail</ul>
          <ul className="px-8">SME</ul>
          <ul className="px-8">Corporate</ul>
          <ul className="px-8">About Us</ul>
          <ul className="px-8">Covid 19</ul>
          <ul className="px-8">Campgains</ul>
        </nav>
        <div className="flex items-center">
          <a href="#" className="px-10 max-sm:px-4">
          <Image src="/Magnifier.svg" alt="search-icon" width={20} height={20}/>

          </a>
          <button className="text-white  bg-pink w-28 h-10 text-12px rounded-md ">
            iSERVICE
          </button>
        </div>
      </header>
    
    </>
  );
};

export default header;
