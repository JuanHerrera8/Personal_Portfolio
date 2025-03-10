"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid justify-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="500" height="500" alt="profile pic" className="" />

                <div className="flez flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo,
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000,]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto text-xl mb-8">
                        Soy un desarrollador de software apasionado por la tecnología y la programación.
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10 ">
                        <Link href="/portfolio" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-white/50'>
                            Ver proyectos
                        </Link>
                        <Link href="https://www.linkedin.com/in/juanherrera8/" className='px-3 py-2 transition-all border-2 text-secondary border-secondary cursor-pointer text-md w-fit rounded-xl  hover:shadow-secondary/50 '>
                            Contacta conmigo
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction
