import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai";
import { IoRestaurantOutline, IoStorefrontOutline, IoCartOutline  } from "react-icons/io5";


export default function Header() {
  return (
    <header>
        <div className="md:hidden absolute left-0 bottom-0 w-full h-[80px] bg-primary">
            <div className="flex justify-around items-center text-white h-full">
                <div className="hover:text-secondary transition duration-300">
                    <Link href={'/'} className="flex flex-col justify-center items-center">
                        <AiOutlineHome className="text-2xl"/>
                        <p>Início</p>
                    </Link>
                </div>

                <div className="hover:text-secondary transition duration-300">
                    <Link href={'/menu'} className="flex flex-col justify-center items-center">
                        <IoRestaurantOutline className="text-2xl"/>
                        <p>Menu</p>
                    </Link>
                </div>

                <div className="hover:text-secondary transition duration-300">
                    <Link href={'/about'} className="flex flex-col justify-center items-center">
                        <IoStorefrontOutline className="text-2xl"/>
                        <p>Sobre nós</p>
                    </Link>
                </div>

                <div className="hover:text-secondary transition duration-300">
                    <Link href={"#"} className="flex flex-col justify-center items-center">
                        <IoCartOutline className="text-2xl"/>
                        <p>Carrinho</p>
                    </Link>
                </div>
            </div>
        </div>

        <div className="hidden md:block absolute left-0 top-0 w-full h-[80px] bg-primary">
            <div className="flex justify-between items-center px-5 h-full">
                <h2 className="text-white text-3xl font-displayTitle">
                    <Link href={'/'}>MEGA LANCHES</Link>
                </h2>

                <div className="flex justify-around items-center text-white h-full w-[300px]">
                    <div className="hover:text-secondary transition duration-300">
                        <Link href={'/'} className="flex flex-col justify-center items-center">
                            <AiOutlineHome className="text-2xl"/>
                            <p>Início</p>
                        </Link>
                    </div>

                    <div className="hover:text-secondary transition duration-300">
                        <Link href={'/menu'} className="flex flex-col justify-center items-center">
                            <IoRestaurantOutline className="text-2xl"/>
                            <p>Menu</p>
                        </Link>
                    </div>

                    <div className="hover:text-secondary transition duration-300">
                        <Link href={'/about'} className="flex flex-col justify-center items-center">
                            <IoStorefrontOutline className="text-2xl"/>
                            <p>Sobre nós</p>
                        </Link>
                    </div>

                    <div className="hover:text-secondary transition duration-300">
                        <Link href={"#"} className="flex flex-col justify-center items-center">
                            <IoCartOutline className="text-2xl"/>
                            <p>Carrinho</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
