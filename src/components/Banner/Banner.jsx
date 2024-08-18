import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-banner w-full lg:h-[550px] ">
      <section className="text-gray-600 body-font w-full  flex">
        <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <div className="lg:w-2/3 w-full text-center">
            {/* <!-- Change the heading text --> */}
            <h1 className="lg:text-6xl sm:text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
              Discover an exceptional cooking class tailored for you!
            </h1>

            {/* <!-- Change the paragraph text --> */}
            <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            {/* <!-- Update the button texts and links --> */}
            <a
              className="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4  md:inline"
              href="#contact-form"
            >
              Explore Now
            </a>
            <a
              className="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto  md:inline"
              href="#about-me"
            >
              our Feedback
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
