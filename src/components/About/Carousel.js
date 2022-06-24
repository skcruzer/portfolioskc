import React from 'react';

import Grid from '@mui/material/Grid'
import Card from './Card'

import Cinema from '../../assets/pics/cinema&sip.png'
import StackUp from '../../assets/pics/stackup.png'
import HMS from '../../assets/pics/hms.png'

import './about.css'

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Cinema & Sip',
          subTitle: 'Enhance your movie nights',
          imgSrc: Cinema,
          link: 'https://st12345678910.github.io/CinemaAndSip/',
          selected: false
        },
        {
          id: 1,
          title: 'Stack Up',
          subTitle: 'See how your projects stack up',
          imgSrc: StackUp,
          link: 'https://stackupapp.netlify.app/',
          selected: false
        },
        {
          id: 2,
          title: 'HMS',
          subTitle: 'Information management system',
          imgSrc: HMS,
          link: 'https://hosp-man-sys.herokuapp.com/dashboard.html',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    console.log(id)

    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false
      }
    })

    this.setState({
      items
    })
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }



  render() {
    return (
      <Grid>
        <Grid container className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Grid>
      </Grid>
    );
  }

}

export default Carousel;