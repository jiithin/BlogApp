import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";

  import { Link, useLocation } from 'react-router-dom';
  import { IoSearchOutline } from "react-icons/io5";
  import { CgDarkMode } from "react-icons/cg";
  

  import logo from "../assets/divulge.png"

function Header() {
  const path = useLocation().pathname;
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

<Navbar className='border-b-2 p-4 shadow-[0_35px_60px_-15px_rgba(188,140,255,0.12)]'>
<Link
  to='/'
  className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex'
>
    <img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" />
    <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-purple-400">Divulge.</span>
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
  <button type="button" className="w-12 h-10 hidden sm:inline  text-purple-500 bg-white hover:bg-gray-100 border border-gray-200 hover:text-purple-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-teal-500  dark:hover:bg-gray-700 ">
  <CgDarkMode />
</button>
    
    <Link to='/sign-in'>
      <Button className='sigh' outline>
        Sign In
      </Button>
    </Link>

  <Navbar.Toggle className='sigh'/>
</div>

<Navbar.Collapse className='ms-auto me-5'>
<form >
  <TextInput
    type='text'
    placeholder='Search...'
    rightIcon={IoSearchOutline}
    className='lg:hidden'

  />
</form>
  <Navbar.Link active={path === '/'} as={'div'}>
    <Link to='/' className='text-purple-600'>Home</Link>
  </Navbar.Link>
  <Navbar.Link active={path === '/projects'} as={'div'}>
    <Link to='/projects' className='text-purple-600'>Projects</Link>
  </Navbar.Link>
  <Navbar.Link active={path === '/about'} as={'div'}>
    <Link to='/about' className='text-purple-600'>About</Link>
  </Navbar.Link>
  
</Navbar.Collapse>


</Navbar>
  )
}

export default Header