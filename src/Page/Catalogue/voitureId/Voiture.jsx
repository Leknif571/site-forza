// import dependances
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs} from 'firebase/firestore'
import { db } from '../../../Service/firebase.config'
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip} from "@heroui/react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import Gallery dependances
import 'photoswipe/style.css';

// import style
import "./voiture.css"
import ServiceVp from '../../../Component/ComponentHome/ServiceVp/ServiceVp'


const Voiture = () => {
  const { id } = useParams();
  let [voitureD, setVoiture] = useState([])
  let [thisurl, setUrl] = useState('')
  let [img, setImg] = useState([])
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const collectionRef =collection(db, "Voitures")
  const q = query(collectionRef, where("reference", '==', id) )
  

        useEffect(() => {


          let funcVoiture = async() => { 
              try { 
                  let VoitureData = await getDocs(q); 
                  VoitureData.forEach((doc) => {
                     
                      setVoiture(doc.data())
                      let dV = doc.data().img
                      setImg(dV)

                  })

                  
              } catch (error) {
                  console.log(error)
              }
             
          }
          funcVoiture()
      }, [])



  return (
    <div>
      <div className='h-max'>
      <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='primary' color='primary' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem href='/catalogue'>Catalogue</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumbs>
        </div>
        {voitureD?.title && (
          <div className='flex flex-col p-4 lg:flex-row justify-between'>
            <h1 key={voitureD.title} className='flex justify-center text-3xl font-titlef text-left lg:pt-8 lg:text-4xl lg:pl-4'>{voitureD.title}</h1>
            <div className='flex p-2 justify-center lg:pt-8 lg:pr-40'>
                  <Chip variant='shadow' radius='sm' 
                    color={
                      voitureD.dispo === "Disponible" ? "success" :
                      voitureD.dispo === "Disponible sur commande" ? "warning" :
                      "danger"
                    }
                    size='lg'
                    className='text-right'
                  >{voitureD.dispo}</Chip>
            </div>
  
          </div>
          )}
      </div>

      <hr className="m-1 border-blue-700 lg:ml-16 lg:mr-16"/>
      
      <div className='w-full flex flex-col lg:flex-row justify-center'>
        <div className='lg:w-2/3 text-xl font-titlef'>
        <div className='p-2'>
        {voitureD?.title && (
          <Swiper
              // spaceBetween={30}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={false}
              navigation={true}
              effect={"fade"}
              className="mySwiper rounded-t-lg"
              pagination={{
                  clickable: true,
                  dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
            >
              {voitureD.img.map((img, index) => {
                return (
                  <SwiperSlide className='h-fit'>
                    <img src={voitureD.img[index].original} className='object-cover h-[32rem]' alt="" style={{ width:'100%'}} />
                  </SwiperSlide>
                  )

              })}             
            </Swiper>
          )}
          </div>
          <div className='m-2 min-h-96 bg-stone-200 dark:bg-stone-900 rounded-lg border-1 border-blue-700 p-4'>
            <h2 className='text-3xl lg:text-4xl text-left pb-3 lg:pb-3 font-titlef text-gray-950'>
              Description
            </h2>
            <p className='text-gray-900'>
              {voitureD.description}
            </p>
          </div>
        </div>

        <div className='bloc-info lg:w-1/3 flex justify-center'>
        
          <div className="bloc-info-txt w-full px-10 pt-5 lg:pt-5"> 
           {voitureD.price ? ( <h2 className='text-white dark:text-bg-950 text-4xl lg:text-5xl text-center lg:text-left pb-3 lg:pb-3 rajdhani-regular'>
              {voitureD.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} 
            </h2> ): ''}

            <table className='justify-center w-full text-left'>
              <tbody className='text-gray-200 text-lg lg:text-xl '>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Etat</td>
                  <td className='p-2'>{voitureD.etat}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Kilométrage</td>
                  <td className='p-2'>{voitureD.kilometers} km</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Puissance</td>
                  <td className='p-2'>{voitureD.chevaux} ch</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Puissance fiscale</td>
                  <td className='p-2'>{voitureD.puissance} NW</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Energie</td>
                  <td className='p-2'>{voitureD.energie}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Transmission</td>
                  <td className='p-2'>{voitureD.automatique === "on" ? 'Automatique' : "Manuel"}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Mise en circulation</td>
                  <td className='p-2'>{voitureD.date}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Marque</td>
                  <td className='p-2'>{voitureD.marque}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Modèle</td>
                  <td className='p-2'>{voitureD.model}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Nombre de portes</td>
                  <td className='p-2'>{voitureD.nbPorte} portes</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Nombre de places</td>
                  <td className='p-2'>{voitureD.nbPlace} places</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Couleur extérieur</td>
                  <td className='p-2'>{voitureD.couleurExt}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Couleur intérieur</td>
                  <td className='p-2'>{voitureD.couleurInt}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Matière</td>
                  <td className='p-2'>{voitureD.matSiege}</td>
                </tr>
                <tr className='border-b-1 border-blue-700'>
                  <td className='p-2'>Référence</td>
                  <td className='p-2'>{voitureD.reference}</td>
                </tr>

       
              </tbody>
            </table>

          </div>
        
        </div>
      </div>

      <ServiceVp/>

      

      <Modal isOpen={isOpen} placement='center' size='4xl' onOpenChange={onOpenChange} className="bg-gray-900">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>
                    Image
                  </ModalHeader>
                  <ModalBody className='text-gray-200'>
                      <img src={thisurl} alt="" />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="solid" onPress={onClose}>
                      Fermer
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
      
    </div>
  )
}

export default Voiture