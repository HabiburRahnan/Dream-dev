import CountUp from "react-countup";

const Count = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/p0hhZPZ/laptop.webp)",
      }}
    >
      <div className=" bg-clinical-services-bg font-barlow w-full  bg-no-repeat bg-inherit bg-center relative ">
        <div className="w-full bg-dark-blue bg-blue-900 opacity-75  text-white">
          <div className="py-32 px-2 container mx-auto">
            <div className="flex flex-col items-center text-center justify-center">
              <div className="container mx-auto flex items-center mb-5 mt-5 ">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white">
                    --- Level Up Your Business With the Finest Solutions ---
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 px-12 md:grid-cols-2 lg:grid-cols-4 mt-16">
              <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                <div>
                  <div className="text-white sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold ">
                    <CountUp enableScrollSpy end={320} />+
                  </div>
                  <div className="text-white font-medium">Permanent Staff</div>
                </div>
              </div>
              <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                {/* <GiMicroscope className="font-bold text-primary-teal text-5xl xl:text-7xl" /> */}
                <div>
                  <div className="text-white sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold ">
                    <CountUp enableScrollSpy end={10} />
                    K+
                  </div>
                  <div className="text-white font-medium">Test Completed</div>
                </div>
              </div>
              <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                {/* <GiTrophyCup className="font-bold text-primary-teal text-5xl xl:text-7xl" /> */}
                <div>
                  <div className="text-white sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold ">
                    <CountUp enableScrollSpy end={400} />+
                  </div>
                  <div className="text-white font-medium">Wining Awards</div>
                </div>
              </div>
              <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                {/* <GrCubes className="font-bold text-primary-teal text-5xl xl:text-7xl" /> */}
                <div>
                  <div className="text-white sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold ">
                    <CountUp enableScrollSpy end={12} />
                    K+
                  </div>
                  <div className="text-white font-medium">Years Of Exps.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
