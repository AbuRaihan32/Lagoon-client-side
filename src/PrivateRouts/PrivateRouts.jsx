import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation  } from "react-router-dom";
import { PuffLoader } from 'react-spinners';


const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-full flex justify-center h-[calc(100vh-50vh)] items-center'>
            <PuffLoader color='Lime' size={70}></PuffLoader>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>

};

PrivateRouts.propTypes = {
    children: PropTypes.node
}

export default PrivateRouts;