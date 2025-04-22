"use client"

import {useContext} from 'react'
import { UserContext } from '@/utilis/contexts/userContext'

interface ItemCartProps {
    itemProps: {
      title: string,
      id: string,
      quantity: number,
      ingredients: string,
      imageUrl: string,
      price: number,
      discount?: number
      additional: {
          name: string,
          price: number,
      }[]
    }
}

export default function ItemCartRow({itemProps}: ItemCartProps) {

    const userData = useContext(UserContext)
    
  return (
    <div className=" text-black w-[95%] p-2 gap-2 shadow-[0px_0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-3xl">
       <div className="flex items-center">
            <img src={itemProps.imageUrl} alt={itemProps.title} className="rounded-3xl max-w-[40%] md:max-w-[25%]" />

            <div className="flex flex-col justify-around items-center w-[60%] ">
                <h3 className="text-xl font-bold md:text-2xl">{itemProps.title}</h3>
                <p className="text-sm text-center md:text-lg">{itemProps.ingredients}</p>
            </div>
       </div>

        <div className="flex flex-col items-center mt-2 ">
          <div className="flex justify-center items-center gap-1 select-none ">
              <span className="text-2xl text-white font-bold bg-primary hover:bg-primaryDark transition w-[30px] h-[30px] rounded-full flex justify-center items-center" onClick={() => userData?.actions.addItemCart({...itemProps} as any)}>+</span>
              <p className='text-xl'>{itemProps.quantity}</p>
              <span className="text-2xl text-white font-bold bg-primary hover:bg-primaryDark transition w-[30px] h-[30px] rounded-full flex justify-center items-center" onClick={() => userData?.actions.removeItemCart({...itemProps} as any)}>-</span>

          </div>

          <p className="text-sm mt-1">Total: R${String(itemProps.price * itemProps.quantity).replace(".", ",")}</p>

        </div>

    </div>
  )
}
