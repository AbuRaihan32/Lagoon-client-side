import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Td, Tr } from 'react-super-responsive-table';
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2';

const MyListCard = ({ spot, index, toggle, setToggle }) => {
    const {
        _id,
        tourists_spot_name,
        country_Name,
        location,
        average_cost } = spot;



    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(dt => {
                        setToggle(!toggle);
                        console.log(dt);
                        if (dt.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <Tr className="border-b-2 md:py-4 border-gray-300 relative">
                <Td className="px-6 py-8 font-medium text-gray-900 dark:text-white whitespace-nowrap">{index + 1}</Td>
                <Td className="">{country_Name}</Td>
                <Td>{tourists_spot_name}</Td>
                <Td> {location} </Td>
                <Td> {average_cost}</Td>
                <Td>
                    <div className='space-x-8 flex flex-col md:flex-row items-center justify-center absolute md:right-12 md:top-1 -top-36 -right-2 space-y-6 text-center'>
                        <div className=''>
                            <Link to={`/updateSpot/${_id}`} className="font-medium btn"><CiEdit></CiEdit> <span className='hidden lg:inline'>Update</span></Link>
                        </div>

                        <div className='flex md:inline justify-start md:w-auto w-full -mt-10'>
                            <button onClick={handleDelete} className="font-medium btn"><RiDeleteBinLine></RiDeleteBinLine> <span className='hidden lg:inline'>Delete</span></button>
                        </div>
                    </div>
                </Td>
            </Tr>

        </>
    );
};

MyListCard.propTypes = {
    spot: PropTypes.object.isRequired,
    index: PropTypes.node,
    toggle: PropTypes.node,
    setToggle: PropTypes.node
}

export default MyListCard;