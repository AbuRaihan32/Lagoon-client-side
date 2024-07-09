import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyListCard from "./MyListCard";
import { Helmet } from "react-helmet-async";

const MyListContainer = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(
      `https://10th-assignment-server-side-ten.vercel.app/spotsByEmail/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user, toggle]);

  console.log(user.email);

  return (
    <div className="bg-black bg-opacity-80 rounded-b-3xl">
      <div className="max-w-5xl mx-auto">
        <Helmet>
          <title>My List | Lagoon</title>
        </Helmet>
        {spots?.length < 1 ? (
          <div className="w-full h-[500px] flex items-center justify-center text-white font-semibold text-4xl">
            <div>You have not added any spots yet.</div>
          </div>
        ) : (
          <div className="py-24 px-7 min-h-[500px] ">
            <div>
              <h1 className="text-3xl text-white text-center font-semibold my-10">
                LIST OF SPOTS YOU HAVE ADDED
              </h1>
            </div>

            <div className="overflow-x-auto bg-gray-100 p-5 rounded-3xl">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th> NO.</th>
                    <th>Country Name:</th>
                    <th>Spot Name:</th>
                    <th>Location:</th>
                    <th>Average Cost:</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {spots.map((data, id) => (
                    <MyListCard
                      key={data._id}
                      spot={data}
                      index={id}
                      toggle={toggle}
                      setToggle={setToggle}
                    ></MyListCard>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListContainer;
