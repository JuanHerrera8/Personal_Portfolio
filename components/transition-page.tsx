"use client"

import { transitionVariantPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
                    variants={transitionVariantPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}>

                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;