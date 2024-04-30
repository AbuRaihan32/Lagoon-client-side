
import { Helmet } from 'react-helmet-async';
import {  FaUser, FaVoicemail } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { useLoaderData, Link } from 'react-router-dom'
const HomeSpotsDetails = () => {
    // const [home, setHome] = useState([])
    const spot = useLoaderData();


    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, User_Email, User_Name } = spot;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16">
            <Helmet>
                <title>Cozy | Details</title>
            </Helmet>
            <div className="flex flex-col overflow-hidden rounded">
                <div className='h-[calc(100vh-40vh)] '>
                    <img src={image} alt="" className="w-full h-full bg-gray-500" />
                </div>
                <div className='w-full flex justify-center -mt-16'>
                    <div className="w-[90%] md:w-[85%] pb-12 m-4 mx-auto space-y-6  lg:rounded-md  card p-6 bg-base-100 shadow-xl border border-orange-600 bg-opacity-90">
                        <div className="space-y-2">
                            <div className="py-5">
                                <h2 className="text-[21px] font-bold text-start">{tourists_spot_name}</h2>
                                <h2 className="text-[21px] font-bold text-start">{country_Name}</h2>
                            </div>


                            <div className="md:flex items-center justify-between">
                                <p> <span className="text-xl font-bold">For :</span> <button className="bg-orange-500 px-5 rounded-full font-semibold text-white">{status}</button></p>
                                <p> <span className="text-xl font-semibold">Price : </span><span className="text-xl font-bold text-orange-600">{average_cost}</span></p>
                            </div>


                            <div className="md:flex justify-between mt-4">
                                <p className="flex flex-col md:flex-row  gap-2 text-[18px] font-semibold">
                                    <span className='flex items-center gap-2'>
                                        <IoLocation className="text-orange-600"></IoLocation>
                                        <span className='text-xl font-bold'>Location:</span>
                                    </span>
                                    <span className='ml-10 md:ml-0'>
                                        {location}
                                    </span>
                                </p>

                                <p><span className='text-xl font-bold'>Segment Name :</span> <span className='text-xl'>{travel_time}</span></p>
                            </div>

                            <div>
                                <p className="text-3xl">Seasonality : {seasonality}</p>
                                <p className="text-3xl">Total Visitor : {totalVisitorsPerYear}</p>
                            </div>
                            <div className='lg:flex items-center gap-4'>
                                <h1 className='text-xl font-bold'>You Need To Know :</h1>
                                <div className="flex justify-around gap-9 mt-2">
                                    <p className="flex items-center gap-2"><FaUser className="text-[#32CD32]"></FaUser> <span>{ User_Name }</span></p>
                                    <p className="flex items-center gap-2"> <FaVoicemail className="text-[#32CD32]"></FaVoicemail> <span>{ User_Email }</span> Baths</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p> <span className='text-xl font-bold'>Description : </span>
                                <span className={'text-[18px]'}> {short_description}</span> </p>
                        </div>
                        <Link to={'/'} className="btn w-[50%] mx-auto mt-7 bg-orange-600 rounded-none text-white px-6 hover:bg-orange-700">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSpotsDetails;