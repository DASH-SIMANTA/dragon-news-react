import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200">
            <p className="bg-[#D72050] text-white-100 px-3 py-1"> Latest news</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem in itaque necessitatibus rem incidunt vel. Laudantium autem laboriosam assumenda, repellat tempore maxime, totam recusandae adipisci et quia voluptatem illum.</Link>

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem in itaque necessitatibus rem incidunt vel. Laudantium autem laboriosam assumenda, repellat tempore maxime, totam recusandae adipisci et quia voluptatem illum.</Link>

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem in itaque necessitatibus rem incidunt vel. Laudantium autem laboriosam assumenda, repellat tempore maxime, totam recusandae adipisci et quia voluptatem illum.</Link>
                

            </Marquee>
        </div>
    );
};

export default LatestNews;