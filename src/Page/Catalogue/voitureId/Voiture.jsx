import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs} from 'firebase/firestore'
import { db } from '../../../Service/firebase.config'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import ImageGallery from "react-image-gallery";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import "./voiture.css"


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
                      console.log(doc.data())
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
        {voitureD?.title && (<h1 key={voitureD.title} className='text-4xl font-titlef text-left p-10 pt-8 md:pl-16 '>{voitureD.title}</h1>)}
        <div className='mt-2 flex flex-row justify-center'>
          <ImageGallery items={img} showBullets showIndex/>
        </div>
      
      </div>
  
        

      
      <div className='bloc-info text-left text-xl font-titlef'>
        <div className="bloc-info-txt">
          <hr className="my-4 border-red-500 md:ml-16 md:mr-16"/>
          {voitureD?.price && (<h2 className='text-2xl md:text-4xl pl-16 pb-4 md:pb-2 font-titlef'>{voitureD.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} </h2> )}
          <ul className='p-10 text-xl list-disc md:pl-20'>
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