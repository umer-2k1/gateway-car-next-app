"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <h1 className="text-blue-400">Hero components</h1>
      {/* #55A6FF */}
      {/* w-[640px] h-[360px]  */}
      <section>
        <div className="w-[640px] h-[360px] relative rounded-[10px]">
          <div className="content absolute z-[1] flex items-start flex-col gap-5">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              explicabo!
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              tempore totam, est qui quo pariatur odit optio in quisquam error?
            </p>
            <CustomButton
              title="Explore cars"
              containerStyles="bg-primary-blue mx-auto mt-10 rounded-full text-white"
            />
          </div>

          <div className="bg-[#54A6FF] relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
            <Image
              src="/BG.png"
              alt="Picture of the author"
              fill
              className="object-contain w-full"
            />

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
