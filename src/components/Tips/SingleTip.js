import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleTip = ({title,info}) => {
  const [showInfo,setShowInfo] = useState(false);
  return (
    <article className='tip'>
      <header>
        <h6>{title}</h6>
        <button 
          className='btnTip' 
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
};

export default SingleTip;