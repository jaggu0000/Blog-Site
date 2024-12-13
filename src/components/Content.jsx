import React from 'react'
import blog_icon from '../assets/blog_icon.png'

const Content = () => {
    return (
        <>
            <nav className='flex p-4 shadow justify-between h-[70px]'>
                <div className='flex gap-1'>
                    <img src={blog_icon} alt="" className='w-10' />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>
                <button className='bg-green-400 border border-green-500 rounded-3xl w-20 hover:bg-green-500 hover:shadow'>Back</button>
            </nav>
        </>
    )
}

export default Content
