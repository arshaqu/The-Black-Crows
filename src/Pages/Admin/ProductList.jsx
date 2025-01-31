import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import adminAxios from '../../Axios/AdminAxios';
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const getProducts = async () => {
        try {
            const response = await adminAxios.get('/admin_side/products/');
            if (response.data.success) {
                const productList = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
                setProducts(productList);
            } else {
                console.error('Failed to fetch products:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    
    const handleOnEdit = async (id) => {
        console.log(id);
        
        try {
            navigate(`/admin/editproduct/${id}/`)     
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleOnDelete = async (id) =>{
        try {
            console.log(id);
            
           const response = await adminAxios.delete(`/admin_side/products/${id}/`)
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ width: '98%' }} className="flex flex-col md:flex-row">
            <Sidebar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <h1
                    style={{ width: '90%' }}
                    className="text-center text-4xl font-extrabold mb-4 mt-5 text-white bg-gray-800 p-2 rounded-lg shadow-lg"
                >
                    Product List
                </h1>

                <div
                    style={{ backgroundColor: '#476D7C', width: '90%' }}
                    className="p-6 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto addproform halant"
                >
                    <div style={{ width: '100%' }} className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-gray-800 dark:text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Product Name</th>
                                    <th scope="col" className="px-6 py-3">Color</th>
                                    <th scope="col" className="px-6 py-3">Size</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        style={{ backgroundColor: '#476D7C' }}
                                        className="bg-blue-500 border-b border-gray-800"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                                        >
                                            {product.Product_name}
                                        </th>
                                        <td className="px-6 py-4">{product.Product_colour}</td>
                                        <td className="px-6 py-4">{product.Product_size}</td>
                                        <td className="px-6 py-4">${product.Product_price}</td>
                                        <td className="px-6 py-4">
                                            <a href=" # " onClick={() => {handleOnEdit(product.id)}} className="font-medium text-green-500 hover:underline">
                                                Edit
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href=" # " onClick={()=>{handleOnDelete(product.id)}} className="font-medium text-red-500 hover:underline">
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {products.length === 0 && (
                            <p className="text-center text-white mt-4">No products available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
