import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../components/Chefs/Chefs';

const Filter = () => {
    const data = useLoaderData()
    const category = window.location.pathname.slice(8).replace("%20", " ")
    return (
        <div className='lg:w-3/4 w-full py-10 mx-auto'>
            <h2 className='text-center text-4xl font-bold mb-5'>
                Filtered Courses
            </h2>
            <div className='grid lg:grid-cols-3 gap-4'>
                {data.filter(course => course.category === category).map((course) => (
                    <Chef key={course.id} course={course}></Chef>
                ))}
            </div>
        </div>
    );
};

export default Filter;