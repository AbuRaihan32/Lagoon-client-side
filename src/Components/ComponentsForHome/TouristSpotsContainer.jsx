import PropTypes from 'prop-types';
import TouristSpotCard from "./TouristSpotCard";

const TouristSpotsContainer = ({ info }) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-7">Tourists Spots</h1>
            <p className="px-5 md:mx-32">Travel is very pleasant if you can experience it. Allah Ta ala said travel in the world and see what happened to the disbelievers.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start">
                {
                    info.map(data => <TouristSpotCard
                        key={data._id}
                        info={data}
                    ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

TouristSpotsContainer.propTypes ={
    info: PropTypes.array.isRequired
}
export default TouristSpotsContainer;