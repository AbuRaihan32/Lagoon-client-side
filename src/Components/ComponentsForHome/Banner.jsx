import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className='-z-10'>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {/* slider 1 */}
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/z7s4HnN/pexels-freestockpro-1004584.jpg)' }}>
                    <div className='flex justify-center items-center h-[calc(100vh-30vh)] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>THE BEST WAY TO</h1>
                            <h1 className='text-5xl px-5 font-semibold text-[#32CD32]'> ENJOY THE BEAUTY OF THE WORLD</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Travel is very pleasant if you can experience it. Allah Ta ala said travel in the world and see what happened to the disbelievers.</p>

                            <Link to={'/add_spot'} className="relative px-5 py-2 font-medium text-white group hidden md:inline">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                                <span className="relative"> Get Started </span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>


                {/* slider 2 */}
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: 'url(https://i.ibb.co/6wKLvPz/pexels-asadphoto-1450340.jpg)'}}>
                    <div className='flex justify-center items-center h-[calc(100vh-30vh)] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>THE BEST WAY TO</h1>
                            <h1 className='text-5xl px-5 font-semibold text-[#32CD32]'> ENJOY THE BEAUTY OF THE WORLD</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Travel is very pleasant if you can experience it. Allah Ta ala said travel in the world and see what happened to the disbelievers.</p>

                            <Link to={'/add_spot'} className="relative px-5 py-2 font-medium text-white group hidden md:inline">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                                <span className="relative"> Get Started</span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider 3 */}
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: 'url( https://i.ibb.co/Dp5Hfdc/pexels-joshuaworoniecki-6354477.jpg)' }}>
                    <div className='flex justify-center items-center h-[calc(100vh-30vh)] text-red-50 bg-black bg-opacity-60 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>THE BEST WAY TO</h1>
                            <h1 className='text-5xl px-5 font-semibold text-[#32CD32]'> ENJOY THE BEAUTY OF THE WORLD</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Travel is very pleasant if you can experience it. Allah Ta ala said travel in the world and see what happened to the disbelievers.</p>

                            <Link to={'/add_spot'} className="relative px-5 py-2 font-medium text-white group hidden md:inline">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
                                <span className="relative"> Get Started</span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;