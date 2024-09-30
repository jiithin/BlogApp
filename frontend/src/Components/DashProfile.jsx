import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { IoTrashBin } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Alert, Button } from 'flowbite-react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';


function DashProfile() {
    const currentUser = useSelector((state) => state.user);
    const [profileImage, setProfileImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    
    const [profileImageUploadProgress, setProfileImageUploadProgress] = useState(null);
    const [profileImageUploadError, setProfileImageUploadError] = useState(null);
    const [profileImageUploading, setProfileImageUploading] = useState(false);
    const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
    const [updateUserError, setUpdateUserError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
    const fileSelector =useRef();

    console.log(profileImageUploadProgress,profileImageUploadError);
    const handleImage=(e)=>{
        const file=(e.target.files[0]);

        if(file){
            setProfileImage(file);
            setImageUrl(URL.createObjectURL(file));
        } 
    };

    useEffect(() => {
        if (profileImage) {
          uploadImage();
        }
      }, [profileImage]);

// using firebase to upload image
   //set storage and rules in firebase before doing this
      const uploadImage = async () => {
        setProfileImageUploading(true);
        setProfileImageUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + profileImage.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, profileImage);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
            setProfileImageUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setProfileImageUploadError(
              'Upload Failed, Image must be less than 2 MB'
            );
            setProfileImageUploadProgress(null);
            setProfileImage(null);
            setProfileImage(null);
            setProfileImageUploading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUrl(downloadURL);
              setFormData({ ...formData, profilePicture: downloadURL });
              setProfileImageUploading(false);
            });
          }
        );
      };
  return (
    <>
    <div className="h-full bg-transparent p-8  ">
        <div className="bg-transparent dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-500/25 pb-8">
        <form  className='flex flex-col'>
            <div className="w-full h-[150px] rounded-t-2xl bg-gradient-to-r to-blue-400 from-purple-500">

            </div>
            <div className="flex flex-col items-center -mt-20">
                {/* dont have to map */}
                <input type="file" accept='image/*' onChange={handleImage} ref={fileSelector} hidden/>

                <div onClick={()=>fileSelector.current.click()} className='bg-purple-400 rounded-2xl'>
                <img src={profileImageUploadProgress && profileImageUploadProgress ==100 && imageUrl || currentUser.currentUser.profilePicture}   
                className={`w-40 border-4 border-purple-400 rounded-2xl ${profileImageUploadProgress && profileImageUploadProgress <100 && 'opacity-60'}`}/>
                </div>
                <div className="flex items-center space-x-2 mt-2">

                
                  <p   className="divulge font-bold text-2xl text-center py-2 lg:block "  >
                {currentUser.currentUser.username}  
                  </p>

                       {/* bluetick */}
                        <RiVerifiedBadgeFill className='text-blue-500'/>
                </div>

                <p className="text-gray-800 dark:text-gray-300">Person</p>

            </div>

            <div className="flex-1 flex flex-col items-center lg:items-center justify-center px-8">
                <div className="flex items-center space-x-4 mt-2">

                    <button className="flex items-center hover:bg-red-600 dark:hover:bg-red-600/75 text-red-500 hover:text-gray-100 dark:hover:text-gray-200 px-4 py-2 rounded font-bold text-sm space-x-2 transition duration-300">
                        <span>Delete Account</span><IoTrashBin/>
                    </button>
                    
                </div>
                {profileImageUploadError && (
                 <Alert color='failure' >{profileImageUploadError}</Alert>
                  )}
            </div>

{/* personal info */}
            <div className="flex-1 bg-inherit rounded-lg p-8">
                    <h4 className="text-xl text-gray-900 font-bold dark:text-purple-300">Personal Info</h4>
                    
                    <ul className="mt-2 text-gray-700">

                        <li className="flex border-y py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">User name:</span>
                            <div class="relative z-0">
                            <input type="text" name="username" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-200" placeholder="Usernmae" defaultValue={currentUser.currentUser.username}   />
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Email:</span>
                            <div class="relative z-0">
                            <input type="email" name="name" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-200" placeholder="Email" defaultValue={currentUser.currentUser.email}/>
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Password:</span>
                            <div class="relative z-0">
                            <input type="password" name="name" class="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-300" placeholder="Password" />
                            </div>
                        </li>

                        <li className="flex border-b py-2 dark:border-gray-600">
                            <span className="font-bold w-24 dark:text-gray-400">Languages:</span>
                            <span className="text-gray-700 dark:text-gray-200">English</span>
                        </li>

                        <li className="flex py-2 w-full">
                        <Button
                              type='submit'
                              color='purple'
                              className='px-11 mt-4'
                              >Update
                        </Button>
                        </li>
                       
                    </ul>
                </div>
                </form>

                {/* {updateUserSuccess && (
        <Alert color='success' className='mt-5'>
          {updateUserSuccess}
        </Alert>
      )}
      {updateUserError && (
        <Alert color='failure' className='mt-5'>
          {updateUserError}
        </Alert>
      )}
      {error && (
        <Alert color='failure' className='mt-5'>
          {error}
        </Alert>
      )} */}
        </div>



       


    </div>
    </>
  )
}

export default DashProfile