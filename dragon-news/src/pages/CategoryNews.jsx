import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data:news,error} = useLoaderData([]);
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{news.length} News for this category</p>
            <div>
                {
                    news.map((singleNews)=>(
                        <NewsCard key={singleNews._id} news ={singleNews}></NewsCard>
                    ))
                }
            </div>





            {error && <p className="text-red-500">Error loading news: {error.message}</p>}
        </div>
    );
};

export default CategoryNews;