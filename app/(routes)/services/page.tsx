import AvatarService from "@/components/avatar-service";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import SliderServices from "@/components/slider-services";
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarService />
            <div className="grid items-center justify-center h-screen pl-5 md:p-0 max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-24 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "} <span className="font-bold text-secondary">Servicios.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300"> Brindo servicios de desarrollo web frontend, creando sitios y aplicaciones dinámicas, atractivas y altamente funcionales. Utilizo tecnologías modernas como HTML, CSS, JavaScript, React.js y Next.js para diseñar interfaces intuitivas, responsivas y alineadas con la identidad visual de cada cliente, mejorando su presencia digital y experiencia de usuario. 🚀</p>
                    <Link href="https:/www.linkedin.com/in/juanherrera8" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>
                </div>

                <SliderServices />

            </div>
        </>
    );
}

export default ServicesPage;