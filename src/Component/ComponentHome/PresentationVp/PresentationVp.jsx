import React from 'react'
import './presentationvp.css'
import CardVoiture from '../../ComponentMultiUse/Card'
import { useState, useEffect } from 'react'
import { db } from '../../../Service/firebase.config'

import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore'


const PresentationVp = () => {

    let [voitures, setVoitures] = useState([])
    let [voitures2, setVoitures2] = useState([])
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
                    setLastVisible(voiture.docs[voiture.docs.length-1]);            
                })
            }
            getVoitures();

            const getSecondVoiture = async () => {
              await getDocs(query(collectionRef2, limit(8), orderBy("price"), startAfter(lastVisible))).then((voiture) => {
                  let voituresData = voiture.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                  setVoitures2(voituresData);              
              }
            )}
            getSecondVoiture();

    }, [])



  return (
    <div>
      <h2 className='font-titlef text-gray-200 text-2xl md:text-4xl text-left p-6'>
          Tendances en stock
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xm:grid-cols-4 gap-4 p-4 pt-0">
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

  )
}

export default PresentationVp