import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
    const {data,error} = useLoaderData([]);
    console.log(data);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            {/* <p className="text-gray-400 text-sm">{data.length} News for this category</p> */}
            <div>
                {
                    data.map((news) => (
                        <div key={news._id} className="card bg-base-100 shadow-xl mb-4">
                            <figure><img src={news.image_url} alt={news.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{news.title}</h2>
                                <p>{news.details.slice(0, 100)}...</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>





            {error && <p className="text-red-500">Error loading news: {error.message}</p>}
        </div>
    );
};

export default CategoryNews;