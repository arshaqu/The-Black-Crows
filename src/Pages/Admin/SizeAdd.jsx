import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import adminAxios from '../../Axios/AdminAxios';
import { useNavigate } from 'react-router-dom';

function SizeAdd() {
  const navigate = useNavigate()
  const [ size , setSize ] = useState('')
  console.log(size);

      const handleOnClick = async () =>{
        try{
            const response = await adminAxios.post('/admin_side/sizes/',{Product_size:size})
            console.log(response);
            navigate('/admin/sizelist');
        }catch(error){
          console.log(error);
        }
      }

    
      return (
        <div className="flex flex-col md:flex-row ">
          <Sidebar />
        
          <div style={{backgroundColor:'#476D7C'}} className=" p-6 mt-12 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto md:ml-12 addproform halant mb-2">
          <div className="flex justify-center items-center w-full md:w-auto">
          <h1 className="text-center  text-4xl font-serif text-white">
      ADD SIZE
    </h1>
      </div>
           <div>
            
      <div className="w-full ">
        <label htmlFor="size" className="mb-1 text-sm font-medium text-white">
          Product size
        </label>
        <input
          type="text"
          id="size"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder='Product Size...'
          onChange={(e)=>{setSize(e.target.value)}}
          required
        />
      </div>
  

      <button
        type="submit"
        style={{backgroundColor:'#233142',height:'50px'}}
        onClick={handleOnClick}
        className="w-full  bg-dark hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-white text-white mt-5"
      >
        Submit
      </button>
           </div>
          </div>
        </div>
      );
    } 

export default SizeAdd