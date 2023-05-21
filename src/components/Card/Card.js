import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card() {
  return (
    <div className="card bg-white bg-opacity-75">
      <div className="card-body text-center">
        <h5 className="card-title">IT'S TIME FOR MEDITATION</h5>
        <div className='underline'></div>
        <p className="card-text">Life is a rush but you can take a moment for yourself everyday.</p>
        <Link to='/timer' className="btn-primary">Start</Link>
      </div>
    </div>
  )
}
