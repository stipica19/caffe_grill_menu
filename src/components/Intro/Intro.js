import React from 'react';

const Intro = ({ data }) => {
  console.log(data.backgroundImage);
  return (
    <div
      className=" home single-slider d-flex align-items-center animation-style-01"
      id="home"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    ></div>
  );
};

export default Intro;
