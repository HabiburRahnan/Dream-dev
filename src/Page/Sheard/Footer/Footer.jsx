import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#061835] p-4 pt-10 md:p-10 text-white">
        <div className="container mx-auto relative grid md:grid-cols-2 lg:grid-cols-4 bottom-0 p-4 md:p-10">
          <nav className="w-full text-white">
            <header className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co/Zx9dHn3/Black-White-Simple-Monochrome-Initial-Name-Logo.png"
                alt="img"
                className="w-8 h-8"
              />
              <p className="text-primary-black text-2xl font-bold">
                Dream Dev Ltd.
              </p>
            </header>
            <div className="text-primary-black font-medium ">
              <p className="font-semibold text-lg mt-5">Our Info</p>
              <div className="">
                <p className="flex items-center gap-2">
                  <FaLocationPin className="text-white" />
                  <span>House 9, Road 09, Uttara 11, Dhaka</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-white" />
                  <span>Call Us: +88011111111</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-white" />
                  <a href="mailto:mail.techtitan@gmail.com">
                    mail.dreamdev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </nav>
          <nav className="w-full text-primary-black md:w-1/2">
            <header className="text-primary-black mt-3 lg:mt-0 text-lg font-bold">
              Latest Events
            </header>
            <div>
              <a className="link link-hover font-medium">
                Explore and discuss challenges & trends in Dream Dev events
              </a>
              <p className="text-teal-600 mb-3">27 May, 2023</p>
            </div>
            <div>
              <a className="link link-hover font-medium">
                Tech Conferences: The Best Tech Events Guide for 2024
              </a>
              <p className="text-teal-600 mb-3">27 jan, 2024</p>
            </div>
          </nav>
          <nav className="w-full text-primary-black font-medium">
            <header className="text-primary-black text-lg font-bold">
              Useful Link
            </header>
            <div className="flex flex-col gap-1 mt-1">
              <a className="link link-hover">About Company</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">How It Works</a>
              <a className="link link-hover">Our Blog</a>
              <a className="link link-hover">Contact us</a>
              <a className="link link-hover">Policy</a>
            </div>
          </nav>
          <form className="w-full">
            <header className="text-primary-black text-lg font-bold">
              Subscribe
            </header>
            <fieldset className="form-control w-full font-medium">
              <label className="label mt-1">
                <span className="label-text text-white ">
                  Enter your email address
                </span>
              </label>
              <div className="relative mt-5">
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="p-3 rounded-full shadow-md text-primary-black w-full pr-16"
                />
                <button className="h-full text-white rounded-r-full px-2 bg-black hover:bg-black absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
