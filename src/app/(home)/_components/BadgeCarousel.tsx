"use client"

import { motion } from "framer-motion";
import { FileScan, Braces } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";

const slides = [
    {
        title: "Desenvolvimento",
        icon: <Braces />
    },
    {
        title: "Frameworks",
        icon: <Braces />
    },
    {
        title: "Especialista Frontend",
        icon: <Braces />
    },
    {
        title: "code",
        icon: <Braces />
    }
]

const BadgeCarousel = () => {
    const duplicateSlides = [...slides, ...slides]

    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity
                    }
                }}
            >
                {
                    duplicateSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{
                            width: `${100 / slides.length}%`
                        }}>
                            <div className="flex flex-col items-center justify-center h-full text-6xl bg-primary p-4">
                                <Badge className="rounded-none py-3 px-6 flex justify-center gap-3 text-lg">
                                    {slide.icon}
                                    {slide.title}
                                </Badge>
                            </div>
                        </div>
                    ))
                }
            </motion.div >
        </div >
    )
}

export default BadgeCarousel

