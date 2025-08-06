import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Login = () => {
    const [error, setError]= useState({});
    const { logInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');

        console.log({ email, password });
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // You can also update the user's profile with name and photo URL here if needed
                console.log(user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setError({...error, login: err.code});
            });

    }
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             console.log(result.user);
    //             navigate('/');
    //         })
    //         .catch(error => { console.log('ERROR', error.message) })
    // }




    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-20">

                <h2 className='text-center text-2xl font-semi-bold'>
                    Login your account
                </h2>

                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            error.login && <label className='text-red-500 label'>{error.login}</label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 max-w-xs">
                        <button className="btn btn-neutral rounded-none w-full">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Don't have an account? <Link to='/auth/register'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;