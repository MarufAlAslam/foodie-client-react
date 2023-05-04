import React from 'react'

const ChefBanner = ({ data }) => {
    return (
        <div className='py-24 chefBanner'>
            <div className='lg:w-5/6 flex justify-between items-start mx-auto w-full px-10'>
                <div className='lg:w-3/12 w-full'>
                    <img src={data.picture_url} className='mb-4 border-4 border-green-500 p-3 rounded-md' alt="" />
                    <h1 className='text-3xl text-white font-bold'>
                        {data.name}
                    </h1>
                </div>
                <div className='px-5 lg:w-9/12 w-full'>
                    <h1 className='text-3xl mb-2 text-white font-bold'>
                        About Chef
                    </h1>
                    <p className='text-white'>
                        {data.bio}
                    </p>

                    <table className='mt-4 table w-full text-center'>
                        <thead>
                            <tr>
                                <th className='text-white'>Total Recipes</th>
                                <th className='text-white'>Total Likes</th>
                                <th className='text-white'>Total Experience</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-white'>{data.recipe_count}</td>
                                <td className='text-white'>{data.likes}</td>
                                <td className='text-white'>{data.experience_years}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChefBanner