import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="gap-2 flex flex-col">
                <button className="btn">
                    <FaGoogle />Login with Google
                </button>

                <button className="btn">
                    <FaGithub></FaGithub> Login with Github   
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;