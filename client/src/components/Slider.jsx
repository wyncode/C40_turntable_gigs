import React, { useState } from 'react';
import SliderImg from './SliderImg';
import GraphyteSliderImg from './SliderGraphyteImg';
import DruiidSlide from '../druiidSlide.png';
import GraphyteSlide from '../graphyteSlide.png';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Slider = () => {
  let slideArr = [
    <SliderImg src={DruiidSlide} />,
    <GraphyteSliderImg src={GraphyteSlide} />
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <div className="slider">
        {slideArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </button>
        <button id="goRight" onClick={goRight}>
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
        <div></div>
      </div>
    </>
  );
};

export default Slider;
