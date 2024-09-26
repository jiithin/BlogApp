import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SignInStart,SignInSuccess,SignInFailure } from '../redux/user/userSlice'
import OAuth from '../Components/OAuth'

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  //console.log(formData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(SignInFailure('Please fill all the fields'));
    }
    try {
      dispatch(SignInStart());
      const res = await fetch('/blog/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(SignInFailure(data.message));
      }

      if (res.ok) {
        dispatch(SignInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  }
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
        <div className='flex-1 px-5'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your Email' className='text-purple-800'/>
              <TextInput
                type='email'
                placeholder='example@mail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Password' className='text-purple-800'/>
              <TextInput
                type='password'
                placeholder='password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
            className='sigh'
              type='submit'
              disabled={loading}
              >
                 {
                  loading?(
                  <>
                  <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>
                    
                  )
                  :'Sign In'
                }
            </Button>
            <OAuth/>
            </form>

            <div className='flex gap-2 text-sm mt-5 text-gray-500'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='font-bold text-purple-500'>
              Create an account.
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5 'color='failure'>
                {errorMessage}
              </Alert>
            )
          }

        </div>
        </div>
        </div>
  )
}

export default SignIn