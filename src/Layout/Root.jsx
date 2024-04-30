import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import {PuffLoader} from 'react-spinners'

const Root = () => {
    const navigation = useNavigation()

    return (
        <div style={{fontFamily: 'Manrope, sans-serif'}} className="max-w-[1240px] relative mx-auto">
            <div className="absolute w-full z-50">
                <Navbar navigation={navigation}></Navbar>
            </div>
            {
                navigation.state === 'loading' ? <div className="w-full h-96 flex items-center justify-center"> <PuffLoader color='lime' size={70}></PuffLoader> </div> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;