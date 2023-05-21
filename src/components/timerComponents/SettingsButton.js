import React from 'react';
import { FaCog } from 'react-icons/fa';

const SettingsButton = (props) => {
  return (
    <button {...props} className='playButton settings'>
      <FaCog />
      Settings
    </button>
  )
}

export default SettingsButton;