import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Users/Home';
import AdminLogin from './Pages/Admin/AdminLogin';
import Dashboard from './Pages/Admin/Dashboard';
import ProductAdd from './Pages/Admin/ProductAdd';
import ProductList from './Pages/Admin/ProductList';
import SizeAdd from './Pages/Admin/SizeAdd';
import SizeEdit from './Pages/Admin/SizeEdit';
import SizeList from './Pages/Admin/SizeList';
import ProductEdit from './Pages/Admin/ProductEdit';
import Orders from './Pages/Admin/Orders';
import OrderDetails from './Pages/Admin/OrderDetails'
import Login from './Pages/Users/Login';
import Register from './Pages/Users/Register';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/addproduct' element={<ProductAdd/>}/>
      <Route path='/admin/editproduct/:id' element={<ProductEdit/>}/>
      <Route path='/admin/listproduct' element={<ProductList/>}/>
      <Route path='/admin/addsize' element={<SizeAdd/>}/>
      <Route path='/admin/sizelist' element={<SizeList/>}/>
      <Route path='/admin/editsize/:id' element={<SizeEdit/>}/>
      <Route path='/admin/orders' element={<Orders/>}/>
      <Route path='/admin/order_Detail' element={<OrderDetails/>}/>


      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>



    </Routes>
   </BrowserRouter>
  );
}

export default App;
