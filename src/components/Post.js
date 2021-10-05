import React, {useEffect, useState} from 'react';
import sanityClient   from "../client";
import { Link } from "react-router-dom";

const Post = () => {
 const [ postData ,setPostData] = useState(null)
    useEffect(() =>{
        sanityClient
            .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{    
            asset->{
            _id,
            url} ,
            alt}
            }`).then((data) => setPostData(data) )
            .catch((e) => console.log(e.message))
    },[])
    console.log(postData)
    return (
        <main className='bg-blue-100 min-h-screen p-12'>
            <section className='container mx-auto mt-16'>
                <h1 className='text-5xl justify-center cursive text-blue-900'>Blog Post Page</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
                <div className='grid
                 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {postData&&postData.map( (post,index)=> (
                        <article key={index}>
                            <Link to={"/post/" + post.slug.current }  >
                           <span className='block h-64  relative rounded leading-snug bg-white border-l-8 border-blue-400 ' key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                                 className='w-full h-full rounded-r object-bottom absolute'/>
                            <span className='block relative h-full flex justify-end items-end  pr-4 pb-4'>
                                <h3 className='text-white-700 text-lg  font-bold px-3 py-4 bg-blue-800 text-yellow-300 bg-opacity-75 rounded '>
                                    {post.title}
                                </h3>

                            </span>

                        </span>
                            </Link>
                        </article >
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Post;