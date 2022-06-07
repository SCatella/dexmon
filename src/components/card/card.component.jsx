import './card.styles.css'

const Card = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className='card' key={id}>
      <img
        className='card-image'
        alt={`user: ${name}`}
        src={`https://robohash.org/${id}?set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;