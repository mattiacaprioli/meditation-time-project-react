import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';

const PlayButton = (props) => {
  return (
    <button {...props} className='playButton'>
      <AiFillPlayCircle />
    </button>
  )
}

export default PlayButton;