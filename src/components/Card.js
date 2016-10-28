import React, {PropTypes} from 'react';

const Card = ({item}) => {
  return (
    <figure className="card" >
      <img src={item.image} className="card__image" />
        <figcaption className="card__title" >{item.title}</figcaption>
    </figure>
    )
};

export default Card;