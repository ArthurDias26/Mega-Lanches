'use client'

import Link from "next/link"

interface ButtonProps{
    text: string
    buttonType: "link" | "action"
    link?: string
    action?(): void
    extraClass?: string
}

export default function Button({text, action, buttonType, link, extraClass}: ButtonProps) {
  if(buttonType === "link"){
    return(
        <Link href={link} className={`py-3 px-7 text-lg font-bold text-white bg-primary rounded-2xl hover:bg-primaryDark transition
        duration-300 ${extraClass}`}>
            {text}
        </Link>
    )

    return(
        <button onClick={action}>
            {text}
        </button>
    )
  }
}
