import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import PropTypes from "prop-types";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Card = ({ info }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    totalVisitorsPerYear,
  } = info;

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className=" bg-gradient-to-br from-green-300 to-green-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="  bg-transparent shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center"
        >
          <div className="border  p-7 bg-green-50 shadow-xl text-start">
            <figure>
              <img
                className="h-[200px] w-full "
                src={image}
                alt="spot-image"
              />
            </figure>
            <div className="card-body p-0 space-y-1 text-black">
              <h2 className="gap-2 text-[18px] font-semibold mt-3">
                {tourists_spot_name}
              </h2>
              <p>
                <span className="text-[18px] font-semibold mt-3">
                  Country Name:
                </span>{" "}
                {country_Name}
              </p>
              <div className="flex justify-between mt-4">
                <p className="flex items-center gap-2 text-[18px] font-semibold">
                  {" "}
                  <IoLocation className="text-[#32CD32]"></IoLocation>{" "}
                  {location}
                </p>
              </div>
              <hr />
              <div className="flex gap-6 md:flex-col lg:flex-row md:gap-1">
                <div className="flex gap-2 items-center text-[18px] font-semibold mt-3">
                  <FaUser className="text-[#32CD32]"></FaUser>
                  <p> Total Visitor : {totalVisitorsPerYear}</p>
                </div>
              </div>
              <div className="card-actions mx-auto mt-4">
                <Link
                  to={`/details/${_id}`}
                  className="relative px-5 py-2 font-medium text-green-600 group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                  <span className="relative">View Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Card;
