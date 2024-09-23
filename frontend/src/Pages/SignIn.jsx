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
          <p className='text-sm text-center mt-5 font-semibold text-purple-600/75'>
            Sign in with your email and password
          </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='example@mail.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
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

            <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='font-semibold text-purple-600'>
              Sign Up
            </Link>
          </div>

        </div>
        </div>
        </div>
  )
}

export default SignIn