import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item__link' to={props.path}>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              src={props.src}
              alt='travel image'
              className='cards__item__img'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__desc'>{props.desc}</p>
          </div>
          <div className='icons'>
            <i className='fas fa-heart'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-comments'></i>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
