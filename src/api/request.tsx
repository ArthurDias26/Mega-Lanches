// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { QuerySnapshot, DocumentData } from "firebase/firestore";

interface MenuData {
  Title: string,
  data: {
    id: string,
    tile: string,
    price: number,
    ingredients: string,
    imageUrl: string

  }
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const getCollectionRef = (Ref:string) =>{
  return collection(db, Ref)
}

const getAllData = async () =>{
    
    const data : any  = [
      {
        Title: "Pizzas",
        data: await getDocs(getCollectionRef("Pizzas")),
        
      },
      {
        Title: "Hambúrgueres",
        data: await getDocs(getCollectionRef("Hamburgueres")),
        
      },
      {
        Title: "Bebidas",
        data: await getDocs(getCollectionRef("Bebidas")),
        
      }
    ]

    data.map((menuItem : any) => menuItem.data = menuItem.data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})))
    return data as MenuData[]
}

export default getAllData()