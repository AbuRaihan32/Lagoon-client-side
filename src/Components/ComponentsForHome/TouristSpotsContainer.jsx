import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../Shared/Card";

const TouristSpotsContainer = ({ info }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-7">Tourists Spots</h1>
      <p className="px-5 md:mx-32">
        Travel is very pleasant if you can experience it. Allah Ta ala said
        travel in the world and see what happened to the disbelievers.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start mb-16">
        {info?.slice(0, 6).map((data) => (
          <Card key={data._id} info={data}></Card>
        ))}
      </div>
      <Link
        to={`/all_spot`}
        className="relative px-5 py-2 font-medium text-green-600 group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
        <span className="relative">See All Spots</span>
      </Link>
    </div>
  );
};

TouristSpotsContainer.propTypes = {
  info: PropTypes.array.isRequired,
};
export default TouristSpotsContainer;
