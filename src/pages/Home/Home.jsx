import Banner from "../../Components/ComponentsForHome/Banner";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Countries from "../../Components/ComponentsForHome/Countries";
import Extra from "../../Components/ComponentsForHome/Extra";
import Extra_1 from "../../Components/ComponentsForHome/Extra_1";
import TouristSpotsContainer from "../../Components/ComponentsForHome/TouristSpotsContainer";
const Home = () => {

    const info = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Lagoon | Home</title>
            </Helmet>
            <div className="w-full rounded-3xl">
                <div className="relative z-0">
                    <Banner></Banner>
                </div>
                <div style={{ backgroundImage: 'url(https://i.ibb.co/q0bV56r/design.png)' }} className="text-center bg-no-repeat bg-contain bg-top pt-32 -mt-4 md:-mt-12 relative z-50 ">
                    <div className="w-[85%] mx-auto">
                        <TouristSpotsContainer info={info}></TouristSpotsContainer>
                    </div>
                </div>
                <div className="w-[85%] mx-auto mt-20">
                    <Countries></Countries>
                </div>

                {/* Extra Sections */}
                <div className="mt-20 w-[85%] mx-auto">
                    <Extra_1></Extra_1>
                </div>
                <div>
                    <Extra></Extra>
                </div>
            </div>
        </div>
    );
};

export default Home;