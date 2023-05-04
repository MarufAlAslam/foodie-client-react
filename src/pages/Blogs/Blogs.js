import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from '../../components/PDF/PDF';

import ReactToPdf from 'react-to-pdf';

const Blogs = () => {


    const ref = React.createRef();
    return (
        <div>
            <div className='lg:w-3/4 w-full mx-auto py-10 lg:px-0 px-4'>
                <div className='text-center flex justify-between items-center'>
                    <h2 className='text-4xl font-bold text-white'>Blogs</h2>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf}>Generate pdf</button>
                        )}
                    </ReactToPdf>
                </div>

                <div ref={ref}>
                    <div className='mt-5'>
                        <h2 className='text-2xl'>
                            1.  Tell us the differences between uncontrolled and controlled components?
                        </h2>
                        <p>
                            Uncontrolled components are the components that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl'>
                            2.  How to validate React props using PropTypes?
                        </h2>
                        <p>
                            PropTypes is a way to ensure that the data received from props is valid. For example, if we have a component that expects a prop called name, we can define the type of this prop as a string in the component’s propTypes object. If the prop passed to the component is not a string, we will get a warning in the console.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl'>
                            3.  Tell us the difference between nodejs and express js.
                        </h2>
                        <p>
                            Node.js is a runtime environment for JavaScript that runs on the server. Express.js is a framework that runs on top of Node.js. It helps manage the routes of the server and simplifies the code. It is not mandatory to use Express.js with Node.js but it makes things easier.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl'>
                            4. What is a custom hook, and why will you create a custom hook?
                        </h2>
                        <p>
                            A custom hook is a JavaScript function whose name starts with “use” and that may call other hooks. For example, useFriendStatus below is our first custom hook:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;