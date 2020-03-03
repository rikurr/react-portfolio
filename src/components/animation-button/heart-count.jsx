import React from 'react'


const HeartCount = ({ count }) => {
  return (
    <span id="count" className="count">
      + {count}
    </span>
  );
};

export default HeartCount;
