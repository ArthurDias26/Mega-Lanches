"use client"

import Button from "../Button"

import {useContext} from 'react'
import { UserContext } from '@/utilis/contexts/userContext'

interface ItemCardProps{
    itemProps: {
      title: string,
      id: string,
      imageUrl: string,
      price: number,
      ingredients: string,
      discount?: number
    }
}

export default function ItemCard({itemProps}: ItemCardProps) {

    const userData = useContext(UserContext)
    
  return (
    <div className="flex flex-col items-center w-[280px] py-6 px-6 gap-2 shadow-[0px_0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-3xl">
        <img src={itemProps.imageUrl} alt={itemProps.title} className="rounded-3xl min-h-[200px]" />

        <h3 className="text-center text-2xl font-bold">{itemProps.title}</h3>

        <p className="text-center">{itemProps.ingredients}</p>

        <p>{itemProps.price}</p>

        <Button text="Adicionar" buttonType="action" action={() => {userData?.actions.addItemCart({...itemProps} as any)}}/>
    </div>
  )
}
