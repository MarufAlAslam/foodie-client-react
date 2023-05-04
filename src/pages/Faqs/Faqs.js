import React from 'react';

const Faqs = () => {
    return (
        <div>
            <div className='w-3/4 py-10 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-white'>Frequently Asked Questions</h2>

                    <div className='mt-10'>
                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                What is Foodie?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    Foodie is a platform where you can learn and practice programming skills. We have a large collection of courses and practice problems, and a number of courses are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                What is the difference between Foodie and other websites?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    Foodie is a platform where you can learn recipes and practice them. We have a large collection of recipes and practice problems, and a number of recipes are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I learn Cooking from Foodie?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can learn Cooking from Foodie by following our courses. We have a large collection of courses, and a number of courses are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I practice cooking from Foodie?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can practice cooking from Foodie by following our practice problems. We have a large collection of practice problems, and a number of practice problems are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>

                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I contact Foodie?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can contact Foodie by sending an email to <a href="mailto:admin@foodie.com">Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;