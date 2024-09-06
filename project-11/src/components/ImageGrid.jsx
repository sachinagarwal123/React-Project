import React from 'react';

const ImageGrid = () => {
  // Array from 1 to 7 to represent image numbers
  const images = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className='grid'>
      {
        images.map((value) => (
          // Use template literals for dynamic image src
          <div className={`item${value}`} key={value}>
             <img className = "grid-image" key={value} src={`/images/f${value}.png`} alt={`image ${value}`} />
          </div>
         
        ))
      }
    </div>
  );
}

export default ImageGrid;
