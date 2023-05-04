import React from 'react';
import { FaAward, FaDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Broken from '../Broken/Broken';
import './ChefDetails.css';
import Pdf from "react-to-pdf";
import ChefBanner from '../../components/ChefBanner/ChefBanner';
import { toast, ToastContainer } from 'react-toastify';

const ChefDetails = () => {
    const data = useLoaderData();

    // console.log(data);

    const ref = React.createRef();

    const addFavorite = () => {
        toast.success('Added to Favorite');
    }

    return (
        data.id ? (
            <div className='relative'>
                <ToastContainer/>
                <ChefBanner data={data} />
                <img src={data.image} className='w-full course-banner' alt="" />
                <div className='py-10 lg:w-3/4 w-full mx-auto course-contents'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>Recipes</h1>
                        <div className='divider'></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            data.recipies.map((recipe, index) => (
                                <div className='course-card bg-white p-2 rounded-md' key={index}>

                                    <img src={recipe.picture_url} className='w-full' alt="" />

                                    <div className='py-3'>
                                        <div className='flex justify-between items-center mb-5'>
                                            <h1 className='text-xl font-bold text-green-700'>{recipe.name}</h1>
                                            <span className='text-black flex justify-end items-center text-sm font-bold'>
                                                <FaStar className='text-yellow-500' /> (5) -
                                                {
                                                    recipe.ratings
                                                }
                                            </span>
                                        </div>
                                        <p className='text-black text-sm'>{recipe.description}</p>

                                        <p className='text-black my-2 font-bold'>
                                            Ingredients
                                        </p>
                                        {
                                            recipe.ingredients.map((ingredients, index) => (
                                                <span key={index} className='text-xs bg-green-500 p-1 m-1 inline-flex text-black rounded-md'>
                                                    {
                                                        ingredients.name
                                                    }
                                                </span>
                                            ))
                                        }
                                        <p className='text-black my-2 font-bold'>
                                            Cooking Steps
                                        </p>

                                        {
                                            recipe.steps.map((steps, index) => (
                                                <p key={index} className='text-black text-sm flex justify-start items-start'>
                                                    <span>
                                                        {
                                                            index + 1
                                                        }
                                                    </span>
                                                    <span className='mx-2'>
                                                        -
                                                    </span>
                                                    <span>
                                                        {
                                                            steps.description
                                                        }
                                                    </span>

                                                </p>
                                            ))
                                        }
                                    </div>

                                    <div className='divider text-green-600 border-green-500'></div>

                                    <button onClick={addFavorite} className='btn bg-green-600 text-white border-none w-full'>
                                        Add to Favorite
                                    </button>

                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        ) :
            <Broken></Broken>
    );
};

export default ChefDetails;