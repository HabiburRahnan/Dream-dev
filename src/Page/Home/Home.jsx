import Banner from "./Banner";
import Count from "./Count";
import Hero from "./Hero";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";
import Product from "./Product";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-blue-100 overflow-hidden">
      <Banner></Banner>
      <HomeCard></HomeCard>
      <Product></Product>
      <Services></Services>
      <HeroSection></HeroSection>
      <Count></Count>
      <Hero></Hero>
    </div>
  );
};

export default Home;
