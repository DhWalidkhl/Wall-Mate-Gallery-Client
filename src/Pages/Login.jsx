import React from 'react';

const Login = () => {
    return (
        <div className='items-center max-w-screen-lg mx-auto py-36'>
            <h1 className='uppercase text-5xl text-center mb-10'>My Account</h1>

            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="bg-base-200 card shrink-0 w-full max-w-lg shadow-2xl">
                        <h3 className='pl-9 mt-4 -mb-4 text-2xl'>Register</h3>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-info">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className=" bg-base-200 lg:mr-20 card shrink-0 w-full max-w-lg shadow-2xl">
                        <h3 className='pl-9 mt-4 -mb-4 text-2xl'>Login</h3>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;