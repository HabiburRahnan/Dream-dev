const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[1200px] md:h-[800px]  "
        style={{
          backgroundImage: "url(https://i.ibb.co/p0hhZPZ/laptop.webp)",
        }}
      >
        <div className="hero-overlay bg-blue-900 opacity-75 "></div>
        <div className="hero-content container mx-auto">
          <div className="text-white md:-mt-40 lg:-mt-56 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium py-5 ">
              Innovate & Transform your <br></br> business with
              <span className="font-bold"> Dream Dev Ltd.</span>
            </h1>
            <p className="mb-5 text-xl  md:text-2xl font-medium leading-loose">
              Get access to advanced cloud-based business solutions that can
              help you to stay ahead of the competition with the help of the
              leading software company in Bangladesh. At Dream Dev Limited, we
              specialize in providing innovative solutions that drive growth and
              efficiency for your business. Our team of experienced developers
              is dedicated to delivering high-quality software that meets your
              unique needs. We stay up-to-date with the latest technologies and
              trends, ensuring that you have access to the most advanced
              software solutions.
            </p>
            <button className=" bg-blue-900 outline-none text-white font-semibold p-5 text-xl  hover:bg-blue-900 mt-5">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
