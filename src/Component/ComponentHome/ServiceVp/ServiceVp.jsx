import React from 'react'
import { useState } from 'react'

import './servicevp.css'

const ServiceVp = () => {
  let [whichClicked, setWhichClicked] = useState(0)
  let loop = 5

  return (
    <div>
      {/* 
        faire une div qui est marger a p-4 de tout les coter avec un input text pour insérer un mail pour une mailing list et une image a coté
      */}
      <div className='p-4 m-16 rounded-lg bg-gray-800 border border-white shadow-lg'>
        <h2 className='text-2xl text-left'>Newsletter</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 p-4'>
          <div>
          <input type="text" className='h-12 rounded-xl border border-red-400 max-w-96 p-4' placeholder='Entrer votre e-mail' />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default ServiceVp