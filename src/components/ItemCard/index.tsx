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
    <div>
        <img src={imageUrl} alt={title} />

        <h3>{title}</h3>

        <p>{ingredients}</p>

        <p>{price}</p>

        <Button text="Adicionar" buttonType="action" action={() => {}}/>
    </div>
  )
}
