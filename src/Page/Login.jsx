import React, { useState } from 'react'

const Login = () => {
    const [state,setState] = useState('Login');
  return (
    
    <div>
        <div className='flex justify-center  items-center my-44 '>
        <div className='border-2 rounded-lg'>
            <ul className='grid justify-items-center gap-8 p-9  '>
            <li className='font-bold text-3xl '>{state}</li>
            {state==='Sign Up'?
            <li>
             <input
                type="text"
                class="p-2 w-[300px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
              />
              </li>:<></>}
            <li>
             <input
                type="email"
                class="p-2 w-[300px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
              </li>
              <li>
             <input
                type="password"
                class="p-2 w-[300px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
              </li>
              
              <li>
                <button className='bg-blue-500 w-[300px] font-medium text-white h-[42.46px] rounded-lg '>Login</button>
              </li>
              {state==='Sign Up'?
              <li>Already have an account?<span className='text-blue-500 cursor-pointer' onClick={()=>{setState('Login')}}>Login</span></li>
              :
              <li>Don't have account?<span className='text-blue-500 cursor-pointer'onClick={()=>{setState('Sign Up')}} >Signup</span></li>}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Login