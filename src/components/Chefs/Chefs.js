import React from 'react';
import { FaStar, FaThumbsUp, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Chefs.css';

const Chef = ({ chef }) => {
    return (
        <div className='course-holder lg:m-0 my-4'>
            <div className="card bg-sky-900 shadow-xl h-full py-5">
                <div className='relative'>
                    <div className='absolute flex justify-center items-center bg-green-500 text-white text-xs right-5 top-0 rounded-md py-2 px-3'>
                        <FaThumbsUp className='mr-2' /> {chef.likes}
                    </div>
                </div>
                <figure className='block mr-auto ml-5'>
                    <img src={chef.picture_url} className='rounded block' alt={chef.name} />
                </figure>
                <div className="card-body p-4">
                <h2 className="text-xl mt-4 text-center text-white font-bold">
                        {chef.name}
                    </h2>
                    <div className='flex justify-center items-center'>
                        <div className='bg-green-500 text-white text-sm right-5 top-0 rounded-md py-2 px-3'>
                            Total Number of recipes {chef.recipe_count}
                        </div>
                    </div>
                    
                    <p className='text-center'>
                        Total Experience: {chef.experience_years} Years
                    </p>
                    <div className="divider"></div>

                    <div>
                        <Link to={`/chef/${chef.id}`} className='btn bg-green-500 border-0 rounded-md text-white btn-block'>
                            View Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;