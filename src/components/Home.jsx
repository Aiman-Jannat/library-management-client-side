import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { key } from "localforage";
import ShowCategories from "./ShowCategories";


const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className="bg-base-200">
             
            <Banner></Banner>
            <h1 className="mt-10 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-pink-400">Available Categories</span> </h1>
            <p className="mt-2 mb-7 text-center">You can choose a category and read books under this category. Here are world famous author's books are available.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-20 gap-5">
            {
                categories.map(category=><ShowCategories key={category._id} category={category}></ShowCategories>)
            }
            </div>
            
        </div>
    );
};

export default Home;