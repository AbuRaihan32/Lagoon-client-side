import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Card from "../../Components/Shared/Card";

const AllSpotsContainer = () => {
  const userSpots = useLoaderData();
  const [spots, setSpots] = useState(userSpots);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    let sortedSpot = [...spots];
    if (selectedValue === "ascending") {
      sortedSpot.sort(
        (a, b) => a.totalVisitorsPerYear - b.totalVisitorsPerYear
      );
    } else if (selectedValue === "descending") {
      sortedSpot.sort(
        (a, b) => b.totalVisitorsPerYear - a.totalVisitorsPerYear
      );
    }
    setSpots(sortedSpot);
  };

  return (
    <>
      <Helmet>
        <title>All Spots</title>
      </Helmet>

      <div>
        <div className="text-center min-w-screen min-h-screen rounded-b-3xl bg-opacity-80 pt-32 pb-24">
          {spots?.length < 1 ? (
            <div className="w-full h-[500px] flex items-center justify-center  font-semibold text-4xl">
              <div>You have not added any spots yet.</div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-bold mb-7">
                All Tourists Spots
              </h1>
              <p className="px-5 md:mx-32 mb-7">
                Almost all people in the world have a dream to have a home with
                a beautiful environment and a tidy home is an indicator of a
                persons taste, so you can choose our homes to fulfill your
                dream.
              </p>

              {/* dropdown for Sort */}
              <div>
                <div className="relative inline-flex self-center">
                  <div className="text-white text-xl bg-[#32Cd32] absolute top-2 right-2 m-2 pointer-events-none p-1 rounded">
                    <IoIosArrowDown></IoIosArrowDown>
                  </div>
                  <select
                    onChange={handleChange}
                    className="text-2xl font-bold border-2 rounded-full border-[#32cd32] text-gray-600 h-14 w-[300px] pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    <option>Sort By -</option>
                    <option value="ascending">Cost Low to High</option>
                    <option value="descending">Cost High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {spots.map((data) => (
                  <Card key={data._id} info={data}></Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllSpotsContainer;
