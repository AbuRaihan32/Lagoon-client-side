

const Extra_1 = () => {
    const blog = "Traveler's Blogs"
    const des = "Dive into our Traveler's Blog where passionate explorers share their stories, tips, and experiences from their journeys across Bangladesh. Discover hidden gems, travel hacks, and inspiring adventures."
    return (
        <div className="w-[100%] mx-auto my-14">
            <section className="py-6 sm:py-12">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold text-black">{blog}</h2>
                        <p className="text-sm text-gray-600 w-[70%] mx-auto">{des}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col bg-gray-900 dark:bg-gray-50 border">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/TbSHDzj/pexels-asadphoto-1450351.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">See More</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white ">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/jvbpyjD/pexels-mdx014-814499.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600">See More</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/jhSCKzy/pexels-michaelslens-946686.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600">See More</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/WGTdnwR/pexels-sanat-anghan-25736600-6785289.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600">See More</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extra_1;