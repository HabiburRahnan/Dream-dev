import { useEffect, useState } from "react";
import Title from "../../Components/Title";

const Services = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="container mx-auto">
      <Title
        title="Quality "
        title2="Services"
        subTitle="Top notch services we offer"
      ></Title>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-2  ">
          {items?.map((item) => (
            <div
              key={item.id}
              className="md:p-6 p-5  border  my-10 shadow-lg hover:shadow-xl transition  bg-white  rounded-xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex items-center justify-center">
                <img className="w-36" src={item.image} alt="" />
              </div>
              <div className=" mt-5">
                <div className="text-2xl font-bold pb-2 -mt-4 p-5">
                  {item.title}
                </div>
                <div className=" font-semibold p-5 text-gray-500">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
