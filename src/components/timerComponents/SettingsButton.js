import React from 'react';
import { FaCog } from 'react-icons/fa';

export default function SettingsButton(props) {
  return (
    <button {...props} className='playButton settings'>
      <FaCog />
      Settings
    </button>
  )
}
