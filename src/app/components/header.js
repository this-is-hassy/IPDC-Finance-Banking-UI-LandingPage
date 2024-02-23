import Image from "next/image";

const Header = () => {
  return (
    <header className="my-2 flex justify-between items-center max-sm:justify-between max-sm:px-4">
        <a href="#">
          <Image src="/logo.png" alt="logo" width={120} height={120}/>
        </a>
        <nav className="text-12px max-sm:hidden">
          <ul className='flex items-center'>
            <li><a className="px-8" href="#">Retail</a></li>
            <li><a className="px-8" href="#">SME</a></li>
            <li><a className="px-8" href="#">Corporate</a></li>
            <li><a className="px-8" href="#">About Us</a></li>
            <li><a className="px-8" href="#">Covid 19</a></li>
            <li><a className="px-8" href="#">Campgains</a></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <a href="#" className="px-10 max-sm:px-4">
            <Image src="/Magnifier.svg" alt="search-icon" width={20} height={20}/>
          </a>
          <button className="text-white bg-pink w-28 h-10 text-12px rounded-md">
            iSERVICE
          </button>
        </div>
    </header>
  );
};

export default Header;