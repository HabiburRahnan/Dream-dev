const Hero = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10">
        <div className="hero    ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/dBV0rFd/image.webp"
              className="w-full h-[400px] rounded-lg shadow-2xl"
            />
            <div className="ml-5">
              <h1 className="text-[#273171] text-2xl font-bold pb-10">
                --- Experience!
              </h1>
              <h1 className="text-3xl font-bold text-blue-500 hover:text-black">
                15 Years of Experience in Building World-Class
                <span className="text-[#273171]">
                  Business Software in Bangladesh
                </span>
              </h1>
              <p className="py-3 font-medium leading-loose text-gray-500 text-xl ">
                We have been trusted by the users of Akij for the past 15 years
                where they run each of their business units around all their
                concerns on our software. We are able to build strong,
                long-lasting relationships with our clients, and help them
                achieve their business goals through the use of advanced
                software solutions. Also, we are expanding and continually being
                reached out to by new clients, so we can claim trustworthiness –
                rightfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
