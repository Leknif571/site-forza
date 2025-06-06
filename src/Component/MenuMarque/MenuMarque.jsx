import React from 'react'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import {db} from '../../Service/firebase.config'


const MenuMarque = ({onSelectMarque, valueSelectMarque}) => {

    const [marque, setMarque] = useState([])
    const collectionRefM = collection(db, 'Marque')

    useEffect(() => {
            const getMarque = async () => {
                await getDocs(collectionRefM).then((marque) => {
                    let marqueData = marque.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setMarque(marqueData);
                })
            }
            getMarque();
    }, [])

  return (
    <nav class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar" data-nc-id="Nav">
        <ul class="flex gap-2  p-2 list-none py-2">
            <li class="relative" >
                <button onClick={() =>onSelectMarque("all")} className={"block !leading-none font-medium whitespace-nowrap px-4 py-2 text-sm capitalize rounded-lg  focus:outline-none text-white" + (valueSelectMarque == "all" ? " bg-neutral-500 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-600"  : " bg-neutral-900 dark:bg-neutral-700 text-neutral-50 dark:text-neutral-50") }>All</button>
            </li>
            {marque.map(({marque, index}) => (              
                <li class="relative" >
                    <button onClick={()=> onSelectMarque(marque)} className={"block !leading-none font-medium whitespace-nowrap px-4 py-2 text-sm capitalize rounded-lg focus:outline-none text-white"  + (valueSelectMarque == marque ? " bg-neutral-500 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-600"  : " bg-neutral-900 dark:bg-neutral-700 text-neutral-50 dark:text-neutral-50")} >{marque}</button>
                </li>
            ))}
        </ul>
    </nav>
        



  )
}

export default MenuMarque