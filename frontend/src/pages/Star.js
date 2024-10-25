import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const Star = ({stars , ranking}) => {
    const ratingStar = Array.from({length:5},  (elem , index)=>{
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    4.4 >= 0 + 1 ? <FaStar  /> : stars >= number ? <FaStarHalfAlt/>  : <AiOutlineStar/>  
                }
            </span>
        )
    })
 return(
    <wrapper>
        <div className='icon-style d-flex text-warning'>

            {ratingStar}
            <p>({ranking} customer reviews)</p>
        </div>
    </wrapper>
  )
}

export default Star