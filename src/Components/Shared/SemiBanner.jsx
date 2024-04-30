import { Link } from "react-router-dom";

const SemiBanner = () => {
    return (
        <div>
            <div
                className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/JnkxF6t/outdoor-swimming-pool.jpg)' }}>
                <div className='flex justify-center items-center h-[calc(100vh-30vh)] text-red-50 bg-black bg-opacity-70 '>
                    <div className=' text-center'>
                        <h1 className='font-medium text-[18px] mb-2'>THE BEST WAY TO</h1>
                        <h1 className='text-5xl font-semibold text-[#32CD32]'> Enjoy the Beauty of the Nature</h1>
                        <p className='w-[70%] mx-auto mt-4'>Almost all people in the world have a dream to have a home with a beautiful environment and a tidy home is an indicator of a persons taste, so you can choose our homes to fulfill your dream.</p>

                        <Link to={'/all_spot'} className="relative mt-6 border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Get Started</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SemiBanner;