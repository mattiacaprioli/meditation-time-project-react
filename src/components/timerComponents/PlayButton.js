import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';

export default function PlayButton(props) {
  return (
    <button {...props} className='playButton'>
      <AiFillPlayCircle />
    </button>
  )
}
