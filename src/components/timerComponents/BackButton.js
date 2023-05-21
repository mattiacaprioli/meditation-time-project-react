import React from 'react';
import { AiFillLeftCircle } from 'react-icons/ai';

const BackButton = (props) => {
  return (
    <button {...props} className={'settings'}>
      <AiFillLeftCircle /> back
    </button>
  )
}

export default BackButton;