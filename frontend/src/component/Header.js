import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import "../Navbar.css";
import { FaTruckMoving } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import Swal from "sweetalert2";
import { IoBasketSharp } from "react-icons/io5";
import Searchresultslist from "./Searchresultslist";
const Header = () => {
  const [input, setInput] = useState("");
  const [results , setResults]= useState([])
  const fetchData = (value)=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json =>{
      const results = json.filter((user)=>{
        return value &&
         user &&
          user.name &&
           user.name.
           toLowerCase().includes(value)
      })
     setResults(results)
    })
  }
  const handlechange = (value)=>{
    setInput(value)
    fetchData(value)
  }
  const getdata = useSelector((state) => state.cartReducer.carts);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleclick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout from this account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAuth({
          ...auth,
          user: null,
          token: " ",
        });
        localStorage.removeItem("auth");
        navigate("/login");
        Swal.fire({
          title: "Logedout!",
          text: "You're logout from this Page",
          icon: "success",
        });
      }
    });
  };
  const logout = () => {
    if (logout) {
      toast.success("user logged out successfully 😶");
    }
  };
  return (
    <>
     <div className='navbar fixed-top' style={{backgroundColor:'#f85606'}}>
     <div className="d-flex gap-3">
     <FaTruckMoving className='fs-2 fw-bold mt-2'/>
     <p className="text-white fw-bold fs-6" style={{marginTop:'13px'}}>
          Free Shipping when shopping upto $1000
        </p>
     </div>
            <div className='navbar-right'>
         
                 <div className='navbar-search-icon'>
      <Link to='/shoppingcard'>< IoBasketSharp className='fs-1 fw-bold text-dark ' />
      <Badge badgeContent={getdata.length} className="mb-3 me-5 fw-bold" style={{color:'white',}}></Badge></Link>
     
            </div>
            
            </div>
        </div>
      {/* <div className="free d-flex fixed-top">
        <div className="text-tertiary fs-2">
          <FaTruckMoving className="mb-3" />
        </div>
        <p className="text-white mt-2 ms-3  fw-bold">
          Free Shipping when shopping upto $1000
        </p>
      </div> */}
      {/* <div className="main_header">
  <div className="container-fluid">
    <div className="fs-5 fw-bold">🛒 E_Commerce</div>
  <div className="search-box">
    <input type="text" value='' placeholder="Enter The Product Name" autoComplete="off"></input>
    <button >Search</button>
  </div>
  <div className="icon">
    <div className="accout">
<div className="user_icon">
<FaRegUser/>
</div>
<p>Hello, User</p>
    </div>
<IoMdHeartEmpty/>
<IoBagCheckOutline/>
  </div>
  </div>
</div> */}
      {/* <div className="main-header">
<nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">🛒 E_Commerce</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
      
     
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/cart'><FaRegUser/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/cart'>Hello,user</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/cart'><IoMdHeartEmpty/> <IoBagCheckOutline/></Link>
        </li>
      </ul>

  </div>
</nav>
</div> */}
      <nav className="navbar navbar-expand-lg Navbar fixed-top ff">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul className="navbar-nav me-auto mx-3  mb-lg-0 mt-2">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <p className="" style={{ fontWeight: "600" }}>
                    {" "}
                    Home
                  </p>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  to="/product"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="" style={{ fontWeight: "600" }}>
                    Product
                  </p>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Phones">
                      Phones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Laptops">
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Watches">
                      Smart watches
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/Lcd">
                      LCD's
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/keyboards">
                      Keyboards
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mouses">
                      Mouse
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Pen">
                      Jel Pens
                    </Link>
                  </li>
                  {/* <li><Link className='dropdown-item' to='/accessories'>Accessories</Link></li>
            <li><Link className='dropdown-item' to='/allproducts'>Allproducts</Link></li>
            <li><Link className='dropdown-item' to='/games'>Gaming</Link></li>
           
          <li><Link className='dropdown-item' to='/multiproducts'>MultiProducts</Link></li>  */}
                </ul>
                
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  to="/men"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="" style={{ fontWeight: "600" }}>
                    Men
                  </p>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/menjeans">
                      Men Jeans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kurta1">
                      Kurta1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pants">
                      Men Pants
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/menshirt">
                      Men Shirts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shoes">
                      Men Shoes
                    </Link>
                  </li>
                  {/* <li><Link className='dropdown-item' to='/accessories'>Accessories</Link></li>
            <li><Link className='dropdown-item' to='/allproducts'>Allproducts</Link></li>
            <li><Link className='dropdown-item' to='/games'>Gaming</Link></li>
           
          <li><Link className='dropdown-item' to='/multiproducts'>MultiProducts</Link></li>  */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  to="/women"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="" style={{ fontWeight: "600" }}>
                    Women
                  </p>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/dress">
                      Women dresses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gouns">
                      Women Gouns
                    </Link>
                  </li>
                  {/* <li><Link className='dropdown-item'to="/lehnga1">Women_Lehnga-1</Link></li> */}

                  <li>
                    <Link className="dropdown-item" to="/lehnga2">
                      Women Lehnga-2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/saree">
                      Women Saree's
                    </Link>
                  </li>
                  {/* <li><Link className='dropdown-item'to='/kurta'>Women_Kurta</Link></li> */}
                  <li>
                    <Link className="dropdown-item" to="/Shirt">
                      Women Shirts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/jeans">
                      Women Jeans
                    </Link>
                  </li>
                  {/* <li><Link className='dropdown-item' to='/accessories'>Accessories</Link></li>
            <li><Link className='dropdown-item' to='/allproducts'>Allproducts</Link></li>
            <li><Link className='dropdown-item' to='/games'>Gaming</Link></li>
           
          <li><Link className='dropdown-item' to='/multiproducts'>MultiProducts</Link></li>  */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <p className="" style={{ fontWeight: "600" }}>
                    {" "}
                    About
                  </p>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
          <Link className="nav-link active" to="/payment"  data-bs-toggle="dropdown" aria-expanded="false">
          <p  className='fw-bold'>Payment</p>
          </Link></li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  <p className="" style={{ fontWeight: "600" }}>
                    Contact
                  </p>
                </Link>
              </li>
            <div className="search-bar-container mt-1 lg-8">
              {/* <div>searchbar</div>
              <div>SearchResults</div> */}
            <form className="d-flex " role="search">
                <input
                  className="form-control me-2 my-auto ms-3 uu"
                  type="search"
                  placeholder="Search Your Products"
                  aria-label="Search"
                  value={input}
                  onChange={(e) => handlechange(e.target.value)}
                />
                
                <button className="btn  my-auto ii" type="submit" setResults={setResults}>
                  Search
                </button>
               
              </form>
              <div  className="bar"> <Searchresultslist results={results}/>
                </div>
            </div>

              {/* <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <p  className='fw-bold fs-4 ms-3'> Electronics</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/detail'>
                  <p  className='fw-bold fs-4 ms-3'>detail</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <p  className='fw-bold fs-4 ms-3'> Accessories</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/product'>
                  <p  className='fw-bold fs-4 ms-3'>pp</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <p  className='fw-bold fs-4 ms-3'>  Appliances</p>
                  </a>
                </li> */}
              <ul className="navbar-nav ms-auto  mb-2 mb-lg-0" >
                {!auth.user ? (
                  <>
                    {/* <li className="nav-item">
                      <Link className="nav-link active" to="/register">
                        <p style={{ fontWeight: "600" }}>
                          <i className="fa fa-registered me-1 ms-5" />
                          Register
                        </p>
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link active" to="/login">
                        <p style={{ fontWeight: "600" }}>
                        <i class="fa fa-user-circle mt-1" aria-hidden="true" style={{ fontSize:"20px", marginLeft:'30px'}}></i>
                        
                        </p>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        onClick={logout}
                        onClick={() => handleclick()}
                      >
                        <p style={{ fontWeight: "600" }} className="me-5 ">
                          {" "}
                          <i className="fa fa-sign-out mt-1" style={{ fontSize:"20px", marginLeft:'30px'}}/>
                          
                        </p>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                            <Link className="nav-item active" onClick={logout} to="/login">
                              <i className="fa fa-sign-out fw-bold display-4" /> Logout
                            </Link>
                          </li> */}
                  </>
                )}
              </ul>
              {/* <li className="nav-item">
              <div className='navbar-search-icon'>
      <Link to='/shoppingcard'>< IoBasketSharp className='fs-2 fw-bold mt-1' style={{color:'black'}} /></Link>
      <Badge badgeContent={getdata.length} className="mb-3" style={{color:'#e55029', fontSize:'30px'}}></Badge>
            </div> */}
                {/* <Link to="/shoppingcard">
               
                  <Badge badgeContent={getdata.length} className="shap">
                    <ShoppingCartIcon className="shop fw-bold fs-3" />
                  </Badge>
                </Link> */}
              {/* </li> */}
              {/* <Link to='/register' className="btn btn-warning btn-sm me-2 mt-2" style={{height:"30px",width:"100px"}} type="submit">
                Register
              </Link>
              <Link to='/login' className="btn btn-success btn-sm me-2 mt-2" style={{height:"30px",width:"100px"}}  type="submit">
              Login
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </>

    //     <div>
    //       <div className="main-navbar navbar-dark  shadow-sm sticky-top">
    //         <div className="top-navbar">
    //           <div className="container">
    //             <div className="row">
    //               <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
    //                 <h5 className="brand-name text-dark">🛒 E-commerce</h5>
    //               </div>
    //               <div className="col-md-5 my-auto">
    //                 <form role="search">
    //                   <div className="input-group">
    //                     <input
    //                       type="search"
    //                       placeholder="Search your product"
    //                       className="form-control"
    //                     />
    //                     <button className="btn bg-white" type="submit">
    //                       <i className="fa fa-search " />
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //               <div className="col-md-5 my-auto">
    //                 <ul className="nav justify-content-end">

    //                   <li className="nav-item">
    //                     <a className="nav-link" href="#">
    //                       <i className="fa fa-heart" />
    //                       <h6 className="text-dark"> Wishlist (0)</h6>
    //                     </a>
    //                   </li>
    //                   <li className="nav-item dropdown">
    //                     <a
    //                       className="nav-link dropdown-toggle"
    //                       href="#"
    //                       id="navbarDropdown"
    //                       role="button"
    //                       data-bs-toggle="dropdown"
    //                       aria-expanded="false"
    //                     >
    //                       <i className="fa fa-user" />
    //                       <h6 className="text-dark"> Username </h6>
    //                     </a>
    //                     <ul
    //                       className="dropdown-menu"
    //                       aria-labelledby="navbarDropdown"
    //                     >
    //                       <li>
    //                         <Link className="dropdown-item" to="/">
    //                           <i className="fa fa-user" /> Profile
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link className="dropdown-item" to="/">
    //                           <i className="fa fa-list" /> My Orders
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link className="dropdown-item" to="/">
    //                           <i className="fa fa-heart" /> My Wishlist
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link className="dropdown-item" to="/">
    //                           <i className="fa fa-shopping-cart" /> My Cart
    //                         </Link>
    //                       </li>
    // {!auth.user ? (
    //   <>

    //     <li>
    //       <Link className="dropdown-item" to="/register">
    //         <i className="fa fa-registered" />
    //         Register
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="dropdown-item" to="/login">
    //         <i className="fa fa-sign-in" />
    //         Login
    //       </Link>
    //     </li>
    //   </>
    // ) : (
    //   <>
    //     <li>
    //       <Link className="dropdown-item" onClick={logout} to="/login">
    //         <i className="fa fa-sign-out" /> Logout
    //       </Link>
    //     </li>
    //   </>
    // )}

    //                     </ul>

    //                   </li>

    //                 </ul>

    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <nav className="navbar navbar-expand-lg navbar-dark">
    //           <div className="container-fluid">
    //             <button
    //               className="navbar-toggler"
    //               type="button"
    //               data-bs-toggle="collapse"
    //               data-bs-target="#navbarSupportedContent"
    //               aria-controls="navbarSupportedContent"
    //               aria-expanded="false"
    //               aria-label="Toggle navigation"
    //             >
    //               <span className="navbar-toggler-icon" />
    //             </button>
    //             <div
    //               className="collapse navbar-collapse"
    //               id="navbarSupportedContent"
    //             >
    //               <ul className="navbar-nav me-auto mx-3 mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                   <Link className="nav-link" to="/">
    //                     Home
    //                   </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     All Categories
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <Link className="nav-link" to="/product">
    //                     Products
    //                   </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                   <Link className="nav-link" to="/about">
    //                     About
    //                   </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     Electronics
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     Fashions
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     Accessories
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     Home
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     Appliances
    //                   </a>
    //                 </li>
    //                 {/* <Link to='/register' className="btn btn-warning btn-sm me-2 mt-2" style={{height:"30px",width:"100px"}} type="submit">
    //                 Register
    //               </Link>
    //               <Link to='/login' className="btn btn-success btn-sm me-2 mt-2" style={{height:"30px",width:"100px"}}  type="submit">
    //               Login
    //               </Link> */}
    //               </ul>
    //             </div>
    //           </div>
    //         </nav>
    //       </div>
    //       {/* <nav className="navbar navbar-light navbar-expand-lg bg-light">
    //   <div className="container">
    //     <Link className="navbar-brand fw-bold" to="#">🛒 Ecommerce</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" to="/about"> About</Link>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <Link className="nav-link active" to="/product" role='button' data-bs-toggle="dropdown" aria-expanded="false">Product</Link>
    //           <ul className='dropdown-menu'>
    //             <li><Link className='dropdown-item' to='/accessories'>Accessories</Link></li>
    //             <li><Link className='dropdown-item' to='allproducts'>Allproducts</Link></li>
    //             <li><Link className='dropdown-item' to='games'>Gaming</Link></li>
    //             <li><Link className='dropdown-item' to='Led'>LED</Link></li>
    //             <li><Link className='dropdown-item' to='multiproducts'>MultiProducts</Link></li>
    //           </ul>
    //         </li>
    //       </ul>
    //      <Link className='btn btn-success ms-auto' to="/register">Register</Link>

    //         </div>
    //   </div>
    // </nav> */}
    //     </div>
  );
};
export default Header;
