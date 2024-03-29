import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

const CardVoiture = ({arrayElementCar}) => {

  return (
    <div>
      <Link id="RouterNavLink" to={'/detail/'+arrayElementCar.reference}>
        <div className='card-u border border-color-uni'>
              <img src={arrayElementCar.img[0].original} alt="" />
            <div className='text lg:translate-y-1/4'>
                <div className="lg:flex lg:justify-between lg:items-center">
                  <div className='titre-voiture lg:ml-4 lg:mt-2'>
                    <a className="text-center font-nbold text-xl lg:text-justify">
                      <h1>{arrayElementCar.title.charAt(0).toUpperCase() + arrayElementCar.title.slice(1)}</h1> 
                    </a>
                    <h2 className='text-center text-lg text-gray-200 lg:text-justify'>
                    {arrayElementCar.kilometers} km               
                    <span className='text-red-600 text-lg'> | </span>
                    {arrayElementCar.chevaux} ch
                    <span className='text-red-600 text-lg'> | </span>
                    {arrayElementCar.date}
                    </h2>
                  </div>
                  <div className='prix-voiture'>
                    <p className="font-titlef text-gray-200 text-xl lg:mr-4">{arrayElementCar.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                  </div>

                </div>

            </div>
        </div>
        </Link>
      </div>

  )
}

export default CardVoiture