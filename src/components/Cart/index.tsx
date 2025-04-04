"use client"

import {useEffect, useRef, useState,} from 'react'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'

export default function Cart() {

    const cartRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

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

        <div className={`fixed top-0 w-[65vw] h-screen max-h-screen bg-[#F8F9FA] transition-all z-30 duration-500 shadow-[-1px_-1px_4px_2px_rgba(0,_0,_0,_0.25)] ${isVisible ? 'right-0' : '-right-[65vw]'}`}>
            <div>
    
            </div>

        </div>
    </div>
  )
}
