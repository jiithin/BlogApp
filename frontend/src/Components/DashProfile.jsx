import React from 'react'
import { useSelector } from 'react-redux';
import { IoTrashBin } from "react-icons/io5";
import { Button } from 'flowbite-react';


function DashProfile() {
    const currentUser = useSelector((state) => state.user);
  return (
    <>
    <div className="h-full bg-transparent p-8 ">
        <div className="bg-transparent rounded-lg shadow-xl dark:shadow-slate-900 pb-8">
            <div className="w-full h-[150px] rounded-t bg-gradient-to-r to-blue-400 from-purple-500">

            </div>
            <div className="flex flex-col items-center -mt-20">
                {/* dont have to map */}
                <img src={currentUser.currentUser.profilePicture}   className="w-40 border-4 border-white rounded-full"/>
            
                <div className="flex items-center space-x-2 mt-2">

                
                  <p   className="divulge font-bold text-2xl text-center py-2 lg:block hidden"  >
                {currentUser.currentUser.username}  
                  </p>

                       {/* bluetick */}
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>

                <p className="text-gray-800 dark:text-gray-300">Person</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Somewhere, Earth</p>
            </div>

            <div className="flex-1 flex flex-col items-center lg:items-center justify-center px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">

                    <button className="flex items-center hover:bg-red-600 dark:hover:bg-red-600/75 text-red-500 hover:text-gray-100 dark:hover:text-gray-200 px-4 py-2 rounded font-bold text-sm space-x-2 transition duration-300">
                        <span>Delete Account</span><IoTrashBin/>
                    </button>
                    
                </div>
            </div>

{/* personal info */}
            <div className="flex-1 bg-inherit rounded-lg p-8">
                    <h4 className="text-xl text-gray-900 font-bold dark:text-purple-300">Personal Info</h4>
                    
                    <ul className="mt-2 text-gray-700">

                        <li className="flex border-y py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">User name:</span>
                            <div class="relative z-0">
                            <input type="text" name="username" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-200" placeholder="Usernmae" defaultValue={currentUser.currentUser.username}   />
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Email:</span>
                            <div class="relative z-0">
                            <input type="email" name="name" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-200" placeholder="Email" defaultValue={currentUser.currentUser.email}/>
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Password:</span>
                            <div class="relative z-0">
                            <input type="password" name="name" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-300" placeholder="Password" />
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Languages:</span>
                            <span className="text-gray-700 dark:text-gray-200">English</span>
                        </li>

                        <li className="flex py-2 w-full">
                        <Button
                              type='submit'
                              color='purple'
                              className='px-11 mt-4'
                              >Update
                        </Button>
                        </li>
                       
                    </ul>
                </div>
        </div>



       


    </div>
    </>
  )
}

export default DashProfile