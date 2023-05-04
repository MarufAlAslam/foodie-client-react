import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className='hero-banner py-40'>
            <div className='lg:w-3/4 mx-auto'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-5xl text-xl font-bold text-white'>
                    Discover Deliciousness, <br />
                    Your New Recipe Website
                    </h1>
                    {/* <CountUp end={100} /> */}

                    <h4 className='lg:text-xl mt-5'>
                    Introducing the Ultimate Destination for Foodies: Your New Go-To Recipe Website!
                    </h4>

                    <div className='mt-10'>
                        <Link to='/recipes' className='btn btn-outline mr-5 rounded-full px-10'>
                            Get Started Now!
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;