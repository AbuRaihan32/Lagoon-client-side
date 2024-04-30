import SemiBanner from '../../Components/Shared/SemiBanner';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders'
import MyListCard from './MyListCard';
import { Helmet } from 'react-helmet-async';

const MyListContainer = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch(`https://10th-assignment-server-side-ten.vercel.app/userSpots/${user?.email}`)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [user, toggle])

    return (
        <>
            <Helmet>
                <title>My List | Lagoon</title>
            </Helmet>
            <SemiBanner></SemiBanner>
            {
                spots?.length < 1 ? <div className='w-full h-[300px] flex items-center justify-center text-red-800 font-semibold text-4xl'><div>You have not added any spots yet.</div></div> :
                    <div className='pt-24 px-7'>
                        <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <Tr className=''>
                                    <Th className="md:w-[10%] pl-7 md:py-4"> NO. </Th>
                                    <Th className="md:w-[18%]"> Country Name: </Th>
                                    <Th className="md:w-[18%]"> Spot Name: </Th>
                                    <Th className="md:w-[18%]"> Location: </Th>
                                    <Th className="md:w-[18%]"> Average Cost: </Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    spots.map((data, id) => <MyListCard
                                        key={data._id}
                                        spot={data}
                                        index={id}
                                        toggle={toggle}
                                        setToggle={setToggle}
                                    ></MyListCard>)
                                }
                            </Tbody>
                        </Table>
                    </div>
            }
        </>
    );
};

export default MyListContainer;