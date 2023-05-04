import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='py-10 lg:px-0 px-4'>
            <div className='lg:flex lg:w-3/4 mx-auto'>
                <div className='lg:w-1/2'>
                    <h2 className='text-white text-4xl mb-5'>About</h2>
                    <p className='text-xl'>
                        Welcome to our recipe website, where cooking and creativity come together! Our platform is designed to provide foodies of all levels with an endless variety of delicious recipes that are easy to follow and guaranteed to impress. Our collection includes everything from classic comfort foods to innovative new dishes, and we're constantly updating our offerings to keep your taste buds excited.
                        <br /> <br />
                        But we're more than just a recipe website. We believe that cooking is a way to connect with others, express yourself, and explore new cultures. That's why we also offer a wealth of resources and cooking tips to help you expand your culinary skills and knowledge. Plus, our community of food lovers is always here to offer support and inspiration along the way.
                        <br /> <br />
                        So whether you're looking to master a new technique, impress your dinner guests, or simply enjoy a delicious meal, our recipe website has everything you need to succeed in the kitchen. Explore our collection today and let your culinary journey begin!
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <div className='w-full h-full ml-16 about-bg'></div>
                </div>
            </div>
        </div>
    );
};

export default About;