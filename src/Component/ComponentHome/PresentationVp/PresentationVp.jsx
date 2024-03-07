import React from 'react'
import './presentationvp.css'
import carImage2 from "../../../assets/images/carImage2.jpg"


const PresentationVp = () => {
  return (
    <div className="bg-gradient flex flex-row items-center h-max lg:h-screen">
        <img src={carImage2} className="hidden lg:opacity-60 lg:block lg:object-cover lg:h-full lg:w-1/3" alt="Image"/>
        <div className="w-full h-max p-8 text-left lg:w-2/3">
            <h1 className="text-5xl font-titlef text-red-500 lg:text-7xl">Bienvenue chez Forza </h1>
            <h2 className="text-2xl font-titlef mb-8 lg:mb-8 lg:text-3xl pl-1">Dédié à la vente de véhicules de prestige !</h2>
            <p className="text-gray-200 mb-7 text-lg lg:text-lg lg:mb-4">Nous sommes ravis de vous accueillir dans l'univers où le luxe et la performance se rencontrent. Notre plateforme est conçue pour les passionnés d'automobiles haut de gamme, ceux qui recherchent l'excellence et l'élégance dans chaque détail.

            Découvrez une sélection de véhicules de prestige soigneusement choisies afin de vous satisfaire . Que vous recherchiez une supercar italienne emblématique, une berline allemande de renommée mondiale, ou un SUV de luxe pour dompter les routes avec style, notre catalogue saura répondre à vos attentes les plus élevées.
            </p>

            <p className="text-gray-200 mb-7 text-lg lg:text-lg lg:text-gray-200 lg:mb-8 lg:mb-16">
            Nous proposons les marques les plus prestigieuses et les modèles les plus exclusifs pour offrir à nos clients une expérience unique et inoubliable.

            Parcourez notre site pour découvrir nos services  sur mesure. Notre équipe d expert et de passionnés est à votre disposition pour vous guider tout au long de votre processus d'achat, depuis la recherche de votre véhicule jusqu'à la livraison à votre porte.

            Nous sommes impatients de vous accompagner dans votre quête de l'excellence automobile et de vous offrir une expérience exceptionnelle.</p>      
        </div>
    </div>

  )
}

export default PresentationVp