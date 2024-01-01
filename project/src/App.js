import React from 'react';
import './App.css';
import Login from './Page/Login';
import RegistrationPage from './Page/RegistrationPage';
import Productpage from './ProductPage/Productpage';
import ProductCard from './Page/Cart/ProductCard';
import CustomerList from './Page/Customer/CustomerList';
import AllOrders from './Page/AllOrders/AllOrders';
import MyOrders from './Page/MyOrder/MyOrders';
import OrderDetails from './Page/OrderDetails/OrderDetails';
import ApiGet from './_services/ApiGet';
import ApiPost from './_services/ApiPost';


function App() {
  return (
    <div className="App">
      
      {/* <Login/> */}
       {/* /   <RegistrationPage/> */}
          <Productpage/>
          {/* <ProductCard/> */}
          {/* <CustomerList/> */}
          {/* <AllOrders/> */}
          {/* <MyOrders/> */}
          {/* <OrderDetails/> */}
          {/* <ApiGet/> */}
          {/* <ApiPost/> */}

      </div>
  );
}

export default App;
