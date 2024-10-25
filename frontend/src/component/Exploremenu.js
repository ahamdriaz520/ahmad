// import React from 'react'
// import '../Css/Exploremenu.css'
// import multiProducts from '../Allapi/multiproducts'


// const Exploremenu = ({category,setCategory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore Our Menu</h1>
//         <p className='explore-menu-text'>Choose from a diverse menu featuring a delecltable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfied your cravings and elevate your dining experience, one delicious meal at a time.</p>
//     <div className='explore-menu-list'>
//    {multiProducts.map((x)=>{
//     return(
//       <div onClick={()=>setCategory(prev=>prev===x.title?'All':x.title)} className='explore-menu-list-items' >
//            <img className={category===x.title?"active":""} src={x.image} alt=''></img>
//            <p>{x.title}</p>
//       </div>
//     )
//    })}
//     </div>
//     </div>
//   )
// }

// export default Exploremenu