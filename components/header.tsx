import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className="py-1 text-4xl font-bold text-center">
                            Juan Herrera
                            <span className="text-secondary">
                                Dev
                            </span>
                        </h1>
                    </Link>
                    <div className="flex item-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary">

                                {logo}
                            </Link>
                        ))}

                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;