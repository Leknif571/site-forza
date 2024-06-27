import React from 'react'


import './card.css'

const CardVoiture = ({arrayElementCar}) => {

  const backgroundImageStyle = {
    backgroundImage: `url(${arrayElementCar.img[0].original})`
  };


  return (
    <div>
      <a id="RouterNavLink" href={'/detail/'+arrayElementCar.reference}>
        <div className='card-u border border-color-uni'>
              
        <div 
          style={backgroundImageStyle} 
          className={'img-presentation ' + (arrayElementCar.dispo === "Vendu" ? 'dispo-overlay' : '')}
        >
          {arrayElementCar.dispo === "Vendu" && (
              <h1 className='vendu-overlay text-3xl text-white font-nbold content-center'>VENDU</h1>
          )}
        </div>
        

        
            
            <div className='text lg:translate-y-1/4'>
                <div className="lg:flex lg:justify-between lg:items-center">
                  <div className='titre-voiture mr-4 lg:ml-4 lg:mt-1'>
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
                    <p className="font-titlef text-gray-200 text-2xl lg:mr-2">{arrayElementCar.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                  </div>

                </div>

            </div>
        </div>
        </a>
      </div>

  )
}

export default CardVoiture