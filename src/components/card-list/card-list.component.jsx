import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css'

class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className='card-list'>
      {  //returns a card for each entry in the users array.
        users.map((user) => {
          return (
            <Card user={ user }/>
          ) 
        })
      }
      </div>
    )
  }
}

export default CardList;