// import dependances
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs} from 'firebase/firestore'
import { db } from '../../../Service/firebase.config'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip} from "@nextui-org/react";
      // import ImageGallery from "react-image-gallery";
// import LightGallery dependances
import fjGallery from 'flickr-justified-gallery';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

// import style
import "./voiture.css"
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';


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
      <div className='bloc-img h-max'>
      <div className='hidden lg:block lg:w-full lg:pl-16 lg:pt-8'>
            <Breadcrumbs key='danger' color='danger' size='lg'>
                <BreadcrumbItem href='/'>Accueil</BreadcrumbItem>
                <BreadcrumbItem href='/catalogue'>Catalogue</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumbs>
        </div>
        {voitureD?.title && (
          <div className='flex flex-col p-4 md:flex-row justify-between'>
            <h1 key={voitureD.title} className='flex justify-center text-3xl font-titlef text-left md:pt-8 md:text-4xl md:pl-40'>{voitureD.title}</h1>
            <div className='flex p-2 justify-center md:pt-8 md:pr-40'>
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
        <div className='h-5/6'>

          <LightGallery
              plugins={[lgZoom, lgVideo]}
              mode="lg-fade"
              pager={false}
              thumbnail={true}
              download={false}
              galleryId={'nature'}
              autoplayFirstVideo={false}
              elementClassNames={'gallery'}
              mobileSettings={{
                controls: false,
                showCloseIcon: false,
                download: false,
                rotate: false,
              }}
            >
            
              { 
        img.map((u,v) =>
                
              <a
                data-pinterest-text="Pin it2"
                data-tweet-text="lightGallery slide  2"
                className="gallery__item"
                data-src={u.original}>
                <img
                  className={v === 0 ? "img-responsive inline-block w-1/3 m-1 first-img" : "img-responsive hidden w-1/3 m-1 all-img md:inline-block"}
                  src={u.original}
                />
                
              </a>
      ) 

      }
      
      </LightGallery>
      <p className='block md:hidden'>1/{img.length}</p>

        </div>
      
      </div>
  
        

      <hr className="m-1 border-red-500 md:ml-16 md:mr-16"/>
      <div className='bloc-info text-left text-xl font-titlef'>
        <div className="bloc-info-txt pt-5 md:pt-5">
          
          {voitureD?.price && (<h2 className='text-4xl md:text-5xl text-center md:text-left pb-3 md:pb-3 md:pl-16 font-titlef'>{voitureD.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} </h2> )}
          <ul className='pl-10 pb-5 text-xl list-disc md:pl-20 md:pb-5'>
            <li>{voitureD.etat} <span className='text-red-600 text-2xl'> | </span> {voitureD.kilometers} km <span className='text-red-600 text-2xl'> | </span> {voitureD.chevaux} ch</li>
            <li>{voitureD.energie} <span className='text-red-600 text-2xl'> | </span> {voitureD.automatique === "on" ? 'Automatique' : "Manuel"} <span className='text-red-600 text-2xl'> | </span> {voitureD.date}</li>
            <li>{voitureD.capacityR} L <span className='text-red-600 text-2xl'> | </span> {voitureD.puissance} KW</li>
            <li>{voitureD.marque} <span className='text-red-600 text-2xl'> | </span> {voitureD.model}</li>
            <li>{voitureD.nbPorte} portes <span className='text-red-600 text-2xl'> | </span> {voitureD.nbPlace} places</li>
            <li>Couleur intérieur : {voitureD.couleurInt}  <span className='text-red-600 text-2xl'> | </span> Matière : {voitureD.matSiege} </li>
            <li>Couleur extérieur : {voitureD.couleurExt}</li>
            <li>Référence : {voitureD.reference} </li>
          </ul>     
        </div>
      </div>

      <div className='bloc-text text-left'>
        <div className='p-10 md:p-16'>
          <h2 className='text-3xl font-helv'> Option </h2>
          {voitureD?.description && (<p className='pt-6'>
            {
              voitureD.description
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