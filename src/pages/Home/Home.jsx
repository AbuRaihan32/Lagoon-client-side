import Banner from "../../Components/ComponentsForHome/Banner";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Countries from "../../Components/ComponentsForHome/Countries";
import Extra from "../../Components/ComponentsForHome/Extra";
import Extra_1 from "../../Components/ComponentsForHome/Extra_1";
import TouristSpotsContainer from "../../Components/ComponentsForHome/TouristSpotsContainer";
import { useContext } from "react";
import { ThemeContext } from "../../Layout/Root";



const Home = () => {

  const {dark} = useContext(ThemeContext)

  console.log(dark)
  const info = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Lagoon | Home</title>
      </Helmet>
      <div className="rounded-3xl">
        <div className="relative z-0">
          <Banner></Banner>
        </div>
        <div
          className={` ${dark !== 'light' ? ' text-center  pt-32 -mt-4 md:-mt-12 relative z-50' : 'bg-[url(https://i.ibb.co/q0bV56r/design.png)] text-center bg-no-repeat bg-contain bg-top pt-32 -mt-4 md:-mt-12 relative z-50'}`}
        >
          <div className="w-[90%] md:max-w-5xl mx-auto">
            <TouristSpotsContainer info={info}></TouristSpotsContainer>
          </div>
        </div>
        <div className="w-[90%] md:max-w-5xl mx-auto mt-20">
          <Countries></Countries>
        </div>

        {/* Extra Sections */}
        <div className="mt-20 w-full bg-green-200">
          <div className="w-[90%] md:max-w-5xl mx-auto">
            <Extra_1></Extra_1>
          </div>
        </div>
        <div className="w-[90%] md:max-w-5xl mx-auto">
          <Extra></Extra>
        </div>
      </div>
    </div>
  );
};

export default Home;
