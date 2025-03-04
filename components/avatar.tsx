"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" height="300" width="300" className="w-full h-full" alt="Avatar pic" />
        </MotionTransition>
    );
}

export default Avatar;