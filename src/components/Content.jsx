import React, { useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import blog_icon from '../assets/blog_icon.png'
import { Context } from '../App'

const Content = () => {

    const { id } = useParams();
    const { blogItems } = useContext(Context);
    const blog = blogItems[id];

    if (!blog) {
        return <p>Blog not found!</p>
    }

    return (
        <>
            <nav className='flex p-4 shadow justify-between h-[70px]'>
                <div className='flex gap-1'>
                    <img src={blog_icon} alt="" className='w-10' />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>
                <NavLink to="/blogs" className='bg-green-400 border border-green-500 rounded-3xl w-20 hover:bg-green-500 shadow flex items-center justify-center'>Back</NavLink>

            </nav>
            
            <div className='h-[625px] flex justify-center items-center'>
                <div className='bg-green-200 w-3/6 h-[500px] rounded-xl p-10 flex flex-col justify-start gap-2 hover:shadow'>
                <h2 className='text-3xl font-semibold'>{blog.title}</h2>
                <p>{blog.bodyContent}</p>
                </div>
            </div>
        </>
    )
}

export default Content
