import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Github, } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/juanherrera8/",
    },
    {
        id: 5,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/JuanHerrera8",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Freelance (Web & Mobile)",
        subtitle: "Remoto - Freelance",
        description: "Diseño y desarrollo de aplicaciones web y mobile utilizando React.js, React Native y Expo. Creación de componentes reutilizables para mejorar la experiencia de usuario. Optimización de rendimiento para dispositivos iOS, Android y navegadores web.",
        date: "Actualidad",
    },
    {
        id: 2,
        title: "Trabajo de Grado",
        subtitle: "Politecnico Jaime Isaza Cadavid.",
        description: "Desarrollo de un prototipo de chatbot utilizando técnicas de inteligencia artificial y un servicio de mensajería instantánea para la consulta de información de la personería distrital de Medellín",
        date: "Julio 2024",
    },
    {
        id: 3,
        title: "Analista de Infraestructura",
        subtitle: "Technifi.",
        description: "Administración y mantenimiento de Directorio Activo, incluyendo la gestión de usuarios, permisos y grupos de seguridad. Seguimiento y resolución de problemas relacionados con los servidores, asegurando su correcto funcionamiento. Recepción y resolución de incidencias relacionadas con el acceso al sistema, configuración de equipos y problemas en general. Comunicación clara y oportuna para garantizar la satisfacción de los usuarios. Coordinación de tareas y peticiones a través de Microsoft Teams. Respuesta inmediata a las necesidades del equipo para mantener la operativa diaria.",
        date: "Julio 2024",
    },
    {
        id: 4,
        title: "Practicante- Analista de supercómputo",
        subtitle: "Universidad EAFIT (Centro de computación Científica Apolo).",
        description: "Computación de alto rendimiento (HPC). Compilación de software de investigación científica. Gestión de clusters Linux y servidores virtuales. Ordenación de nodos y gestión de usuarios. Compilación y optimización de aplicaciones. Manejo de varios lenguajes de programación.",
        date: "Julio de 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        text: "Cursos y certificaciones",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20,
        text: "Habilidades dominadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 6,
        title: "ChatApp",
        image: "/chat.png",
        urlGithub: "#https://github.com/JuanHerrera8/PruebaTecnicaCariAi",
        urlDemo: "prueba-tecnica-cari-ai.vercel.app/",
    },
    {
        id: 5,
        title: "PruebaTecnicaQ10",
        image: "/q10.png",
        urlGithub: "https://github.com/JuanHerrera8/PruebaTecnicaQ10",
        urlDemo: "https://juanherrera8.github.io/PruebaTecnicaQ10/",
    },
    {
        id: 4,
        title: "Frontend Mentor",
        image: "/frontend.jpg",
        urlGithub: "https://github.com/JuanHerrera8/Emtelco-PruebaTecnica",
        urlDemo: "https://juanherrera8.github.io/Emtelco-PruebaTecnica/",
    },
    {
        id: 3,
        title: "Deck-of-Cards-Game",
        image: "/decks.png",
        urlGithub: "https://deck-of-cards-game.vercel.app/",
        urlDemo: "https://github.com/JuanHerrera8/Deck-Of-Cards-Game",
    },
    {
        id: 2,
        title: "Tasks-Aplicattion ",
        image: "/tasks.png",
        urlGithub: "https://github.com/JuanHerrera8/react-tasks-aplicattion",
        urlDemo: "https://juanherrera8.github.io/react-tasks-aplicattion/",
    },
    {
        id: 1,
        title: "Buscador de Gifs",
        image: "/giffy.png",
        urlGithub: "https://github.com/JuanHerrera8/Giffy",
        urlDemo: "https://giffy2-0.vercel.app/",
    }
];

