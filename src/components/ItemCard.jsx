import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ id, name, race, ki, image }) => {
  return (
    <>
    <Link  to={`personaje/${id}`}    style={{color:"inherit", textDecoration:"inherit"}}>
      <div className='single-card'>
        <img src={image} alt={name} height="250px"/>
        <div className='single-card-description'>
          <p>{name}</p>
          <div className='single-card-rangos'>
            <p>{race}</p>
            <p>{ki}</p>
          </div>
        </div>
      </div>
    </Link>
    </>
  ) 
}
