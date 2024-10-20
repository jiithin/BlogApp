import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";

  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { IoSearchOutline } from "react-icons/io5";
  import { CgDarkMode } from "react-icons/cg";
  

  import logo from "../assets/divulge.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

import { signoutSuccess } from '../redux/user/userSlice.js';

function Header() {
  const path = useLocation().pathname;
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

//console.log(currentUser.currentUser.username); if not in {}

     // signout
     const handleSignout = async () => {
      try {
        const res = await fetch('/blog/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
          navigate('/');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (


// <Navbar fluid rounded className='border-b-2 p-5'>
// <Navbar.Brand href="https://flowbite-react.com">
//   <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//   <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Divulge.</span>
// </Navbar.Brand>
// <form >
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={IoSearchOutline}
//           className=" lg:inline md:hidden"
          
          
//         />
//       </form>
// <div className="flex md:order-2">
//   <Dropdown
//     arrowIcon={false}
//     inline
//     label={
//       <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
//     }
//   >
//     <Dropdown.Header>
//       <span className="block text-sm">Bonnie Green</span>
//       <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//     </Dropdown.Header>
//     <Dropdown.Item>Dashboard</Dropdown.Item>
//     <Dropdown.Item>Settings</Dropdown.Item>
//     <Dropdown.Item>Projects</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item>Sign out</Dropdown.Item>
//   </Dropdown>
//   <Navbar.Toggle />
// </div>
// <Navbar.Collapse>
//   <Navbar.Link href="#" active>
//     Home
//   </Navbar.Link>
//   <Navbar.Link href="#">About</Navbar.Link>
//   <Navbar.Link href="#">Services</Navbar.Link>
//   <Navbar.Link href="#">Pricing</Navbar.Link>
//   <Navbar.Link href="#">Contact</Navbar.Link>
// </Navbar.Collapse>
// </Navbar> 

<Navbar className='bg-transparent dark:bg-inherit backdrop-blur-0 p-5 '>
<Link
  to='/'
  className='self-center whitespace-nowrap text-sm sm:text-xl  flex'
>
    <img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo"/>
    <span className="divulge self-center whitespace-nowrap lg:text-2xl text-lg font-poppins poppins-semibold">Divulge.</span>
</Link>



<div className='flex gap-2 md:order-2'>

{/* <Button className='w-12 h-10 lg:hidden' color='light'>
  <IoSearchOutline />
</Button> */}

<form >
  <TextInput
    type='text'
    placeholder='Search...'
    rightIcon={IoSearchOutline}
    className='hidden lg:inline '

  />
</form>
{/* darkmode button */}

  <button type="button" className="w-12 h-10 hidden sm:inline  bg-transparent   rounded-lg text-sm px-3 text-center items-center  dark:bg-inherit" 
  onClick={() => dispatch(toggleTheme())}>
  {theme === 'light' ?(<CgDarkMode className='w-5 h-5 text-purple-600'/>):(<CgDarkMode className='w-5 h-5 text-indigo-300'/>)}
</button>


    
    {currentUser ? (
      <Dropdown
      label={<Avatar alt="User settings" img={currentUser.profilePicture} size='sm' />}
      arrowIcon={false}
      inline
      className='rounded-2xl'
    >
      <Dropdown.Header>
        <span className="block text-sm font-bold text-center text-purple-500 dark:text-purple-400">{currentUser.username}</span>
        <span className="block truncate text-sm text-center font-medium">{currentUser.email}</span>
      </Dropdown.Header>

      <Link to={'/dashboard'} >
      <Dropdown.Item >Dashboard</Dropdown.Item>
      </Link>

      <Link to={'/dashboard?tab=profile'}>
      <Dropdown.Item>Profile</Dropdown.Item>
      </Link>
      
      <Dropdown.Divider />
      <Dropdown.Item className=' text-red-400 dark:text-inherrit rounded-b-2xl' 
      onClick={handleSignout}>
        Sign out
        </Dropdown.Item>
    </Dropdown>
    ):(
          <Link to='/sign-in' className=' '>
            <button className='divulge bg-transparent dark:bg-inherit py-2 font-poppins poppins-semibold'>
            Sign In
            </button>
        </Link>
    )}


  <Navbar.Toggle className=' text-purple-400 dark:text-purple-400'/>
</div>

<Navbar.Collapse className='lg:text-center bg-transparent '>
<form >
  <TextInput
    type='text'
    placeholder='Search...'
    rightIcon={IoSearchOutline}
    className='lg:hidden sm:hidden'

  />

  
</form>
  <Navbar.Link  as={'div'} className='hover:translate-y-0.5 duration-300 '>
    <Link to='/' className='text-purple-500 dark:text-purple-400 lg:text-base  font-poppins poppins-medium'>Home</Link>
  </Navbar.Link>
  <Navbar.Link  as={'div'} className='hover:translate-y-0.5  duration-300'>
    <Link to='/projects' className='text-purple-500 dark:text-purple-400 lg:text-base font-poppins poppins-medium'>Blogs</Link>
  </Navbar.Link>
  <Navbar.Link  as={'div'} className='hover:translate-y-0.5  duration-300'>
    <Link to='/about' className='text-purple-500 dark:text-purple-400 lg:text-base font-poppins poppins-medium'>Features</Link>
  </Navbar.Link>
  <Navbar.Link  as={'div'} className='hover:translate-y-0.5 duration-300'>
    <Link to='/about' className='text-purple-500 dark:text-purple-400 lg:text-base font-poppins poppins-medium'>Contact</Link>
  </Navbar.Link>
  
</Navbar.Collapse>


</Navbar>
  )
}

export default Header