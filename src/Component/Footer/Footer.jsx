import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import './footer.css'


const Footer = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  let [whichSection, setWhichSection] = useState(0)

  let tableText = [
    {
      title: 'Contact',
      corps : <div>
                  <p>Adresse e-mail : forzalu.com@gmail.com </p> 
                   <p>Numéro téléphone : 06 29 90 52 06 <span className='text-red-600 text-2xl'> | </span> 07 67 18 32 15</p>
              </div>
    },
    {
      title: 'Mention légale',
      corps : <div>
                  <p>Raison social : Forza</p>
                  <p>Numéro de siret : XXX XXXX XXXX</p>
              </div>
    },
    {
      title: 'Crédit',
      corps : <div>Ici tout relatif au crédit</div>
    }
  ]
  return (
    <div>
        <footer className="bg-gray-900 text-white p-8" id='footer'>
            <hr className="my-4 border-gray-700"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Liens utiles</h3>
                <ul className="list-unstyled">
                  <li><button className="hover:text-gray-300" onClick={() => {onOpen(); setWhichSection(0)}}>Contact</button></li>
                  <li><button className="hover:text-gray-300" onClick={() => {onOpen(); setWhichSection(1)}}>Mention légale</button></li>
                  <li><button className="hover:text-gray-300" onClick={() => {onOpen(); setWhichSection(2)}}>Crédit</button></li>
                </ul>
              </div>
              <div className="flex flex-col" style={{borderLeft:"1px solid lightgray", borderRight:"1px solid lightgray"}}>
                <h3 className="text-xl font-bold mb-2 text-gray-300">Suivez-nous</h3>

                <ul className="list-unstyled">
                  {/* <li><a href="https://www.facebook.com/" target="_blank" className="mr-4 hover:text-gray-400"><i className="fa fa-facebook">Facebook</i></a></li> */}
                  <li><a href="https://www.instagram.com/forza.lu/" target="_blank" className="mr-4 hover:text-gray-400"><i className="fa fa-instagram">Instagram</i></a></li>
                  {/* <li><a href="https://telegram.com/" target="_blank" className="mr-4 hover:text-gray-400"><i className="fa fa-twitter">Telegram</i></a></li> */}
                  <li><a href="https://t.snapchat.com/RhzCXlFX" target="_blank" className="mr-4 hover:text-gray-400"><i className="fa fa-twitter">Snapchat</i></a></li>
                </ul>
                
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-left text-gray-300">Adresse</h3>
                <ul className="list-unstyled text-left">
                  {/* <li><a href="#">1576 avenue Shibuya,</a></li>
                  <li><a href="#">Japon, Tokyo</a></li>
                  <li><a href="#">Shibuya, Shibuyaku 150-0002</a></li> */}
                </ul>
              </div>
            </div>
          </footer>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-gray-900">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-gray-200">{tableText[whichSection].title}</ModalHeader>
                  <ModalBody className='text-gray-200'>
                              {tableText[whichSection].corps}
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

export default Footer