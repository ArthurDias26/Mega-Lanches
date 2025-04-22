'use client'

import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";
import MenuItems from "../../api/request"

interface MenuTypes{
  Title: string,
  data: {
    title: string,
    id: string,
    imageUrl: string,
    price: number,
    ingredients: string,
    discount?: number
  }[]
}

export default function Menu() {
  

  const [menuData, setMenuData] = useState<MenuTypes[]>([])

  useEffect(() => {
    const getData = async () => {
      const getMenuData: any = await MenuItems
      setMenuData(getMenuData)
    }

    getData()
  }, [])

  return (
    <div>
        {menuData.map((menuTypes, index) => (
          <section key={index}>
            <h2>{menuTypes.Title}</h2>
            {menuTypes.data.map((item: any, index: number) => (
                <ItemCard itemProps={item} key={index}/> 
            ))}
          </section>
        ))}
    </div>
  )
}
