import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData]= useState({});
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();


  const handleChange= (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value});
  }
const handleSubmit=async (e)=>{
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password){
    return setErrorMessage('Please fill all fields');
  }
  try {
    setLoading(true);
    setErrorMessage(null);
    const res=await fetch('/blog/auth/signup', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success===false){
      return setErrorMessage(data.message);
    }
    setLoading(false)
    if(res.ok){
      navigate('/sign-in');
    }
  }catch(error){
    setErrorMessage(error.message);

  }
}
  return (
    

    <div className='min-h-screen mt-20'>
      
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* left */}
        <div className='flex-1 mb-5'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
          <p id='auth'>SignUp</p>
            
          </Link>
          <p className='font-semibold text-center text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/75'>Create a Free Account</p>
          <p className='font-semibold text-center text-base text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/50'>Create a Free Account</p>
          <p className='font-semibold text-center text-sm text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/25'>Create a Free Account</p>
          <p className='font-semibold text-center text-xs text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400/25'>Create a Free Account</p>

        </div>

        {/* right */}
        <div className='flex-1 px-5'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="div">
            <Label value='Your Username' className='text-purple-800'/>
            <TextInput 
            type='text'
            placeholder='username'
            id='username' 
            onChange={handleChange}
            />
            </div>
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
                  :'Sign Up'
                }
               
            </Button>
            </form>

            <div className='flex gap-2 text-sm  mt-5 text-gray-500'>
            <span>Already have an account?</span>
            <Link to='/sign-in' className='font-bold text-purple-600'>
              Sign In
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

export default SignUp