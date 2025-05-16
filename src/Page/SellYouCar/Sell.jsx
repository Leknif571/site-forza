import React from 'react'
import './sellyourcar.css'

import { Breadcrumbs,BreadcrumbItem} from "@heroui/react"




const Sell = () => {

  return (
    <div className='h-full'>
        <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='primary' color='primary' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem>Sell your car</BreadcrumbItem>
            </Breadcrumbs>
        </div>

        {/* <div className='p-4 md:p-16'>
            <h2 className='font-titlef text-red-700 text-4xl md:text-8xl text-left'>
                Nos véhicules
            </h2>
            <div className='text-gray-400 text-lg md:text-xl p-2 text-left'>
                Découvrez toutes notre gamme de véhicule disponibles
            </div>
        </div> */}


    <div className='px-10 py-4'>
        <div className='flex flex-col p-4 lg:flex-row justify-between'>
            <h1 className='flex justify-center text-3xl font-titlef text-left lg:pt-8 lg:text-4xl lg:pl-4'>Sell your car</h1>
            <div className='flex p-2 justify-center lg:pt-8 lg:pr-40'>
                <img src="https://www.legifrance.gouv.fr/content/download/123456/123456/file/mentions-legales.png" alt="Mentions Légales" className='h-48 object-cover' style={{width:'100%'}} />
            </div>
        </div>

        <div className='text-gray-400 text-lg md:text-xl p-2 text-left'>
            <p>Voici le formulaire a remplir pour vendre vore voiture</p>
        </div>
       
    </div>
</div>

  )
}

export default Sell