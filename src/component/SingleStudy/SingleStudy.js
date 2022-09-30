import React from 'react';
import Question from '../Question/Question';
import './SingleStudy.css'

const SingleStudy = ({ study, timer, setTimer }) => {

  const { image, subject, describe, time } = study

  const clickHandler = (time) => {
    setTimer(prevTime => prevTime + time)
    localStorage.setItem("time", time);
  };


  return (

    <div className='single-cart '>
      <div className=''>
        <img className='study-img' src={image} alt="" />
      </div>
      <div className='text'>
        <h2>{subject}</h2>
        <h4> Time: {time} Minute</h4>
        <p>{describe}</p>
      </div>
      <button onClick={() => clickHandler(time)} href="#" className='list-btn'>Add to list</button>

    </div>


  );
};

export default SingleStudy;

