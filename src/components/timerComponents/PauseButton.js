import React from 'react'
import { AiFillPauseCircle } from 'react-icons/ai';

const PauseButton = (props) => {
  return (
    <button {...props} className='playButton'>
      <AiFillPauseCircle />
    </button>
  )
}

export default PauseButton;