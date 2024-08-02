"use client"

import Header from "../_components/Header";
import { motion } from "framer-motion";
import { Button } from "../_components/ui/button";
import Link from "next/link";
import { Github, Linkedin } from 'lucide-react';
import { Badge } from "../_components/ui/badge";
import BadgeCarousel from "./_components/BadgeCarousel";

const Home = () => {
    return (
        <>
            <title>Mateus Eduardo</title>
            <Header />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col mt-28 justify-center items-center p-2 h-screen"
            >
                <div className="flex flex-col max-w-4xl gap-2">
                    <div className="flex items-center gap-1">
                        <p className="text-2xl opacity-40">Hi, I`m</p>
                        <span className="font-bold text-2xl">Mateus Eduardo</span>
                    </div>
                    <p className="text-6xl max-md:text-4xl font-bold">Especialista em Desemvolvimento Front-end</p>
                    <p className="text-2xl opacity-40 text-justify">Trabalho com projetos front-end de todos os portes, desde websites simples até grandes aplicações web, garantindo resultados excepcionais.</p>
                    <div className="flex gap-3">
                        <Link href="https://github.com/mateusedua" target="_blank">
                            <Badge variant="secondary" className="rounded-md p-2">
                                <Github />
                            </Badge>
                        </Link>
                        <Link href="https://www.linkedin.com/in/mateus-eduardo-83025a161/" target="_blank">
                            <Badge variant="secondary" className="rounded-md p-2">
                                <Linkedin />
                            </Badge>
                        </Link>
                    </div>
                </div>
                <div className="mt-32">
                    <Button className="text-lg font-bold p-7">PROJETOS</Button>
                </div>
                <div className="mt-10">
                    <div className="rounded-full border-3 bg-secondary w-12 h-20 relative">
                        <div className="w-4 h-4 rounded-full absolute bg-secondary-foreground top-[10px] left-[50%] transform -translate-x-1/2 animate-[wheel_2s_infinite]"></div>
                    </div>
                </div>
            </motion.div>
            <BadgeCarousel />
        </>
    )
}

export default Home