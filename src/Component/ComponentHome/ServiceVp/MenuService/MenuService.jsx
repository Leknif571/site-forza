import React from 'react'
import './MenuService.css'


const MenuService = ({whichClick, setWhichClicked}) => {
  return (
    <div className='bTest'>
        
        <div className='grid grid-row-4 gap-3'>
            <div onClick={()=>setWhichClicked(0)} className={"w-full text-lg justify-center font-helv text-gray-200 h-16 cursor-pointer hvtt flex items-center p-2 "+ (whichClick ===0 ? 'activehvtt' : '')}>
                <span>Véhicule</span>
            </div>
            <div onClick={()=>setWhichClicked(1)} className={"w-full text-lg justify-center font-helv text-gray-200 h-16 cursor-pointer hvtt flex items-center p-2 "+ (whichClick ===1 ? 'activehvtt' : '')}>
                <span>Recherche personnalisée</span>
            </div>
            <div onClick={()=>setWhichClicked(2)} className={"w-full text-lg justify-center font-helv text-gray-200 h-16 cursor-pointer hvtt flex items-center p-2 "+ (whichClick ===2 ? 'activehvtt' : '')}>
                <span>Location</span>
            </div>
            <div onClick={()=>setWhichClicked(3)} className={"w-full text-lg justify-center font-helv text-gray-200 h-16 cursor-pointer hvtt flex items-center p-2 "+ (whichClick ===3 ? 'activehvtt' : '')}>
                <span>Accompagnement administratif</span>   
            </div>
            <div onClick={()=>setWhichClicked(4)} className={"w-full text-lg  justify-center font-helv text-gray-200 h-16 cursor-pointer hvtt flex items-center p-2 "+ (whichClick ===4 ? 'activehvtt' : '')}>
                <span>Livraison</span>   
            </div>
        </div>
    </div>
  )
}

export default MenuService