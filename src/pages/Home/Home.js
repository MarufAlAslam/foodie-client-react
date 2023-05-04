/* eslint-disable array-callback-return */
import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import CountUp from 'react-countup';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../components/Chefs/Chefs';
import { FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const chefs = useLoaderData();

    console.log(chefs.length);
    
    return (
        <div>
            <Banner></Banner>
            <About></About>

            {/* <div className='lg:w-3/4 w-full mx-auto py-10'>
            <h2 className='text-3xl font-bold text-center text-white mb-8'>Our Stats</h2>
                <div className='lg:flex'>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={course.length} />
                        </h2>
                        <p className='text-xl'>Courses</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalTime} />
                        </h2>
                        <p className='text-xl'>Hours</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalStudents} />
                        </h2>
                        <p className='text-xl'>Students</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalVideos} />
                        </h2>
                        <p className='text-xl'>Lectures</p>
                    </div>
                </div>
            </div> */}


            <div className='popular lg:w-3/4 w-full py-10 mx-auto'>
                <h2 className='text-3xl font-bold text-center text-white'>Meet Our Chefs</h2>
                <div className='divider'></div>
                <div className='md:grid lg:grid-cols-3 grid-cols-2 lg:p-0 p-4 gap-4 justify-center align-center'>
                    {
                        chefs.map(chef => {
                            return <Chef key={chef.id} chef={chef}></Chef>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;