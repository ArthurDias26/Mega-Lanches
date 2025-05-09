"use client"

import Button from "@/components/Button";

export default function Home() {

  return (
    <div className="">
      <section className="relative -z-10">
        <div className="bg-black/40 absolute top-0 left-0 h-full w-full"></div>

        <div className="bg-[url(/images/home/hero-background.jpg)] bg-center bg-cover h-[45vh] flex justify-center items-center">
            <div className="z-10 relative">
              <h1 className="text-white text-5xl text-center font-displayTitle font-normal">
                MEGA LANCHES
              </h1>

              <p className="text-white text-center text-[12px] w-3/5 m-auto my-3">
                Bem-vindo à Mega Lanches! Peça online e aproveite uma experiência deliciosa, rápida e prática!
              </p>

              <Button buttonType="link" link="menu" text="Ver Cardápio" extraClass="block m-auto w-max mt-4"/>

            </div>
        </div>

      </section>

      
    </div>
  );
}
