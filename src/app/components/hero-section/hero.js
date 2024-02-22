import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const hero = () => {
  return (
    <>
      <div className={styles.spacing}>
        <div className="flex justify-start w-1/2 max-sm:w-full max-sm:h-screen max-sm:px-4">
          <div data-aos="fade-right" className="items-center">
            <div
              data-aos="zoom-out"
              className="md:hidden 
            lg:hidden xl:hidden 2xl:hidden"
            >
              <button className=" absolute text-dumb_black  bg-white px-6 py-4 text-12px rounded-[50px] top-16  right-10 shadow-xl font-bold">
                <img className="inline-flex pr-3" src="/car.svg" alt="car" />
                CAR LOAN
              </button>

              <button className="absolute text-dumb_black  bg-white px-6 py-4 text-12px rounded-[50px] top-[585px] right-10 shadow-xl font-bold">
                <img className="inline-flex pr-3" src="/House.png" alt="home" />
                HOME LOAN
              </button>
            </div>

            <h1 className="text-6xl text-black font-extrabold font-sans mt-24 w-4/5 max-sm:mt-44 max-sm:w-full">
              Chase Your Dream with us
            </h1>
            <p className="text-16px font-medium text-dark_grey mt-6 w-2/3  ">
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>

            <button className="text-white  bg-pink px-5 py-[10px] text-12px rounded-md mt-10">
              APPLY ONLINE
            </button>
            <button className="border-2 border-pink  text-pink px-5 py-2 text-12px rounded-md ml-6">
              LOAN CALCULATOR
            </button>

            <div className="absolute -bottom-8 max-sm:bottom-28">
              <div className="flex items-center ">
                <a href="#" className="flex items-center mr-6">
                  <img src="/call.svg" alt="contact" />
                  <p className="text-black font-bold pl-2">16519</p>
                </a>
                <a href="#" className="mx-2">
                  <img src="/facebook.svg" alt="fb" />
                </a>
                <a href="#" className="mx-2">
                  <img src="/youtube.svg" alt="yt" />
                </a>
                <a href="#" className="mx-2">
                  <img src="/linkedin.svg" alt="ld" />
                </a>
                <a href="#" className="mx-2">
                  <img src="/instagram.svg" alt="insta" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-1/2 bg-rose-100 rounded-md max-sm:hidden">
          <Image
            data-aos="fade-left"
            src="/hero-right-image.png"
            width={700}
            height={500}
            className="absolute -bottom-2 mt-2 right-20 "
          ></Image>
          <button
            data-aos="zoom-in"
            className="absolute text-dumb_black  bg-white px-6 py-4 text-12px rounded-[50px] mt-32 mr-16 shadow-xl font-bold "
          >
            <img className="inline-flex pr-3" src="/House.png" alt="" />
            HOME LOAN
          </button>
          <button
            data-aos="zoom-in"
            className="absolute text-dumb_black  bg-white px-6 py-4 text-12px rounded-[50px] mt-16 mr-[500px] shadow-xl font-bold "
          >
            <img className="inline-flex pr-3" src="/car.svg" alt="" />
            CAR LOAN
          </button>
          <img
            className="absolute right-16 bottom-56"
            src="/Ellipse 1.svg"
            alt="page1"
          />
          <div className="absolute right-28 bottom-52">
            <img className="pt-4" src="/Ellipse 2.svg" alt="page2" />
            <img className="pt-4" src="/Ellipse 3.svg" alt="page3" />
            <img className="pt-4" src="/Ellipse 4.svg" alt="page4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
