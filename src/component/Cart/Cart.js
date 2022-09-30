import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

const Cart = ({ timer }) => {
  const [freetime, setFreetime] = useState(0);
  console.log(timer);

  const clickHandler = (time) => {
    setFreetime(time);
    setFreetime(JSON.parse(localStorage.setItem("freetime", time)));
  };

  useEffect(() => {
    setFreetime(localStorage.getItem("freetime"));
  }, []);

  const diffToast = () => {
    toast.success('WelCome This site', {
      position: 'top-center'
    });
  }

  return (
    <div>
      <div className='d-flex'>
        <img className='my-img' src="https://pmiscse.daffodilvarsity.edu.bd/api/media/uDrive/172-15-9611/45217469888871_1178489239015033_9057823677776658432_n%20(1)_150x150.jpg" alt="" />
        <div className='info'>
          <h4>Quazi Aumio Souhardyo</h4>
          <span>Mirpur, Dhaka</span>
        </div>
      </div>
      <div className='my-info'>
        <div className='d-flex'>
          <div className='other-info'>
            <h3>72<span>Kg</span></h3>
            <p>Weight</p>
          </div>
          <div className='other-info'>
            <h3>5.8</h3>
            <p>Height</p>
          </div>
          <div className='other-info'>
            <h3>23yrs</h3>
            <p>Age</p>
          </div>
        </div>
      </div>

      <h2 className='break-heading'>Add To Break</h2>

      <div className='d-flex'>
        <button onClick={() => clickHandler(5)} className='break-cal'>5m</button>
        <button onClick={() => clickHandler(10)} className='break-cal'>10m</button>
        <button onClick={() => clickHandler(15)} className='break-cal'>15m</button>
        <button onClick={() => clickHandler(20)} className='break-cal'>20m</button>
      </div>
      <h1 className='exercise-heading' >Learning Info</h1>

      <div className='time-count'>
        <h3>Learning Time: {timer} Minute</h3>

        <h3>Break: {freetime} Minute</h3>
      </div>

      <div className='btn-container'>
        <button onClick={diffToast} className='activity-btn'>Activity Completed</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
