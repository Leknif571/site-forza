import React from 'react'
import ImageVoiture from '../../../assets/images/carImage1.png'

import './servicevp.css'

const ServiceVp = () => {

  return (
    <div className='h-full'>
      {/* 
        faire une div qui est marger a p-4 de tout les coter avec un input text pour insérer un mail pour une mailing list et une image a coté
      */}
      <div className='p-4 mx-2 md:mx-48 my-6 rounded-lg bg-stone-200 dark:bg-stone-900 border border-gray-600 shadow-lg'>
        <div className='flex flex-col md:flex-row justify-around md:gap-4 pl-0 p-4'>
          <div>
            <img src={ImageVoiture} className='w-full md:w-[32rem]' alt="" />
          </div>
          <div className='w-full py-2 md:w-1/2'>
            <h2 className='font-titlef text-gray-950 dark:text-gray-200 text-2xl md:text-4xl text-left pb-2'>Newsletter</h2>
            <p className='pb-4 text-black dark:text-gray-400'>
              Reste informer de toute nos nouveautés, promotions bon plan et partenaria en vous inscrivant à notre newsletter.
            </p>
            <div className='relative w-full'>
              <input type="text" className='h-12 w-full rounded-2xl border border-red-400 p-4 bg-white dark:bg-stone-950' placeholder='Entrer votre e-mail' />
              <button className='rounded-r-2xl border border-red-700 absolute bg-stone-100 dark:bg-stone-900 top-1 right-1 h-10 w-10'>+</button>
            </div>
            <p className='pt-4 text-sm text-gray-950 dark:text-gray-400'>
              En vous inscrivant à notre newsletter, vous acceptez de recevoir des e-mails de notre part concernant nos produits et services ainsi que nos partenaires. 
            </p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ServiceVp