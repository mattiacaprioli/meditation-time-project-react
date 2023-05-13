import React from 'react';
import { AiFillLeftCircle } from 'react-icons/ai';

export default function BackButton(props) {
  return (
    <button {...props} className={'settings'}>
      <AiFillLeftCircle /> back
    </button>
  )
}
