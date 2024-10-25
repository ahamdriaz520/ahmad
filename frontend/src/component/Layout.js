import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children , title , description , keywords , author}) => {
  return (
  //   <div>
  //      
  //       <main> 
  //       {props.children}
  //       </main>
  //      
  //   </div>
  // )}
  <div>
     <Helmet>
    <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


                <title>{title}</title>
    </Helmet>
    <Header/>
       <main>{children}</main>
       <Footer/>
    </div>
  )
}
Layout.defaultProps = {
  title : "Ecommerce-Website",
  description : "Mern Stack  Web applications",
  keywords : "raect mongodb express node.js",
  author : "Ahmad Bhatti"
}
export default Layout