import React, { useState } from 'react';
import people from '../../data/reviewsData';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './Review.css'

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number) => {
        if(number > people.length - 1){
            return 0;
        }
        if(number < 0){
            return people.length -1;
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

  return (
    <main>
      <div className='container-review'>
        <div className='title-review'>
            <h2>Reviews</h2>
            <div className='underline'></div>
            <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info-review'>{text}</p>
                <div className='button-container'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
            </article>
        </div>
      </div>
    </main>
  )
}

export default Review