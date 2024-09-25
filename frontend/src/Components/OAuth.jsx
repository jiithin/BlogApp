import { Button } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";


export default function OAuth() {

  return (
    <Button type='button' color='light' outline >
        <FcGoogle className='w-6 h-5 mr-2'/>
        Sign in with Google
    </Button>
  )
}