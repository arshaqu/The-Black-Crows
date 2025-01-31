import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import adminAxios from '../../Axios/AdminAxios'; // Assuming you use adminAxios for requests
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductAdd() {
  const navigate = useNavigate()
  const [ sizes , setSize ] = useState([])
  const [formData, setFormData] = useState({
    product: '',
    file: null,
    size: '',
    color: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'user_avatar') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData for file upload
    const payload = new FormData();
    payload.append('Product_name', formData.product);
    payload.append('Product_colour', formData.color);
    payload.append('Product_price', formData.price);
    payload.append('Product_description', formData.description);
    payload.append('Product_size', formData.size);
    if (formData.file) {
      payload.append('Product_image', formData.file); // Append file if provided
    }

    try {
      const response = await adminAxios.post(
        '/admin_side/products/',
        payload,
       
      );
      console.log('Response:', response.data);
      navigate('/admin_side/listproduct')
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const getSize = async () => {
    console.log('ehlo');
    
    const response = await adminAxios.get('/admin_side/sizes/')
    console.log(response.data.data);
    setSize(response.data.data) 
  }

  useEffect (()=> {
    getSize()
  },[])

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
    
      <div
        style={{ backgroundColor: '#476D7C' }}
        className="p-6 mt-12 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto md:ml-12 addproform halant mb-2"
      >
        <div className="flex justify-center items-center w-full md:w-auto">
          <h1 className="text-center text-4xl font-serif text-white">
            ADD PRODUCT
          </h1>
        </div>
        <div>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block mb-1 text-sm text-white" htmlFor="user_avatar">
                Upload file
              </label>
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="user_avatar"
                type="file"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="product" className="block mb-1 text-sm font-medium text-white">
                Product Name
              </label>
              <input
                style={{ width: '100%' }}
                type="text"
                id="product"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Name"
                value={formData.product}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex">
            <div className="mb-3">
            <label htmlFor="size" className="mb-1 text-sm font-medium text-white">
              Product Size
            </label>
            <select
              id="size"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              required
            >
              <option value="">Select a size</option>
              {sizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.Product_size}
                </option>
              ))}
            </select>
          </div>

              <div style={{ marginLeft: '5px' }} className="w-1/2">
                <label htmlFor="color" className="mb-1 text-sm font-medium text-white">
                  Product Color
                </label>
                <input
                  type="text"
                  id="color"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.color}
                  placeholder="Product color..."
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={{ marginLeft: '5px' }} className="w-full mb-3">
              <label htmlFor="price" className="mb-1 text-sm font-medium text-white">
                Product Price
              </label>
              <input
                type="text"
                id="price"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.price}
                placeholder="Product Price..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Description
              </label>
              <textarea
                id="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your Product Description here..."
              />
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#233142', height: '50px' }}
              className="w-full bg-dark hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-white text-white mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
