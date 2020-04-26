import React, { useState } from 'react';
import './styles.scss';

const ProgressBar = props => {
    const { slide } = props
    const { currentSlide, setCurrentSlide } = useState(slide)
    console.log(currentSlide);

    // useEffect(() => {
    //     const element = document.getElementsByClassName("progressBarWrapper")[0].children[slide]
    //     element.style.backgroundColor = '#fff'
    //     console.dir(element);
    // }, [slide])

    return (
    <div className='progressBarWrapper'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
    </div>
  );
};

export default ProgressBar;
