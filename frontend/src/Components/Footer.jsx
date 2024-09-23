import React from 'react'
import logo from "../assets/divulge.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

function Footer() {
  return (
  
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-5" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-purple-600/75">Divulge.</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jiithin-gangadharan/" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4">© 2024 <a href="https://github.com/jiithin/BlogApp/" class="hover:underline">Its just a blog app</a>. Fork it if youwant.</span>
        
        <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.linkedin.com/in/jiithin-gangadharan/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin />
                  
              </a>
              <a href="https://github.com/jiithin/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaGithubSquare />
              </a>
              <a href="https://dev.to/jiithin/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaDev />
              </a>
              <a href="https://portfolio-jithin.vercel.app/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <BiSolidUserRectangle />
              </a>
              
          </div>
    </div>
</footer>



  )
}

export default Footer