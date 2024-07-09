import { Helmet } from "react-helmet-async";
import { FaUser, FaVoicemail } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useLoaderData, Link } from "react-router-dom";
const HomeSpotsDetails = () => {
  const spot = useLoaderData();

  const {
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    User_Email,
    User_Name,
  } = spot;

  return (
    <>
      <Helmet>
        <title>Lagoon | Details</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/c3R6bpD/pexels-hebaysal-2776479.jpg)",
        }}
        className="bg-cover bg-center rounded-b-3xl"
      >
        <div className="min-w-screen min-h-screen pt-32 pb-24 bg-gray-900 bg-opacity-80 flex items-center justify-center px-5 rounded-b-3xl">
          <div className="flex flex-col overflow-hidden rounded w-[95%] lg:w-[80%]">
            <div className="h-[calc(100vh-30vh)] ">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover bg-gray-500 rounded-3xl"
              />
            </div>
            <div className="w-full flex justify-center -mt-16">
              <div className="w-[90%] md:w-[85%] pb-12 m-4 mx-auto space-y-6  lg:rounded-md  card p-6 bg-base-100 shadow-xl border border-orange-600 bg-opacity-90">
                <div className="space-y-2">
                  <div className="py-5 flex flex-col md:flex-row justify-around">
                    <h2 className="text-[21px] font-bold text-start">
                      {" "}
                      Spot Name :{tourists_spot_name}
                    </h2>
                    <h2 className="text-[21px] font-bold text-start">
                      Country Name : {country_Name}
                    </h2>
                  </div>

                  <div className="text-center">
                    <p>
                      {" "}
                      <span className="text-xl font-semibold">
                        Average Cost :{" "}
                      </span>
                      <span className="text-xl font-bold text-[#32CD32]">
                        {average_cost} $
                      </span>
                    </p>
                  </div>

                  <div className="md:flex justify-around mt-4">
                    <p className="flex flex-col md:flex-row  gap-2 text-[18px] font-semibold">
                      <span className="flex items-center gap-2">
                        <IoLocation className="text-[#32cd32]"></IoLocation>
                        <span className="text-xl font-bold">Location:</span>
                      </span>
                      <span className="ml-10 md:ml-0">{location}</span>
                    </p>

                    <p>
                      <span className="text-xl font-bold">Travel Time :</span>{" "}
                      <span className="text-xl">{travel_time}</span>
                    </p>
                  </div>

                  <div className="md:flex justify-around">
                    <p className="text-xl font-bold">
                      Seasonality : {seasonality}
                    </p>
                    <p className="text-xl font-bold">
                      Total Visitor : {totalVisitorsPerYear}
                    </p>
                  </div>
                  <div className="">
                    <div className="flex justify-around gap-9 mt-2">
                      <p className="flex items-center gap-2">
                        <FaUser className="text-[#32CD32]"></FaUser>{" "}
                        <span>{User_Name}</span>
                      </p>

                      <p className="flex items-center gap-2">
                        {" "}
                        <FaVoicemail className="text-[#32CD32]"></FaVoicemail>{" "}
                        <span>{User_Email}</span> Baths
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    {" "}
                    <span className="text-xl font-bold">Description : </span>
                    <span className={"text-[18px]"}>
                      {" "}
                      {short_description}
                    </span>{" "}
                  </p>
                </div>
                <Link
                  to={-1}
                  className=" w-[50%] mx-auto text-center relative px-5 py-2 font-medium text-green-600 group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                  <span className="relative">Go Back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSpotsDetails;
