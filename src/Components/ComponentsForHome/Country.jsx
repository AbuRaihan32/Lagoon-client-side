import PropTypes from 'prop-types'
const Country = ({country}) => {
    const { country_name, image, description} = country;
    return (
        <div>
            <div className="p-6 shadow-xl bg-gray-50">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{country_name}</h2>
                </div>
                <p className="text-gray-900 dark:text-gray-800">{description.slice(0, 140)}...</p>
            </div>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object.isRequired
}

export default Country;