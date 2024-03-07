import React, { useState,  } from 'react'

import { useParams } from 'react-router-dom'
import { collection, query, where, onSnapshot} from 'firebase/firestore'
import { db } from '../../../Service/firebase.config'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, Navigation, Autoplay} from 'swiper/modules'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./voiture.css"

const Voiture = () => {
  const { id } = useParams();
  let [voiture, setVoiture] = useState([])
  let [thisurl, setUrl] = useState('')
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const collectionRef =collection(db, "Voitures")
  const q = query(collectionRef, where("reference", '==', id) )

    onSnapshot(q,(voiture) => {
        voiture.docs.map((doc) => (
            setVoiture({ ...doc.data(), id: doc.id })))  
        })

  return (
    <div>
      <div className='bloc-img h-max'>
      <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='danger' color='danger' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem href='/catalogue'>Catalogue</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumbs>
        </div>
        {voiture?.title && (<h1 key={voiture.title} className='text-4xl font-titlef text-left p-10 pt-8 md:pl-16 '>{voiture.title}</h1>)}

      
      {voiture?.img && (
          
          <Swiper
            key={voiture.img[0].title}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={35}
            slidesPerView={voiture.img.length > 1 ? 2 : 1}
            color='white'
            navigation={{
              enabled:true
              
            }}
            pagination={{
              clickable:true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>'
            }}}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
     
          >
            {
              voiture.img.map(({url}) => <SwiperSlide>
                <div key={url} onClick={() => {onOpen(); setUrl(url)}}><img src={url} alt=""/></div></SwiperSlide>)
            }
            

          </Swiper>   
          
        )}
      
      </div>
  
        

      
      <div className='bloc-info text-left text-xl font-titlef'>
        <div className="bloc-info-txt">
          <hr className="my-4 border-red-500 md:ml-16 md:mr-16"/>
          {voiture?.price && (<h2 className='text-2xl md:text-4xl pl-16 pb-4 md:pb-2 font-titlef'>{voiture.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} </h2> )}
          <ul className='p-10 text-xl list-disc md:pl-20'>
            <li>Occasion <span className='text-red-600 text-2xl'> | </span> {voiture.kilometers} km <span className='text-red-600 text-2xl'> | </span> {voiture.chevaux} ch</li>
            <li>Essence <span className='text-red-600 text-2xl'> | </span> Automatique <span className='text-red-600 text-2xl'> | </span> {voiture.date}</li>
            <li>3566 cm3 <span className='text-red-600 text-2xl'> | </span> 463 KW</li>
            <li>{voiture.marque} <span className='text-red-600 text-2xl'> | </span> {voiture.model}</li>
            <li>5 portes <span className='text-red-600 text-2xl'> | </span> 5 places</li>
            <li>Couleur intérieur : Noir  <span className='text-red-600 text-2xl'> | </span> Matière : Cuir </li>
            <li>Couleur extérieur : Noir</li>
            <li>Référence : {voiture.reference} </li>
          </ul>     
        </div>
      </div>

      <div className='bloc-text text-left'>
        <div className='p-10 md:p-16'>
          <h2 className='text-3xl font-helv'> Option </h2>
          {voiture?.description && (<p className='pt-6'>
            {
              voiture.description
            }
          </p>)}
        </div>

      </div>

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