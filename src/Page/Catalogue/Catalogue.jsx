import React from 'react'
import './catalogue.css'
import CardVoiture from '../../Component/ComponentMultiUse/Card'
import { useState, useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { Breadcrumbs,BreadcrumbItem} from '@nextui-org/react'

import {db} from '../../Service/firebase.config'



const Catalogue = () => {

    let [voitures, setVoitures] = useState([])
    let [copyVoitures, setCopyVoitures] = useState([])

    const [marque, setMarque] = useState([])
    const [model, setModel] = useState([])

    const collectionRef = collection(db, "Voitures" )
    const collectionRefM = collection(db, 'Marque')

    useEffect(() => {
            const getVoitures = async () => {
                await getDocs(collectionRef).then((voiture) => {
                    let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setVoitures(voituresData);
                    setCopyVoitures(voituresData)
                })
            }
            const getMarque = async () => {
                await getDocs(collectionRefM).then((marque) => {
                    let marqueData = marque.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setMarque(marqueData);
                })
            }
            getMarque();
            getVoitures();
    }, [])

    const getByName = titreM => {
        if(titreM.target.value !== 'toutes'){
            let modelList = marque.find(({ marque }) => marque === titreM.target.value)
            setModel(modelList.model)
        }

    }

    const filterMarque = (valueSelectMarque) =>
    {
        setVoitures(copyVoitures)
        if(valueSelectMarque !== 'toutes'){
            let newArrayVoitureMa = copyVoitures.filter((voiture) => voiture.marque === valueSelectMarque)
            setVoitures(newArrayVoitureMa)
        }else{
            setVoitures(copyVoitures)
            setModel([])
        }
    }

     const filtreModel = valueSelectModel => {
        setVoitures(copyVoitures)
        if(valueSelectModel !== 'tout'){
            let newArrayVoitureMo = copyVoitures.filter((voiture) => voiture.model === valueSelectModel.target.value)
            setVoitures(newArrayVoitureMo)
            
        }else{
            setVoitures(copyVoitures)
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



        <div className='flex flex-col md:flex md:flex-row justify-center items-center gap-4 p-8'>
            <div className='flex items-center gap-2'>
                <div className="custom-select">
                    <select 
                    name="marque" id="marque"
                    className='font-titlef'
                    onChange={(e) => {getByName(e); filterMarque(e.target.value)}}
                    >
                        <option className='font-titlef' value={'toutes'}>Marque</option>
                        {
                            marque.map(v => 
                            <option key={v.marque} value={v.marque}>{v.marque}</option>
                            )
                        }
                        
                    </select>
                </div>

            </div>

            <div className='flex items-center gap-2'>
                <div className="custom-select">
                    <select
                    className='font-titlef'
                    onChange={filtreModel}
                    >   
                        <option className='font-titlef' value={'tout'}>Modèle</option>
                        {
                            model.map(v => 
                            <option value={v}>{v}</option>
                            )
                        }
                    </select>
                </div>
            </div>

            <div className='flex items-center gap-2 '>
                <div className="custom-select">
                    <select
                    className='font-titlef'
                    >   
                        <option value={'tout'}>Disponibilité</option>
                        <option value={'disponible'} >Disponible</option>
                        <option value={'commande'} >Disponible sur commande</option>
                        <option value={'vendu'} >Vendu</option>
                        
                    </select>
                </div>
            </div>

        </div>

        <div className='card-container'>
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