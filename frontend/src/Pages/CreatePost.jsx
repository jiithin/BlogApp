import React from 'react'
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';


import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);
  
    const navigate = useNavigate();
  
    const handleUpdloadImage = async () => {
      try {
        if (!file) {
          setImageUploadError('Please select an image');
          return;
        }
        setImageUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + '-' + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImageUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setImageUploadError('Image upload failed');
            setImageUploadProgress(null);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUploadProgress(null);
              setImageUploadError(null);
              setFormData({ ...formData, image: downloadURL });
            });
          }
        );
      } catch (error) {
        setImageUploadError('Image upload failed');
        setImageUploadProgress(null);
        console.log(error);
      }
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('/blog/post/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.message);
          return;
        }
  
        if (res.ok) {
          setPublishError(null);
          navigate(`/post/${data.slug}`);
        }
      } catch (error) {
        setPublishError('Something went wrong');
      }
    };
  return (
    <>
    <div className='p-3 max-w-6xl mx-auto min-h-screen'>
      <p className='divulge text-center lg:text-3xl md:text-xl sm:text-xl my-7 '>Create a post</p>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>

            {/* small devices */}
            <div className=" lg:hidden md:hidden flex justify-between">
            <input
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1 peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 font-semibold dark:text-gray-100'
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <button type='submit' className=' mx-3 bg-purple-600 w-auto h-11 px-5 font-semibold text-white rounded-md'>
          Publish
        </button>
            </div>

          {/* large devices */}
          <input
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1 hidden lg:block md:block peer w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 font-bold dark:text-gray-100'
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          
          <div className=" justify-between hidden lg:inline md:inline">
          <button type='button' className='hover:bg-red-500 hover:text-white font-semibold w-auto h-11 px-5 dark:text-white rounded-md'>
          Cancel
        </button>
          <button type='submit' className='mx-3 bg-purple-600 w-auto h-11 px-5 font-semibold text-white rounded-md'>
          Publish
        </button>
          </div>
          
        </div>

        

        {/* post-input */}
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12 text-gray-100'
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}

        <div className="flex gap-4 justify-between">
         {/* category */}
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value='uncategorized'>Select a category</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>


          {/* images upload */}
          <div className='flex gap-4 items-center justify-between'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}
          >
            {/* {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )} */}
            Upload Image
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}

    </div>
        
      </form>
    </div>
    </>
  )
}

export default CreatePost