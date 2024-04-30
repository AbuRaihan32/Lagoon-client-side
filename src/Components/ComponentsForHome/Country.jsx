import PropTypes from 'prop-types'
const Country = ({country}) => {
    const { country_name, image, description} = country;
    return (
        <div>
            <div className="p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{country_name}</h2>
                </div>
                <p className="text-gray-100 dark:text-gray-800">{description.slice(0, 150)}...</p>
            </div>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object.isRequired
}

export default Country;