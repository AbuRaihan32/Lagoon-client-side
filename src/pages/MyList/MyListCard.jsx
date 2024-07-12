import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const MyListCard = ({ spot, index, toggle, setToggle }) => {
  const {
    _id,
    tourists_spot_name,
    country_Name,
    location,
    average_cost,
    image,
  } = spot;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://10th-assignment-server-side-ten.vercel.app/delete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((dt) => {
            setToggle(!toggle);
            console.log(dt);
            if (dt.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="hover:bg-gray-200">
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="">{country_Name}</div>
            </div>
          </div>
        </td>
        <td>{tourists_spot_name}</td>
        <td>{location}</td>
        <td>{average_cost} $</td>
        <td>
          <Link
            to={`/updateSpot/${_id}`}
            className="btn btn-circle btn-outline border-black text-black"
          >
            <CiEdit className="text-xl"></CiEdit>
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDelete()}
            className="btn btn-circle btn-outline border-black text-black"
          >
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </button>
        </td>
      </tr>
    </>
  );
};

MyListCard.propTypes = {
  spot: PropTypes.object.isRequired,
  index: PropTypes.node,
  toggle: PropTypes.node,
  setToggle: PropTypes.func,
};

export default MyListCard;
