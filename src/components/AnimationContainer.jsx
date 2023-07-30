"use client"

import { AnimationOnScroll } from 'react-animation-on-scroll';

const AnimationContainer = ({ children, offset, animateIn, animateOut, duration, delay, className = "", animateOnce=true }) => {

    return (
        <AnimationOnScroll
            animateIn={animateIn}
            animateOut={animateOut}
            offset={offset}
            animateOnce={animateOnce}
            className={className}
            delay={delay}
            duration={duration}>
            {children}
        </AnimationOnScroll>
    )
}

export default AnimationContainer