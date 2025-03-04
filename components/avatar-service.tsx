"use client"

import MotionTransition from "./transition-component";
import Image from 'next/image';



const AvatarService = () => {
    return (
        <div>
            <MotionTransition position="rigth" className="bottom-0 left-0 hidden md:inline-block md:absolute">
                <Image src='/services.png' width={300} height={300} alt="Avatar" />
            </MotionTransition>
        </div>
    );
}

export default AvatarService;