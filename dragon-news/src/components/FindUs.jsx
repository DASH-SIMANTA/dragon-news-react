import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join  join-vertical w-full *bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook /> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter className="bg:blue-500 text-blue-500"></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start"> <FaInstagram className="bg-[#D82D7E] rounded-selector"></FaInstagram> Instagram</button>
            </div>


            


        </div>
    );
};

export default FindUs;