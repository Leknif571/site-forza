import React from 'react'
import './presentationvp.css'
import CardVoiture from '../../ComponentMultiUse/Card'
import { useState, useEffect } from 'react'
import { db } from '../../../Service/firebase.config'
import MenuMarque from '../../MenuMarque/MenuMarque'

import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore'


const PresentationVp = () => {

    let [voitures, setVoitures] = useState([])
    let [voitures2, setVoitures2] = useState([])

    let [selectMarque, setSelectMarque] = useState('all')

    let [copyVoitures, setCopyVoitures] = useState([])
    let [copyVoitures2, setCopyVoitures2] = useState([])
    
    

    let [visible, setVisible] = useState(false)

    let [lastVisible, setLastVisible] = useState(null)
 
    const collectionRef = collection(db, "Voitures")
    const collectionRef2 = collection(db, "Voitures")


    const queryHandle = query(collectionRef, limit(8))

    useEffect(() => {
            const getVoitures = async () => {
                await getDocs(queryHandle).then((voiture) => {
                    let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setVoitures(voituresData);  
                    setCopyVoitures(voituresData)
                    setLastVisible(voiture.docs[voiture.docs.length-1]);            
                })
            }
            getVoitures();

            const getSecondVoiture = async () => {
              await getDocs(query(collectionRef2, limit(8), orderBy("price"), startAfter(lastVisible))).then((voiture) => {
                  let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                  setVoitures2(voituresData);   
                  setCopyVoitures2(voituresData)           
              }
            )}
            getSecondVoiture();

    }, [])

    
    const filterMarque = (v) =>
      {

          setVoitures(copyVoitures)
          setVoitures2(copyVoitures2)
          if(v !== 'all'){
              let newArrayVoitureMa = voitures.filter((voiture) => voiture.marque === v)
              let newArrayVoitureMa2 = voitures2.filter((voiture) => voiture.marque === v)

              setVoitures(newArrayVoitureMa)
              setVoitures2(newArrayVoitureMa2)
              setSelectMarque(v)

          }else{
              setVoitures(copyVoitures)
              setVoitures2(copyVoitures2)
              setSelectMarque("all")
          }
      }



  return (
    <div>
      <h2 className='font-bold text-gray-800 dark:text-gray-200 text-xl md:text-3xl text-left pl-6 py-3'>
          AVAILABLE CARS
      </h2>
      <div className='p-2'>
      <MenuMarque onSelectMarque={filterMarque} valueSelectMarque={selectMarque}/>
      </div>
    <div className='px-10 py-4'>
        <div className="grid gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {
      voitures.length > 0 ? 
        voitures.map((car, index) => (

          <CardVoiture arrayElementCar={car} />
        ))
        : <p>Aucune voiture trouvée</p>
      } 

      {
        voitures2.length > 0 ? 
        voitures2.map((car, index) => (
          <div className={visible ? '' : 'hidden'} key={index}>
            <CardVoiture arrayElementCar={car} />
          </div>
        ))
        : ''
      }
      </div>
      {
        visible ?  ''
        :
        <button onClick={() => setVisible(true)} className='rouded-lg border border-red-700 p-2 text-red-700 font-titlef text-lg lg:text-xl hover:bg-red-700 hover:text-white transition duration-300 ease-in-out flex mx-auto my-4'>
          Voir plus	
        </button>
      }
     
    </div>
    </div>

  )
}

export default PresentationVp