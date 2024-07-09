import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://10th-assignment-server-side-ten.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-7">Tourists Spots</h1>
      <p className="px-5 md:mx-32 mb-7">
        Travel is very pleasant if you can experience it. Allah Ta ala said
        travel in the world and see what happened to the disbelievers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
        {country.map((dt) => (
          <Country key={dt._id} country={dt}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
