
import FindUs from '../FindUs';
import SocialLogin from '../SocialLogin';


const RightNavbar = () => {
    return (
        <div className='gap-5 flex flex-col'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;