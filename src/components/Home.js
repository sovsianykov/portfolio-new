import React from 'react';
import image from "./assetts/developer.jpg"

const Home = () => {
    return (
        <main>
            <img src={image} className='absolute object-bottom w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8  '>
                <h4 className='text-3xl text-blue-50 font-bold cursive leading-none lg:leading-snug home-name'>
                   Hi!I'm Sergey.
                </h4>
            </section>
        </main>
    );
};

export default Home;