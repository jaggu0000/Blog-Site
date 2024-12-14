import React, { useContext } from 'react';
import blog_icon from '../assets/blog_icon.png';
import { NavLink } from 'react-router-dom';
import { Context } from '../App';

const Blog = () => {

    const { blogItems } = useContext(Context)
    console.log(blogItems);
    

    return (
        <div className='bg-gradient-to-r from-green-100 to-green-200'>
            <nav className='flex p-4 shadow justify-between h-[70px]'>
                <div className='flex gap-1'>
                    <img src={blog_icon} alt="" className='w-10' />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>
                <NavLink to="/createblog" className='bg-green-400 border border-green-500 rounded-3xl w-20 hover:bg-green-500 shadow flex items-center justify-center'>Create</NavLink>
            </nav>

            <div className=' min-h-[625px]'>
                {blogItems.map((blog) => (
                    <div key={blog.id} className='p-4'>
                        <NavLink className='text-3xl font-semibold' to={`/blogs/${blog.id}`}>{blog.title}</NavLink>
                        <p>{blog.body.substring(0, 100)}...</p>
                        <hr />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Blog
