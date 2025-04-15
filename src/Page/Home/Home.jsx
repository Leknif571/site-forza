import React from 'react'
import './home.css'
import FirstViewport from '../../Component/ComponentHome/FirstVp/FirstViewport'
import PresentationVp from '../../Component/ComponentHome/PresentationVp/PresentationVp'
import ServiceVp from '../../Component/ComponentHome/ServiceVp/ServiceVp'

const Home = () => {
  return (
    <div>
        <FirstViewport/>
        <PresentationVp/>
        {/* <ServiceVp/> */}
    </div>
  )
}

export default Home