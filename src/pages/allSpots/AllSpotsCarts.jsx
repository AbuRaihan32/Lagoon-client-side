import PropTypes from 'prop-types';
import { BiSolidArea } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { IoBed, IoLocation } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';



const AllSpotsCarts = ({ info }) => {
    const loc = useLocation();
    console.log(loc);


    const { _id, image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time , totalVisitorsPerYear} = info;
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="border rounded-2xl border-[#32CD32]">
            <div className="bg-gray-100 card p-6 shadow-xl h-full rounded-2xl text-gray-900">
                <figure><img className="h-[200px] w-full rounded-2xl" src={image} alt="Shoes" /></figure>
                <div className=" flex flex-col">


                    <div className="py-5">
                        <h2 className="text-[21px] font-bold text-start">{tourists_spot_name}</h2>
                        <h2 className="text-[21px] font-bold text-start">{country_Name}</h2>
                    </div>


                    <div className="flex items-center justify-between">
                        <p> <span className="text-xl font-bold">For :</span> <button className="bg-[#32CD32] px-5 rounded-full font-semibold text-white">{status}</button></p>
                        <p> <span className="text-xl font-semibold">Price : </span><span className="text-xl font-bold text-[#32CD32]">{average_cost}</span></p>
                    </div>


                    <div className="flex justify-between mt-4">
                        <p className="flex items-center gap-2 text-[18px] font-semibold"> <IoLocation className="text-[#32CD32]"></IoLocation> {location}</p>
                    </div>


                    <div className="text-start ml-2 text-[18px] font-semibold">
                        <h1>Facilities :</h1>
                        <ul className=" ml-10">
                            <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight> {seasonality}</li>
                            <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight> {travel_time}</li>
                            <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight> {totalVisitorsPerYear}</li>
                        </ul>
                    </div>


                    <div className="flex justify-between mt-2">
                        <p className="flex items-center gap-2"><IoBed className="text-[#32CD32]"></IoBed> <span>{} Beds</span></p>
                        <p className="flex items-center gap-2"> <FaBath className="text-[#32CD32]"></FaBath> <span>{}</span> Baths</p>
                        <p className="flex items-center gap-2"> <BiSolidArea className="text-[#32CD32]"></BiSolidArea>  {}</p>
                    </div>


                    <div className="card-actions mx-auto mt-4">
                        <Link to={`/allDetails/${_id}`} className="relative px-5 py-2 font-medium text-green-600 group hidden md:inline">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                            <span className="relative">View Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllSpotsCarts.propTypes = {
    info: PropTypes.object.isRequired
}

export default AllSpotsCarts;