import { Component } from 'react';

import './card.styles.css'

class Card extends Component {
  render() {
    const { name, email, id } = this.props.user;
    return (
      <div className='card' key={id}>
        <img
          className='card-image'
          alt={`user: ${name}`}
          src={`https://robohash.org/${id}?set2`} />
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    )
  }
}

export default Card;