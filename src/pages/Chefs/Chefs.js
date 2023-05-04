// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from '../../components/Chefs/Chefs';
// import Sidebar from '../../components/Sidebar/Sidebar';
import './Chefs.css';

const Chefs = () => {
    const chefs = useLoaderData();
    let categoryArray = []
    // console.log(courses.length)



    return (
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
    );
};

export default Chefs;