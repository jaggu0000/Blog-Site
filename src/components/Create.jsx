import React from 'react'
import blog_icon from '../assets/blog_icon.png'

const Create = () => {
    return (
        <>
            <nav className='flex p-4 shadow justify-between h-[70px]'>
                <div className='flex gap-1'>
                    <img src={blog_icon} alt="" className='w-10' />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>
                <button className='bg-green-400 border border-green-500 rounded-3xl w-20 hover:bg-green-500 hover:shadow'>Submit</button>
            </nav>
            <div className='h-[625px] flex justify-center items-center'>
                <div className='bg-green-200 w-3/6 h-[500px] rounded-xl p-10 flex flex-col justify-center gap-2 hover:shadow'>
                    <input type="text" placeholder='Enter your Blog Title' className='p-2 rounded-xl text-2xl font-semibold bg-transparent outline-none'/>
                    <textarea name="blogContent" id="blogContent" rows="15" cols="85" placeholder='Enter Your Blog content...' className='rounded-xl p-2 outline-none bg-green-100' ></textarea>
                </div>

            </div>
        </>
    )
}

export default Create
