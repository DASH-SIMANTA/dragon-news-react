import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser,setUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        // const email = form.email.value;
        // const password = form.password.value;

        // console.log(name, photo, email, password);
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const photo = formData.get('photo');
        const email = formData.get('email');
        const password = formData.get('password');

        console.log({ name, photo, email, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // You can also update the user's profile with name and photo URL here if needed
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating user:', errorCode, errorMessage);
            });

        // Reset the form after submission
        // event.target.reset();
    };
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-20">

                <h2 className='text-center text-2xl font-semi-bold'>
                    Register your account
                </h2>

                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>

                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>

                        <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">

                            <input type="checkbox" className="checkbox checkbox-error" />
                            <span className="label-text">Accept Terms & Condition</span>
                        </label>
                    </div>
                    <div className="form-control mt-6 max-w-xs">
                        <button className="btn btn-neutral rounded-none w-full">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Already have an account? <Link to='/auth/login'>Login</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;