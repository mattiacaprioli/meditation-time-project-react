import React from 'react'
import { AiFillPauseCircle } from 'react-icons/ai';

export default function PauseButton(props) {
  return (
    <button {...props} className='playButton'>
      <AiFillPauseCircle />
    </button>
  )
}
