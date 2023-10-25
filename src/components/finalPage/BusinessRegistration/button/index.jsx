import React from 'react';

const handleClick = () => {
  window.location.href = '#';
};

const Button = () => {
  return (
    <div className='flex justify-center items-center h-full p-4 pb-10'>
      <div
        className='bg-[#3d709f] text-center p-4 w-[172px] text-white rounded-md cursor-pointer'
        onClick={handleClick}
      >
        Get Started
      </div>
    </div>
  );
};

export default Button;
