import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const image = [
  "https://icms-image.slatic.net/images/ims-web/5c49e0fa-7f4a-413f-bf00-e342e7a52b4c.jpg",
  "https://icms-image.slatic.net/images/ims-web/8d542f77-6c4c-482d-badd-73387799e00c.jpg",
  // "https://icms-image.slatic.net/images/ims-web/19cafc0b-a7cb-45b0-92c2-4315ee788651.png",
  
  "https://icms-image.slatic.net/images/ims-web/31bb3b46-8c89-4832-84cd-0322b3a8d1a9.jpg",
  "https://icms-image.slatic.net/images/ims-web/889d5f24-8aa7-45b7-951d-c3c4a2b9486a.jpg",
  "https://icms-image.slatic.net/images/ims-web/b82f6529-d9ad-4dba-a459-6f8aa479a73d.png",
  "https://icms-image.slatic.net/images/ims-web/40048160-7576-4648-97e6-9577d2d7a8af.png",
  "https://icms-image.slatic.net/images/ims-web/434644d6-74b3-43d7-8549-287676324a3a.jpg",
];
const items = image.map((x , index)=>(
    <div key={index} className='item gg'>
        <img src={x} style={{
          height:"500px",
        }}/>
    </div>
))
const Slider = () => (

    <AliceCarousel
      disableSlideInfo
      autoPlayInterval={2000}
      items={items}
      autoPlay={true}
      disableButtonsControls
      infinite
    />
);
export default Slider
