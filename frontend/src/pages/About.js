import React from 'react'
import { useAuth } from '../context/auth'
import Footer from '../component/Footer';
import Layout from '../component/Layout';

const About = () => {
  // const [auth , setAuth] = useAuth(); 
  return (
<Layout title={"About Us"}>
<div style={{marginTop:"90px"}}>
  <br/><br/>
   {/* <Layout title={'About_ecommerce'}> */}
  {/* <p>{JSON.stringify(auth,null)}</p> */}
{/* </Layout>  */}
<div className="responsive-container-block bigContainer" >
  <div className="responsive-container-block Container">
    <p className="text-blk heading">
      About Us
    </p>
    <p1 className="text-blk subHeading">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    </p1>
    <div className="social-icons-container">
      <a className="social-icon">
        <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png" />
      </a>
      <a className="social-icon">
        <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png" />
      </a>
      <a className="social-icon">
        <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png" />
      </a>
      <a className="social-icon">
        <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png" />
      </a>
    </div>
  </div>
</div>
<br/>
</div>
<br/>
<br/>
</Layout>
  )
}

export default About;