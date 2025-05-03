import React from 'react'
import './catalogue.css'
import CardVoiture from '../../Component/ComponentMultiUse/Card'
import { useState, useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { Breadcrumbs,BreadcrumbItem} from "@heroui/react"
import MenuMarque from '../../Component/MenuMarque/MenuMarque'
import { useParams } from 'react-router-dom'

import {db} from '../../Service/firebase.config'



const Catalogue = () => {
    const { id } = useParams();

    let [voitures, setVoitures] = useState([])
    let [copyVoitures, setCopyVoitures] = useState([])

    const collectionRef = collection(db, "Voitures" )

    useEffect(() => {
            const getVoitures = async () => {
                await getDocs(collectionRef).then((voiture) => {
                    let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setVoitures(voituresData);
                    setCopyVoitures(voituresData)
                })
            }

            getVoitures();
    }, [])


    const filterMarque = (valueSelectMarque) =>
    {
        setVoitures(copyVoitures)
        if(valueSelectMarque !== 'all'){
            let newArrayVoitureMa = copyVoitures.filter((voiture) => voiture.marque === valueSelectMarque)
            setVoitures(newArrayVoitureMa)
        }else{
            setVoitures(copyVoitures)
        }
    }

    const filterStock = (valueSelectStock) =>
        {
            setVoitures(copyVoitures)
            if(valueSelectStock !=='all'){
                let newArrayVoitureMa = copyVoitures.filter((voiture) => voiture.marque === valueSelectStock)
                setVoitures(newArrayVoitureMa)
            }else{
                setVoitures(copyVoitures)
            }
        }

    const redirect = (linkRed) => {
        if(id === 'available' && linkRed === '/catalogue/sell'){
            window.location.href = linkRed
        } else if(id === 'sell' && linkRed === '/catalogue/available'){
            window.location.href = linkRed
        } 
    }


  return (
    <div className='bg-black h-full'>
        <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='danger' color='danger' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem>Catalogue</BreadcrumbItem>
            </Breadcrumbs>
        </div>

        <div className='p-4 md:p-16'>
            <h2 className='font-titlef text-red-700 text-4xl md:text-8xl text-left'>
                Nos véhicules
            </h2>
            <div className='text-gray-400 text-lg md:text-xl p-2 text-left'>
                Découvrez toutes notre gamme de véhicule disponibles
            </div>
        </div>

        { id !== 'featured' &&
                <div className='p-2'>
                    <MenuMarque onSelectMarque={filterMarque}/>
                    <div className='flex flex-row md:flex-row gap-4 p-2'>
                        <button onClick={() => redirect('/catalogue/available')} className={"h-12 w-60 border-rose-800 hover:bg-rose-500 border-1 rounded-md" + (id === 'available' ? ' bg-rose-800' :'')}>En stock</button>
                        <button onClick={() => redirect('/catalogue/sell')} className={"h-12 w-60 border-rose-800 hover:bg-rose-500 border-1 rounded-md" + (id === 'sell' ? ' bg-rose-800' :'')}>Vendu</button> 
                    </div>
                </div>
        }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-6 p-2 gap-2 xl:p-4 pt-0">
        {
                voitures.length > 0 ?
                 voitures.map(v  =>
                    <CardVoiture arrayElementCar={v}/>
                )
                :
                <p className='text-center font-titlef text-xl h-96 p-16'>Aucun véhicule ne correpond à votre recherche</p>
            }
            
        </div>
    </div>

  )
}

export default Catalogue