import { useState } from "react";
import { useEffect } from "react";

const HomeCard = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("/Homecard.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(items);
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 -mt-48 ">
        {items?.map((item) => (
          <div
            key={item.id}
            className="md:p-6 p-5  border  my-10 shadow-lg hover:shadow-xl transition  bg-white "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            <div className="flex items-center justify-center">
              <img className="w-20" src={item.image} alt="" />
            </div>
            <div className="text-center mt-5">
              <div className="text-2xl font-bold pb-2 -mt-4 p-5">
                {item.title}
              </div>
              <div className=" font-semibold p-5">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
