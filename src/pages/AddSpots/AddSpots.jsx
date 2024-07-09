import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddSpots = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

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
      User_Email,
      User_Name,
    } = data;

    const newSpot = {
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
    };

    fetch("https://10th-assignment-server-side-ten.vercel.app/userAddedSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Added!",
            text: "Your spot has been added.",
            icon: "success",
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <>
      <div className="w-full">
        <Helmet>
          <title>Add Spot</title>
        </Helmet>
        <div className="w-full bg-gray-900 bg-opacity-80">
          <div className="max-w-5xl mx-auto min-h-screen pt-32 pb-24 flex items-center justify-center px-5 rounded-b-3xl">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
              <div className="md:flex w-full">
                <div className="hidden md:block w-[40%] bg-[#32CD32]">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src="https://i.ibb.co/261Fw5x/Stuck-at-Home-Working-from-Home.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-[60%] py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">
                      ADD TOURISTS SPOT
                    </h1>
                    <p>Enter Tourists Information To Add</p>
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
                            className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Short Description"
                            {...register("short_description")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* row 6 */}
                    <div className="md:flex gap-4">
                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          User Name
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            value={user?.displayName}
                            placeholder="User Name"
                            {...register("User_Name")}
                          />
                        </div>
                      </div>

                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          User Email
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            value={user?.email}
                            placeholder="User Email"
                            {...register("User_Email")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button className=" w-[70%] text-xl text-white relative px-5 py-2 font-semibold group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                        <span className="flex items-center justify-center gap-2 relative">
                          <span>Add Spot</span>{" "}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSpots;
