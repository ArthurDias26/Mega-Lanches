"use client"

import {useEffect, useRef, useState,} from 'react'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import ItemCartRow from '../ItemCartRow'

import {useContext} from 'react'
import { UserContext } from '@/utilis/contexts/userContext'
import Button from '../Button'

export default function Cart() {

    const cartRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const userData = useContext(UserContext)
    console.log(userData)
    const [cart, setCart] = useState([])



    const pageClickEvent = (e: any) => {
       if (cartRef.current !== null && !cartRef.current.contains(e.target)) {
            setIsVisible(false)
            
        }
    }

    useEffect(() => {
        
            window.addEventListener('click', pageClickEvent);
        }, []);


  return (
    <div ref={cartRef}>

        <div className="hover:text-secondary transition duration-300 text-white w-[75px]" onClick={() => setIsVisible(true)}>
            <Link href={"#"} className="flex flex-col justify-center items-center">
                <IoCartOutline className="text-2xl"/>
                <p>Carrinho</p>
            </Link>
        </div>

        <div className={`fixed top-0 w-[75vw] h-screen max-h-screen max-w-[600px] bg-[#F8F9FA] transition-all z-30 duration-500
             shadow-[-1px_-1px_4px_2px_rgba(0,_0,_0,_0.25)] ${isVisible ? 'right-0' : '-right-[75vw]'}`}>
           
            {userData?.cart.length && userData?.cart.length >= 1 ? (
                <div>
                    <div className='flex flex-col  items-center gap-4 h-[calc(100vh-60px)] overflow-y-scroll'>
                        {userData?.cart?.map((itemCart, index) => (
                            <ItemCartRow itemProps={itemCart} key={index}/>
                        ))}
                    </div>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <p className='text-center text-black text-lg bg-white p-2'>Valor Total: R${userData?.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                        <button className='w-full bg-primary hover:bg-primaryDark transition duration-300 py-4 text-xl font-bold'>Finalizar Compra</button>
                    </div>
                </div>
            ) : (
                <div className='text-black text-center flex flex-col justify-center items-center gap-3 mt-10 w-4/5 m-auto'>
                    <IoCartOutline className="text-9xl text-primary"/>      
                    <h3 className='text-3xl text-primary font-bold'>Carrinho Vazio</h3>
                    <p>Adicione os itens de se interesse, então venha ao carrinho para finalizar a compra!</p>
                    <Button buttonType='link' text='Ir Para o Menu' link='/menu'/>
                </div>
            )}

        </div>
    </div>
  )
}
