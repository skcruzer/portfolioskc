import React from 'react'
import { Grid } from '@mui/material'
import CardInfo from './Cardinfo'

import './about.css'

function Card(props) {
  
  return(
    <Grid className='d-inline-block s-card' onClick={(e) => props.click(props.item)}>
      <img className='s-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
    </Grid>
  )
}

export default Card