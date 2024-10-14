import { Spinner } from 'flowbite-react'
import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SignInStart,SignInSuccess,SignInFailure } from '../redux/user/userSlice'


function SignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const signinData = sessionStorage.getItem('signinData');

// if (signinData) {
//   try {
//     signinData = JSON.parse(signinData);
//   } catch (e) {
//     console.error('Error parsing signinData:', e);
//   }
// }

  
  useEffect(() => {
    if (sessionStorage.getItem('signinData')) {
        try {
            //const signinData = sessionStorage.getItem('signinData')
            //console.log(signinData);
            fetchData();
          } catch (e) {
            console.error('Error parsing signinData:', e);
          }
      } else {
        dispatch(SignInFailure('Please fill all the fields'));
      }
    },[]);

    const fetchData = async () => {
    try {
      dispatch(SignInStart());
      const res = await fetch('/blog/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: sessionStorage.getItem('signinData'),
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
  };

  return (
    
    <div className='min-h-screen mt-20'>
      
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        <Spinner aria-label="Extra large spinner example" size="xl" color='purple'/><p>Loading...</p>
        </div>
        </div>
  )
}

export default SignIn