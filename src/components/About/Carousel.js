import React from 'react';

import Grid from '@mui/material/Grid'
import Card from './Card'

import Cinema from '../../assets/pics/cinema&sip.png'
import StackUp from '../../assets/pics/stackup.png'
import HMS from '../../assets/pics/hms.png'

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Dev Grub',
          subTitle: 'The cookbook for developers',
          imgSrc: Cinema,
          link: 'https://devgrub.com',
          selected: false
        },
        {
          id: 1,
          title: 'Garrett Love',
          subTitle: 'YouTube channel',
          imgSrc: StackUp,
          link: 'https://www.youtube.com/channel/UCxSITxL2JbF2290GCqieVZw',
          selected: false
        },
        {
          id: 2,
          title: 'Evverest',
          subTitle: 'A social network for developers',
          imgSrc: HMS,
          link: 'https://github.com/garrettlove8/evverest',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
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
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }



  render() {
    return (
      <Grid>
        <Grid container className='justify-content-around' spacing={3}>
          {this.makeItems(this.state.items)}
        </Grid>
      </Grid>
    );
  }

}

export default Carousel;