import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    image_url,
    details,
    total_view,
    rating,
    published_date,
  } = news;

  return (
    <div className="card bg-base-100 border rounded-md shadow-sm border-blue-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-bold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
          
        </div>
        <div className="flex gap-2 text-gray-600">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Body */}
      <div className="px-4">
        <h2 className="text-lg font-bold mb-2 leading-tight">{title}</h2>
        <figure>
          <img
            src={image_url}
            alt="News"
            className="w-full h-60 object-cover rounded-md"
          />
        </figure>
        <p className="mt-4 text-gray-700 text-sm">
          {details.slice(0, 300)}...
          <Link to={`/news/${news._id}`} className="text-orange-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-4">
        <div className="flex items-center text-orange-400 gap-2">
          <div className="flex">
            {Array(Math.round(rating.number))
              .fill()
              .map((_, idx) => (
                <FaStar key={idx} />
              ))}
          </div>
          <span className="text-black text-sm">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500 gap-2">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
