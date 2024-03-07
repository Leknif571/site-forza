import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import './bloctext.css'


const BlocTextService = ({whichClick}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const textService = [
    {
     id:0,
     title:'Véhicule',
     description : 
     "Retrouver notre catalogue de vehicule dans la rubrique catalogue ou en cliquant sur le bouton ci-dessous",
     content : ''
    },
    {
     id:1,
     title:'Recherche personnalisé',
     description : "Nous comprenons que chaque passionné d'automobile a des exigences uniques. C'est pourquoi nous vous proposons un service sur mesure pour trouver la voiture de vos rêves, parfaitement adaptée à vos critères.",
     content:
     <div> 
      <h3 className='text-lg font-bold pt-4 pb-4'>Comment ça marche ?</h3>

      <p className='pt-4-'>1- Consultation : Contactez-nous pour discuter de vos préférences, vos besoins et votre budget. Notre équipe d'experts en automobiles est là pour vous conseiller.</p>

      <p className='pt-4'>2- Recherche : Mettre à profit notre vaste réseau et expertise pour rechercher la voiture parfaite pour vous. Examiner minutieusement chaque détail pour s'assurer qu'elle répond à vos critères .</p>

      <p className='pt-4'>3- Propositions : Présenter les véhicules qui correspondent à vos attentes. Chaque proposition est soigneusement choisie.</p>
  
      <p className='pt-4'>4- Accompagnement : Une fois que vous avez sélectionné votre véhicule idéal, notre équipe s' occupe de chaques étapes  du processus, de l'inspection initiale jusqu'a  l' achat. </p>
    </div>
    },
    { 
     id:2,
     title:'Location',
     description : 
     "En cours",
     content : ''
    },
    {
     id:3,
     title:'Accompagnement administratif',
     description : 
     "Nous sommes ravis de vous accompagner dans les démarches administratives  (Luxembourg, Allemagne, Belgique, France, Pays-Bas) liées à l'acquisition de votre nouvelle voiture. Afin de faciliter votre transition vers la possession et l'utilisation de votre véhicule, veuillez trouver ci-dessous un résumé des étapes administratives importantes à suivre :",
     content: <div>
      <p className='pt-4'>Immatriculation : S’assurer de se conformer aux réglementations locales en matière d'immatriculation de véhicules. Cela peut inclure l'enregistrement du véhicule auprès des autorités compétentes et l'obtention des plaques d'immatriculation adéquates.</p>
      <p className='pt-4'>Contrôle technique : Vérifier si votre véhicule est soumis à des contrôles techniques périodiques conformément à la législation locale. S’assurer que votre voiture répond aux normes de sécurité requises et effectuer les contrôles nécessaires le cas échéant.</p>
      <p className='pt-4'>Entretien régulier : Gardez un suivi des entretiens réguliers de votre voiture, y compris les changements d'huile, les révisions périodiques et les réparations nécessaires. Un entretien approprié garantira le bon fonctionnement de votre véhicule sur le long terme.</p>
      <p className='pt-4'>Fiscalité : Vous conseillez sur les implications fiscales liées à la possession et à l'utilisation de votre voiture, telles que les taxes de circulation, les taxes d'importation (le cas échéant) et d'autres frais gouvernementaux associés.</p>

      <p className='pt-4'>N'hésitez pas à nous contacter si vous avez des questions ou si vous avez besoin d'assistance supplémentaire pour l'une des démarches mentionnées ci-dessus. Nous sommes là pour vous aider à rendre votre expérience automobile aussi fluide que possible.</p>
     </div>
    },
    {
      id:4,
      title:'Livraison',
      description : 
      "Afin de garantir un confort optimal, Forza propose la livraison de votre vehicule selon vos préférences en termes de jour et d'heure. Notre service de livraison vous contacte systématiquement pour confirmer le créneau horaire convenu pour l’expédition de votre véhicule.",
      content: <div>
                <p className='pt-4'> 
                  Cette livraison est réalisée par un chauffeur de notre equipe , offrant une démonstration complète du véhicule ainsi qu'une explication détaillée de son fonctionnement et de ses options. 
                </p>
                <p className='pt-4'>
                  C’est l’opportunité de poser toutes vos questions, auxquelles il répondra avec plaisir. La livraison à domicile est une expérience  avec un service complémentaire réalisé par Forza.
                </p>
                <p className='pt-4'>
                   Son prix est calculé en fonction de la distance entre notre agence où se trouve votre véhicule et le lieu de livraison, garantissant ainsi une expérience sans tracas pour les clients. 
                </p>
                <p className='pt-4'>
                   En unissant nos forces, Forza s'engage à fournir un service client de qualité, adapté aux besoins et préférences individuels de nos clients.
                </p>
               
               </div>
    }
 ]

  return (
    <div className='p-4'>
      <div className='text-red-500 text-xl font-titlef text-left'>Nos services</div> 
      {whichClick === 5 ? 
        textService.map(v => 
            <div key={v.id}>
              
              <h2 className='text-white text-3xl text-gray-200 font-nbold text-left mt-8'>
              {v.title}
              </h2>
  
              <p className='text-gray-300 text-left text-lg mt-8'>
                {v.description}
              </p>
          
              <div className='text-gray-300 text-left text-lg mt-5'>
                {v.content}
              </div>
              
          </div>
        )
      :
        <div>
            
            <h2 className='text-white text-3xl text-gray-200 font-nbold text-left mt-10'>
            {textService[whichClick].title}
            </h2>

            <p className='text-gray-300 text-left text-lg mt-10'>
              {textService[whichClick].description}
            </p>
        

          {
            whichClick === 1 ?
            <Button className='mt-16' color='danger' variant='solid' size='lg' onClick={() => {onOpen()}}>Comment ça marche ?</Button>
            : ''
          }

          {
            whichClick === 3 ?
            <Button className='mt-16' color='danger' variant='solid' size='lg' onClick={() => {onOpen()}}>En savoir plus</Button>
            : ''
          }

          {
            whichClick === 4 ?
            <Button className='mt-16' color='danger' variant='solid' size='lg' onClick={() => {onOpen()}}>Comment ça marche ?</Button>
            : ''
          }

          {
            whichClick === 0 ?
            <a href="/catalogue"><Button className='mt-16' color='danger' variant='solid' size='lg'>Notre catalogue</Button></a>
            : ''
          }
        </div>
    }     

       

        <Modal isOpen={isOpen} size='5xl' onOpenChange={onOpenChange} className="bg-gray-900">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-gray-200">{textService[whichClick].title}</ModalHeader>
                  <ModalBody className='text-gray-200'>
                              {textService[whichClick].content}
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

export default BlocTextService