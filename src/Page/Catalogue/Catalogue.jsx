import React from 'react'
import './catalogue.css'
import CardVoiture from '../../Component/ComponentMultiUse/Card'
import { useState, useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { getDocs, query, orderBy, limit, where } from 'firebase/firestore'
import { Breadcrumbs,BreadcrumbItem} from "@heroui/react"
import MenuMarque from '../../Component/MenuMarque/MenuMarque'
import { useParams } from 'react-router-dom'
import { Pagination } from "flowbite-react";

import {db} from '../../Service/firebase.config'

const Catalogue = () => {
    const { id } = useParams();
    let [selectMarque, setSelectMarque] = useState("all")
    

    let [voitures, setVoitures] = useState([])
    let [copyVoitures, setCopyVoitures] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    const [length, setLength] = useState(0)

    const collectionRef = collection(db, "Voitures" )

    const query1 = query(collectionRef, where("dispo", "==", id))


    useEffect(() => {
        
            const getVoitures = async () => {
                await getDocs(query1).then((voiture) => {
                    let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setVoitures(voituresData);
                    setCopyVoitures(voituresData)
                })
            }

            getVoitures();
            console.log(voitures);
    }, [])


    const filterMarque = (v) =>
    {
        setVoitures(copyVoitures)
        if(v !== 'all'){
            let newArrayVoitureMa = copyVoitures.filter((voiture) => voiture.marque === v)
            setVoitures(newArrayVoitureMa)
            setSelectMarque(v)
        }else{
            setVoitures(copyVoitures)
            setSelectMarque("all")
        }
    }


    const redirect = (linkRed) => {
        // console.log(id);
        if(id === "available" && linkRed === '/catalogue/sell'){
            window.location.href = linkRed
        } else if(id === "sell" && linkRed === '/catalogue/available'){
            window.location.href = linkRed
        } 
    }


  return (
    <div className='h-full'>
        <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='danger' color='danger' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem>Catalogue</BreadcrumbItem>
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

        { id !== 'featured' &&
                <div className='p-2'>
                    <MenuMarque onSelectMarque={filterMarque} valueSelectMarque={selectMarque} />
                    <div className='flex flex-row md:flex-row gap-4 p-2'>
                        <button onClick={() => redirect('/catalogue/available')} className={"h-12 w-60 border-red-500 hover:bg-red-400 dark:text-white border-1 rounded-md" + (id === 'available' ? ' bg-red-500 text-white' :' text-red-500')}>En stock</button>
                        <button onClick={() => redirect('/catalogue/sell')} className={"h-12 w-60 border-red-500 hover:bg-red-400 dark:text-white border-1 rounded-md" + (id === 'sell' ? ' bg-red-500 text-white' :' text-red-500')}>Vendu</button> 
                    </div>
                </div>
        }
{/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}

    <div className='px-10 py-4'>
        <div className="grid gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {
            voitures.length > 0 ?
                voitures.map(v  =>
                    <CardVoiture arrayElementCar={v}/>
                )
                :
                <p className='text-center font-titlef text-xl h-96 p-16'>Aucun véhicule ne correpond à votre recherche</p>
            }
            
        </div>
        <div>
            {/* <Pagination className='text-center' currentPage={currentPage} totalPages={length} onPageChange={onPageChange} showIcons /> */}
        </div>

    </div>
</div>

  )
}

export default Catalogue