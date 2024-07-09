# Lagoon

The website provides comprehensive information about various tourist spots around the world, allowing users to explore, add and manage tourist spot details.

Project Overview:
I'm developing a tourism-focused website concentrating on the Southeast Asia category, specifically for Bangladesh. The website will feature notable tourist spots in Bangladesh such as Sundarban, Cox’s Bazar, Rangamati, Bandarban, and Saint Martin’s Island. The project involves both client-side and server-side development, with a focus on user authentication, CRUD operations, responsive design, and meaningful UI/UX features.

My Website Firebase Live Link is :

- [@Lagoon-firebase](https://tn-assignment.web.app/) Click Here For Live Preview.

five bullet points features and characteristics:

    1. User Authentication and Authorization:

        Secure login and registration using email and password.
        Social login options such as Google.
        Conditional navigation items based on user login status.
       
     2. Tourist Spot Management:
        Users can add, view, update, and delete tourist spots.
        All actions provide real-time feedback through toast notifications.

    3. Responsive Design:
        The website is fully responsive, ensuring compatibility across mobile, tablet, and desktop devices.

    4. Protected Routes:
        Private routes for adding, updating, and viewing personal lists of tourist spots.
        Ensures users remain logged in even after page reloads.

    5. Interactive and Engaging UI:
        Dynamic home page with a banner slider and detailed sections for tourist spots.
        Extra sections for enhanced content and user engagement.
        Dark/light theme toggle for personalized viewing preferences.

The technologies which i have used :

1.  react.js 2. javaScript 3. tailwind 4. mongodb 5. express.js 6. node.js 7. firebase

The npm package names which i have used for the challenges task:

1. - [@AOS-Package](https://www.npmjs.com/package/aos) This package I used to animate the Estate section of my home page.

2. - [@React-Hook-form](https://react-hook-form.com/) I have used this package to collect data for my form. It is used in login and register pages.

3. - [@Swiper-slider](https://swiperjs.com/) I have used this package To use the slider on the banner

To run this application locally:

    1. Clone the Repository:
        First, clone client-side repository to your local machine using Git.

        git clone https://github.com/Lagoon-client-side/your-repository.git
        cd your-repository


    2. Install Dependencies:
        Once you have the repository cloned, navigate to the project directory (where package.json is located) using the terminal or command prompt.
        Run the following command to install the necessary dependencies (this will install all libraries and packages your project needs as specified in package.json):

        npm install

    3. Add environment variables in ".env.local"

        VITE_APIKEY=AIzaSyCDtOi38MBSiE0XU2e_NTh2QFaI-j2RmSg
        VITE_AUTHDOMAIN=tn-assignment.firebaseapp.com
        VITE_PROJECTID=tn-assignment
        VITE_STORAGEBUCKET=tn-assignment.appspot.com
        VITE_MESSAGINGSENDERID=843085534379
        ITE_APPID=1:843085534379:web:8702692007cf6310cbd3ee

    4. Run the Development Server:
        After installing dependencies, you can start the development server by running:

        npm run start
