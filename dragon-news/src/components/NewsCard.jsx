import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ props }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    published_date,
  } = props;

  const trimmedDetails =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  return (
    <div className="border border-blue-300 rounded-md p-4 mb-6 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold leading-snug mb-3">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="News thumbnail"
        className="w-full h-64 object-cover rounded-md mb-4"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm mb-2">{trimmedDetails}</p>
      <span className="text-orange-500 font-semibold cursor-pointer">
        Read More
      </span>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(Math.round(rating?.number || 0))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 font-medium">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
