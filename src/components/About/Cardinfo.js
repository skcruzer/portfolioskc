import React from 'react'
import { useSpring, animated } from 'react-spring'

import './about.css'

function CardInfo(props) {
  
  const style = useSpring({opacity: 1, from: {opacity: 0}})

  return(
    <animated.div className='s-card-info' style={style}>
      <p className='s-card-title'>{props.title}</p>
      <p className='s-card-sub-title'>{props.subTitle}</p>
      <button>
        <a href={props.link} className='viewBtn' target='blank' rel='noopener noreferrer'>View</a>
      </button>
    </animated.div>
  )
}

export default CardInfo