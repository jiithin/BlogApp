import React from 'react'
import guidelines from '../assets/guidelines.webp'
function Limbo() {
  return (

<div className="py-16 bg-transparent font-Montserrat">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src={guidelines} alt="guidelines" className='rounded-lg'/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <p className="text-2xl text-purple-900 dark:text-purple-400 font-bold md:text-4xl">Updates to our Quality Guidelines for sensitive content</p>
          <div className='text-gray-700 dark:text-purple-200'>


          <p className="mt-6 font-bold text-xl underline underline-offset-4">Respect and Civility
</p>
<p className="mt-1 "><span className='font-semibold'>	&#8226; Be Respectful:</span> Treat everyone with kindness and respect, regardless of their opinions or beliefs. Avoid using offensive language, personal attacks, or discriminatory remarks.</p>
<p className="mt-1 "><span className='font-semibold'>	&#8226; Avoid Harassment:</span>  Refrain from any form of harassment, including cyberbullying, stalking, or threats.
Respect Privacy: Be mindful of others' privacy. Avoid sharing personal information without their consent.
</p>

<p className="mt-4 font-bold text-xl underline underline-offset-4">Content Guidelines</p>

<p className="mt-1 "><span className='font-semibold'>	&#8226; No Sensitive Content:</span>  Refrain from posting content that is sexually suggestive, explicit, or exploits children.</p>
          <p className="mt-1"><span className='font-semibold'>
          &#8226; No Nudity:</span>  Avoid posting images or videos that contain nudity or partial nudity.</p>
          <p className="mt-1 ">
          <span className='font-semibold'>	&#8226; No Hate Speech:</span> 
 Prohibit the posting of content that promotes hate, discrimination, or violence against any individual or group.
</p>
<p className="mt-1 "><span className='font-semibold'>	&#8226; No Plagiarism:</span>  Ensure that all content you post is original or that you have obtained proper permission to use it.</p>

          <p className="mt-1 "><span className='font-semibold'>	&#8226; Community Safety:</span> 
Report Abuse: If you encounter any violations of these guidelines, please reach out it to the app administrators.
</p>
<p className="mt-1 "><span className='font-semibold'>	&#8226; Be Responsible:</span> 
 Use the app responsibly and avoid posting content that could harm others or violate the law.
By following these guidelines, we can create a positive and inclusive community on our blog app.</p>
<p className="mt-1 text-rose-600 dark:text-rose-300">
&#10022; By following these guidelines, we can create a positive and inclusive community on our blog app.</p>
</div>
        </div>
      </div>
  </div>
</div>

  )
}

export default Limbo