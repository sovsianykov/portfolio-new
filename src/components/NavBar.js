import React from 'react';
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

const NavBar = () => {
    return (
        <header className='bg-blue-900 fixed z-10' style={{ width: "100%"}}>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to="/"
                             exact
                             activeClassName="text-white"
                              className="inline-flex items-center
                     py-6 px-3 mr-4  text-green-100 hover:text-yellow-400 text-4xl cursive
                     font-bold tracking-widest" >
                       Sergey
                    </NavLink >
                    <NavLink to="/post"
                             activeClassName="text-grey-100 bg-blue-600"
                             className="inline-flex items-center
                     py-3 px-3 my-6 rounded text-green-200 hover:text-blue-300 cursive"
                    >
                       Blog Posts
                    </NavLink >
                    <NavLink to="/project"
                             activeClassName="text-grey-100 bg-blue-600"
                             className="inline-flex items-center
                     py-3 px-3 my-6 rounded text-green-200 hover:text-blue-300 cursive"
                    >
                       Projects
                    </NavLink>
                    <NavLink to="/about"
                             activeClassName="text-grey-100 bg-blue-600"
                             className="inline-flex items-center
                     py-3 px-3 my-6 rounded text-green-200 hover:text-blue-300 cursive"
                    >
                       About me!
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/in/serhii-ovsianykov-2848b058/'
                                target = "_blank"
                                fgColor="#fff"
                                style={{ height : 35 , width:35}}
                                className="mr-4"
                     />
                    <SocialIcon url='https://twitter.com/Lush_Life_Kiev'
                                target = "_blank"
                                fgColor="#fff"
                                style={{ height : 35 , width:35}}
                                className="mr-4"
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;