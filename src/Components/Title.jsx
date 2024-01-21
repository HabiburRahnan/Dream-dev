/* eslint-disable react/prop-types */

const Title = ({ title, subTitle,title2 }) => {
  return (
    <div className="container mx-auto flex items-center mb-5 mt-5 ">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#273171]">--- {title}<span className="text-black">{title2}</span> ---</h1>
        <p className="text-xl md:text-2xl mt-3 text-primary-teal">{subTitle}</p>
      </div>
    </div>
  );
};

export default Title;
