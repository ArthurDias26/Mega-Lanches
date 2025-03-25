"use client"

import Button from "../Button"

interface ItemCardProps{
    title: string,
    imageUrl: string,
    price: number,
    ingredients: string,
    discount?: number
}

export default function ItemCard({title, imageUrl, ingredients, price}: ItemCardProps) {
    
  return (
    <div className="flex flex-col items-center w-[300px] py-6 px-6 gap-2 shadow-[0px_0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-3xl">
        <img src={imageUrl} alt={title} className="rounded-3xl" />

        <h3 className="text-center text-2xl font-bold">{title}</h3>

        <p className="text-center">{ingredients}</p>

        <p>{price}</p>

        <Button text="Adicionar" buttonType="action" action={() => {console.log("compra")}}/>
    </div>
  )
}
