import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './Admin.css';
import adminAxios from '../../Axios/AdminAxios';
import { useNavigate } from 'react-router-dom';

function SizeList() {
    const navigate = useNavigate()
    const [size, setSize] = useState([]);
    

    const getSize = async () => {
        try {
            const response = await adminAxios.get('/admin_side/sizes/');
            console.log(response.data); 
            if (response.data && response.data.data) {
                setSize(response.data.data); 
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleDelete = async (id) => {
        console.log(id,'id');
        try {
            const response = await adminAxios.delete(`/admin_side/sizes/${id}/`)         
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }


    const handleOnEdit = async (id) => {
        try {
            navigate(`/admin/editsize/${id}/`)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSize();
    }, []);

    return (
        <div style={{ width: '98%' }} className="flex flex-col md:flex-row mb-10 montserrat">
            <Sidebar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <h1
                    style={{ width: '90%' }}
                    className="text-center text-4xl font-extrabold mb-4 mt-5 text-white bg-gray-800 p-2 rounded-lg shadow-lg"
                >
                    LIST SIZE
                </h1>

                <div
                    style={{ backgroundColor: '#476D7C', width: '60%', marginLeft: '5px' }}
                    className="p-6 rounded-lg md:w-3/4 addproform halant listsize_length"
                >
                    <div
                        style={{ width: '100%' }}
                        className="relative overflow-x-auto shadow-md sm:rounded-lg listsize_length"
                    >
                        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-gray-800 dark:text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Size Name</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {size.length > 0 ? (
                                    size.map((item) => (
                                        <tr
                                            key={item.id}
                                            style={{ backgroundColor: '#476D7C' }}
                                            className="bg-blue-500 border-b border-gray-800"
                                        >
                                            <td
                                                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                                            >
                                                {item.Product_size || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href=" # " onClick={()=>{handleOnEdit(item.id)} } className="font-medium text-white hover:underline">
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a onClick={()=>{handleDelete(item.id)}} href=" # " className="font-medium text-white hover:underline montserrat">
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="px-6 py-4 text-center text-white montserrat"
                                        >
                                            No sizes available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeList;
