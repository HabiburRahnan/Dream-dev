import { FaRegStar } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { TbFileLike } from "react-icons/tb";
const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div className="hero    ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src="https://i.ibb.co/y5HJCh1/download-4.jpg"
            className="w-full h-[400px] rounded-lg shadow-2xl"
          />
          <div className="ml-5">
            <h1 className="text-[#273171] text-2xl font-bold pb-10">
              --- Dream Dev Limited
            </h1>
            <h1 className="text-3xl font-bold text-blue-500 hover:text-black">
              The Fastest Growing
              <span className="text-[#273171]">
                Software Company in Bangladesh
              </span>
            </h1>
            <p className="py-3 font-medium leading-loose text-gray-500 text-xl ">
              We pride ourselves on consistently delivering more than what is
              expected to our clients. This is why we have become an example in
              the industry as the fastest growing software company in Bangladesh
              with over 250 clients. This remarkable feet was achieved by
              establishing some values that we possess strongly.
            </p>
            <ul className="text-2xl font-bold ">
              <li className="flex justify-start gap-5 py-3">
                <FaRegStar />
                Committed to Quality
              </li>
              <li className="flex justify-start gap-5 py-3">
                <GoPeople />
                Expertise in Different Industries
              </li>
              <li className="flex justify-start gap-5 py-3">
                <TbFileLike />
                Transparency in Every Level
              </li>
              <li className="flex justify-start gap-5 py-3">
                <FaHandshake />
                Seamless Customer Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
