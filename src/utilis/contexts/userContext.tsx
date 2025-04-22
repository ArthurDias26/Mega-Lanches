'use client'

import { createContext, ReactNode, useState } from "react"

interface ItemCart {
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

interface UserInfo{
    userName: string,
    phone: string,
    address: {
        bairro: string,
        rua: string,
        numero: string
        complemento: string,
    }
    lastOrder: ItemCart[] | null
}

interface UserData {
    userInfo: UserInfo
    cart: ItemCart[],
    actions: {
        addItemCart: (newItem: ItemCart) => void,
        removeItemCart: (removedItem: ItemCart) => void,
        updateUserInfo: (UserInfo: Partial<UserInfo>) => void
    }
}

// Criando contexto
export const UserContext = createContext<UserData | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [userCart, setUserCart] = useState<ItemCart[]>([])
    const [userInfo, setUserInfo] = useState<UserInfo>({
        userName: "",
        phone: "",
        address: {
            bairro: "",
            rua: "",
            numero: "",
            complemento: "",
        },
        lastOrder: null
        
    })

    function addItemCart(newItem: ItemCart) {
        setUserCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id)

            if (existingItemIndex !== -1) {
                return prevCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prevCart, { ...newItem, quantity: 1 }]
            }
        })
    }

    function removeItemCart(removedItem: ItemCart){
        setUserCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item.id === removedItem.id)

            if(prevCart[itemIndex].quantity > 1){
                return prevCart.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
                )
            }
            else{
                return prevCart.filter((item, index) =>
                    index === itemIndex ? false : item
                )
            }
            
        })
    }

    function updateUserInfo(UserInfo: Partial<UserInfo>){
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...UserInfo
        }))

    }

    const userData: UserData = {
        userInfo: userInfo,
        cart: userCart,
        actions: { addItemCart, removeItemCart, updateUserInfo },
    }

    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>
}


