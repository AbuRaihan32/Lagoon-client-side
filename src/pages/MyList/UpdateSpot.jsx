import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [currentSpot, setCurrentSpot] = useState([]);

  useEffect(() => {
    fetch(`https://10th-assignment-server-side-ten.vercel.app/spot/${id}`)
      .then((res) => res.json())
      .then((dt) => setCurrentSpot(dt));
  }, [id]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
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
    } = data;

    const newSpot = {
      image: image ? image : currentSpot.image,
      tourists_spot_name: tourists_spot_name
        ? tourists_spot_name
        : currentSpot.tourists_spot_name,
      country_Name: country_Name ? country_Name : currentSpot.country_Name,
      location: location ? location : currentSpot.location,
      short_description: short_description
        ? short_description
        : currentSpot.short_description,
      average_cost: average_cost ? average_cost : currentSpot.average_cost,
      seasonality: seasonality ? seasonality : currentSpot.seasonality,
      travel_time: travel_time ? travel_time : currentSpot.travel_time,
      totalVisitorsPerYear: totalVisitorsPerYear
        ? totalVisitorsPerYear
        : currentSpot.totalVisitorsPerYear,
      User_Email: currentSpot.User_Email,
      User_Name: currentSpot.User_Name,
    };

    fetch(`https://10th-assignment-server-side-ten.vercel.app/userSpot/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Updated!",
            text: "Your file has been Updated.",
            icon: "success",
          });
          Navigate("/my_list");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please! change something for Update",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Spot</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/c3R6bpD/pexels-hebaysal-2776479.jpg)",
        }}
        className="bg-cover bg-center rounded-b-3xl"
      >
        <div className="min-w-screen min-h-screen pt-32 pb-24 bg-gray-900 bg-opacity-80 flex items-center justify-center px-5 rounded-b-3xl">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden md:max-w-[90%] bg-opacity-80">
            <div className="md:flex w-full">
              <div className="w-full md:w-[60%] py-10 px-5 md:px-10 mx-auto">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">
                    UPDATE TOURISTS SPOT
                  </h1>
                  <p>Edit Tourists Information To Update</p>
                </div>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  {/* row 1 */}
                  <div className="md:flex gap-4">
                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Photo URL
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.image}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Photo URL"
                          {...register("image")}
                        />
                      </div>
                    </div>

                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Tourists Spot Name
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          defaultValue={currentSpot.tourists_spot_name}
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Tourists Spot Name"
                          {...register("tourists_spot_name")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* row 2 */}
                  <div className="md:flex gap-4">
                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Country Name
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.country_Name}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Country Name"
                          {...register("country_Name")}
                        />
                      </div>
                    </div>

                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Total Visitors Per Year
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          defaultValue={currentSpot.totalVisitorsPerYear}
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Total Visitors Per Year"
                          {...register("totalVisitorsPerYear")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* row 3 */}
                  <div className="md:flex gap-4">
                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Location
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.location}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Location"
                          {...register("location")}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Seasonality
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.seasonality}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Seasonality"
                          {...register("seasonality")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* row 4 */}
                  <div className="md:flex gap-4">
                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Average Cost
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.average_cost}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Average Cost"
                          {...register("average_cost")}
                        />
                      </div>
                    </div>

                    <div className="md:w-1/2 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Travel Time
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          defaultValue={currentSpot.travel_time}
                          className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Travel Time"
                          {...register("travel_time")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* row 5 */}
                  <div className="">
                    <div className="w-full mb-5">
                      <label className="text-xs font-semibold px-1">
                        Short Description
                      </label>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          defaultValue={currentSpot.short_description}
                          className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Short Description"
                          {...register("short_description")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <button className=" w-[50%] text-xl text-white relative px-5 py-2 font-semibold group">
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                      <span className="flex items-center justify-center gap-2 relative">
                        <span>Save Change</span>{" "}
                      </span>
                    </button>
                    <Link to={-1}>
                      <button className="text-xl text-white relative px-5 py-2 font-semibold group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                        <span className="flex items-center justify-center gap-2 relative">
                          <span>Go Back</span>{" "}
                        </span>
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
