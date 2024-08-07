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

    return (
        <div className="w-full flex justify-evenly bg-primary p-4">
                {
                    slides.map((slide, index) => (
                                <Badge key={index} className="rounded-none flex justify-center gap-3 text-lg">
                                    {slide.icon}
                                    {slide.title}
                                </Badge>
                    ))
                }
        </div>
    )
}

export default BadgeCarousel

