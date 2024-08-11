import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { PuffLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);


const Root = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const [dark, setDark] = useState(false);


  return (
    <div
      style={{ fontFamily: "Signika" }}
      className="w-full relative mx-auto"
    >
      <div className="absolute w-full z-50">
        <Navbar setDark={setDark} path={location}></Navbar>
      </div>
      {navigation.state === "loading" ? (
        <div className="w-full h-96 flex items-center justify-center">
          {" "}
          <PuffLoader color="lime" size={70}></PuffLoader>{" "}
        </div>
      ) : (
        <ThemeContext.Provider value={{dark}}>
          <Outlet></Outlet>
        </ThemeContext.Provider>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
