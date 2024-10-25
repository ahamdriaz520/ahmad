import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Register from './screen/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homedetail from './detailpages/Homedetail';
import Accessories from './Productitems/Accessories';
import Multiproducts from './Productitems/Multiproducts';
import Led from './Productitems/Led';
import Gaming from './Productitems/Gaming';
import Allproducts from './Productitems/Allproducts';
import Men from './Productitems/Men';
import Women from './Productitems/Women';
import Dress from './womenitems/Dress';
import Gouns from './womenitems/Gouns';
import Jeans from './womenitems/Jeans';
import Lehnga1 from './womenitems/Lehnga1';
import Lehnga2 from './womenitems/Lehnga2';
import Saree from './womenitems/Saree';
import MenJeans from './menitems/MenJeans';
import Kurta from './menitems/MenKurta';
import Kurta1 from './menitems/Kurta1';
import MenShirt from './menitems/MenShirt';
import Pants from './menitems/Pants';
import Shoes from './menitems/Shoes';
import Iphone from './pages/Iphone';
import Login from './screen/Login';
import Allmobiles from './Productitems/Allmobiles';
import Alllaptops from './Productitems/Alllaptops';
import Smartwatches from './Productitems/Smartwatches';
import Keyboards from './Productitems/Keyboards';
import Mouse from './Productitems/Mouse';
import Pen from './Productitems/Pen';
import Jeansdetail from './detailpages/Jeansdetail';
import Mobiledetail from './detailpages/Mobiledetail';
import Keyboarddetail from './detailpages/Keyboarddetail';
import Laptopdetail from './detailpages/Laptopdetail';
import Lcddetail from './detailpages/Lcddetail';
import Mousedetail from './detailpages/Mousedetail';
import Pendetail from './detailpages/Pendetail';
import Watchdetail from './detailpages/Watchdetail';
import Menjeandetail from './Mendetailpages/Menjeandetail';
import Kurtadetail from './Mendetailpages/Kurtadetail';
import Shirtsdetail from './Mendetailpages/Shirtsdetail';
import Pantsdetail from './Mendetailpages/Pantsdetail';
import Shoesdetail from './Mendetailpages/Shoesdetail';
import Dressdetail from './Womendetailpages/Dressdetail';
import Gounsdetail from './Womendetailpages/Gounsdetail';
import Womenjeans from './Womendetailpages/Womenjeans';
import Lehngadetail from './Womendetailpages/Lehngadetail';
import Lehnga2detail from './Womendetailpages/Lehnga2detail';
import Sareedetail from './Womendetailpages/Sareedetail';
import ShoppingCard from './redux/ShoppingCard';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Shirt from './womenitems/Shirt';
import Wshirtsdetail from './Womendetailpages/Wshirtsdetail';
import Header from './component/Header';
import Layout from './component/Layout';
import Errorpage from './pages/Errorpage';
import Sidebar from './component/Sidebar';
import Accessory from './pages/Accessory';
import Cloths from './pages/Cloths';
import Iphonedetail from './detailpages/Iphonedetail';

import Clothsdetail from './detailpages/Clothsdetail';
import Accessdetail from './detailpages/Accessdetail';
import Placeorder from './pages/Placeorder';
import Exploremenu from './component/Exploremenu';
import Forgotpassword from './screen/Forgotpassword';

function App() {
  return(
    <div className="App">
      {/* <Sidebar/> */}
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/explore' element={<Exploremenu/>}></Route>
    <Route path='/product/:_id' element={<Homedetail/>}></Route>
    <Route path='/iphone' element={<Iphone/>}></Route>
    <Route path='/iphone/:_id' element={<Iphonedetail/>}></Route>
    <Route path='/accessory' element={<Accessory/>}></Route>
    <Route path='/accessory/:_id' element={<Accessdetail/>}></Route>
    <Route path='/cloths' element={<Cloths/>}></Route>
    <Route path='/cloths/:_id' element={<Clothsdetail/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/*' element={<Errorpage/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/accessories' element={<Accessories/>}></Route>
    <Route path='/allproducts' element={<Allproducts/>}></Route>
    <Route path='/watches' element={<Smartwatches/>}></Route>
    <Route path='/watches/:_id' element={<Watchdetail/>}></Route>
    <Route path='/keyboards' element={<Keyboards/>}></Route>
    <Route path='/keyboards/:_id' element={<Keyboarddetail/>}></Route>
    <Route path='/mouses' element={<Mouse/>}></Route>
    <Route path='/mouses/:_id' element={<Mousedetail/>}></Route>
    <Route path='/Pen' element={<Pen/>}></Route>
    <Route path='/Pen/:_id' element={<Pendetail/>}></Route>
    <Route path='/games' element={<Gaming/>}></Route>
    <Route path='/Phones' element={<Allmobiles/>}></Route>
    <Route path='/Phones/:_id' element={<Mobiledetail/>}></Route>
    <Route path='/Laptops' element={<Alllaptops/>}></Route>
    <Route path='/Laptops/:_id' element={<Laptopdetail/>}></Route>
    <Route path='/Lcd' element={<Led/>}></Route>
    <Route path='/Lcd/:_id' element={<Lcddetail/>}></Route>
    <Route path='/multiproducts' element={<Multiproducts/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/menjeans' element={<MenJeans/>}></Route>
    <Route path='/menjeans/:_id' element={<Menjeandetail/>}></Route>
    <Route path='/kurta' element={<Kurta/>}></Route>
    <Route path='/Menkurta/:_id' element={<Kurtadetail/>}></Route>
    <Route path='/kurta1' element={<Kurta1/>}></Route>
    <Route path='/menshirt' element={<MenShirt/>}></Route>
    <Route path='/menshirt/:_id' element={<Shirtsdetail/>}></Route>
    <Route path='/pants' element={<Pants/>}></Route>
    <Route path='/pants/:_id' element={<Pantsdetail/>}></Route>
    <Route path='/shoes' element={<Shoes/>}></Route>
    <Route path='/shoes/:_id' element={<Shoesdetail/>}></Route>
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/dress' element={<Dress/>}></Route>
    <Route path='/dress/:_id' element={<Dressdetail/>}></Route>
    <Route path='/gouns' element={<Gouns/>}></Route>
    <Route path='/gouns/:_id' element={<Gounsdetail/>}></Route>
    <Route path='/jeans' element={<Jeans/>}></Route>
    <Route path='/jeans/:_id' element={<Womenjeans/>}></Route>
    <Route path='/jeans/:_id' element={<Jeansdetail/>}></Route>
    <Route path='/lehnga1' element={<Lehnga1/>}></Route>
    <Route path='/lehnga1/:_id' element={<Lehngadetail/>}></Route>
    <Route path='/lehnga2' element={<Lehnga2/>}></Route>
    <Route path='/lehnga2/:_id' element={<Lehnga2detail/>}></Route>
    <Route path='/saree' element={<Saree/>}></Route>
    <Route path='/saree/:_id' element={<Sareedetail/>}></Route>
    <Route path='/Shirt' element={<Shirt/>}></Route>
    <Route path='/Shirt/:_id' element={<Wshirtsdetail/>}></Route>
    <Route path='/product/:_id' element={<Homedetail/>}></Route>
   
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/shoppingcard' element={<ShoppingCard/>}></Route>
    <Route path='/order' element={<Placeorder/>}></Route>
    <Route path='/login' element={<Login/>}></Route> 
    <Route path='/forgot' element={<Forgotpassword/>}></Route> 
    </Routes>
  <ToastContainer/>
    </div>
  );
}
export default App;