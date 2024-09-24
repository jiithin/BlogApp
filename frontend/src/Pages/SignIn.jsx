import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    
    <div className='min-h-screen mt-20'>
      
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
          <p id='auth'>Sign In</p>
            
          </Link>
          <p className='font-semibold text-center text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/75'>Sign In with your existing email.</p>
          <p className='font-semibold text-center text-base text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/50'>Sign In with your existing email.</p>
          <p className='font-semibold text-center text-sm text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/25'>Sign In with your existing email.</p>
          <p className='font-semibold text-center text-xs text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/25'>Sign In with your existing email.</p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your email' className='text-purple-800'/>
              <TextInput
                type='email'
                placeholder='example@mail.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' className='text-purple-800'/>
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              />
            </div>
            <Button
            className='sigh'
              type='submit'
              >
                Sign In
            </Button>
            </form>

            <div className='flex gap-2 text-sm mt-5 text-purple-800'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='font-bold text-purple-500'>
              Create an account.
            </Link>
          </div>

        </div>
        </div>
        </div>
  )
}

export default SignIn