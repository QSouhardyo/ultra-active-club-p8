import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Question from '../Question/Question';
import SingleStudy from '../SingleStudy/SingleStudy';
import './Main.css'

const Main = () => {

  const [studies, setstudies] = useState([])
  const [timer, setTimer] = useState(0);


  useEffect(() => {
    fetch('book.json')
      .then(res => res.json())
      .then(data => {
        setstudies(data)
        localStorage.setItem("studies", data);
      })
  }, [])


  return (
    <div className='main-container'>
      <div className="study-site">

        <h1 className='study-heading py-3 ml-3'>Select Topics</h1>

        <div className='study-cart-container '>
          {
            studies.map(study => (<SingleStudy study={study} key={study.id} timer={timer} setTimer={setTimer} />)
            )}
        </div>
      </div>

      <div className="cart-site">
        <div>
          <Cart timer={timer} />
        </div>
      </div>

      <div className='mt-3'>
        <Question />
      </div>
    </div>
  );
};

export default Main;

