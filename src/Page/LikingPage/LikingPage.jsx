import React from 'react'

import { Breadcrumbs,BreadcrumbItem} from "@heroui/react"
import CardVoiture from '../../Component/ComponentMultiUse/Card'




const LikingPage = () => {

    // fetch on local storage the liked cars
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];




  return (
    <div className='h-full'>
        <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='danger' color='danger' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem>Liking Page car</BreadcrumbItem>
            </Breadcrumbs>
        </div>

    <div className='px-10 py-4'>
        <div className='flex flex-col p-4 lg:flex-row justify-between'>
            <h1 className='flex justify-center text-3xl font-titlef text-left lg:pt-8 lg:text-4xl lg:pl-4'>Les vehicules liké</h1>
        </div>


    <div className='px-10 py-4'>
        <div className="grid gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {
            likedCars.length > 0 ?
            likedCars.map(v  =>
                <CardVoiture arrayElementCar={v}/>
            )
            :
        <p className='text-center font-titlef text-xl h-96 p-16'>Aucun véhicule ne correpond à votre recherche</p>
            }
            
        </div>
    </div>
       
    </div>
</div>

  )
}

export default LikingPage