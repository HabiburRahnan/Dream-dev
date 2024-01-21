/* eslint-disable react/prop-types */

const Title = ({ title, subTitle }) => {
  return (
    <div className="container mx-auto flex items-center mb-5 mt-5">
      <div>
        <h1 className="text-5xl text-primary-teal">--- {title} ---</h1>
        <p className="text-2xl mt-3 text-primary-teal">{subTitle}</p>
      </div>
    </div>
  );
};

export default Title;
