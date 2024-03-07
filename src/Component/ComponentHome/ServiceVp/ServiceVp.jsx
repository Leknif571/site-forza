import React from 'react'
import { useState } from 'react'
import MenuService from './MenuService/MenuService'
import BlocTextService from './BlocTextService/BlocTextService'
import './servicevp.css'

const ServiceVp = () => {
  let [whichClicked, setWhichClicked] = useState(0)
  let loop = 5

  return (
    <div>
      <div className='hidden lg:h-fit lg:flex lg:flex-row bg-service w-full'>
        <div className='w-2/12 border-menu'>
          <div className="grid grid-cols h-full content-center">
            <MenuService whichClick={whichClicked} setWhichClicked={setWhichClicked} />
          </div>
        </div>

        <div className='w-5/12 p-12'>
          <BlocTextService whichClick={whichClicked}/>
        </div>

        <div className={"w-5/12 "+('bg-img-'+whichClicked)}>
          <div className='h-full'/>
        </div>
      </div> 

      <div className='h-fit bg-service w-full lg:hidden'>
          <BlocTextService whichClick={loop}/> 
     
      </div>
    </div>
  )
}

export default ServiceVp