import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ({ users }) => (
  <div className='card-list'>
    {  //returns a card for each entry in the users array.
      users.map((user) => {
        return (
          <Card user={user} />
        )
      })
    }
  </div>
);

export default CardList;