"use client"

import Header from "../_components/Header";
import { motion } from "framer-motion";
import { Button } from "../_components/ui/button";
import Link from "next/link";
import { Github, Linkedin } from 'lucide-react';
import { Badge } from "../_components/ui/badge";
import BadgeCarousel from "./_components/BadgeCarousel";
import ProjectCarousel from "./_components/ProjectCarousel";

const Home = () => {
    return (
        <>
            <title>Mateus Eduardo</title>
            <Header />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="container max-w-6xl flex flex-col mt-28 justify-center items-center p-2 h-screen"
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
            <div className="flex max-lg:flex-col gap-20 mt-32">
                <div className="flex flex-col w-[50%] max-lg:w-[100%] p-4 items-end">
                    <div className="flex flex-col max-w-2xl">
                        <text className="text-lg">Olá, prazer 👋🏻</text>
                        <text className="text-2xl font-bold mb-10">Mateus Eduardo</text>
                        <text className="text-justify text-xl">
                            Como estudante de Engenharia de Software, possuo uma sólida base técnica e uma paixão por criar interfaces intuitivas e eficientes.
                            Ao longo da minha trajetória como desenvolvedor front-end, tive a oportunidade de contribuir para projetos desafiadores, como sistemas
                            de gestão de cartões de consumo e de contatos, além de plataformas de booking de reservas. Minhas experiências
                            aumentar as taxas de conversão e entregar soluções personalizadas que atendem às necessidades dos usuários.
                            Sou um profissional proativo, com forte capacidade de aprendizado e sempre buscando aprimorar meus conhecimentos para entregar projetos de
                            alta qualidade.
                        </text>
                    </div>
                </div>
                <div className="w-[50%] max-lg:w-[100%] flex flex-col p-4">
                    <div className="max-w-2xl flex flex-col">
                        <text className="font-bold text-2xl mb-10">Minhas habilidades</text>
                        <div className="flex gap-4 flex-wrap justify-between">
                            <Badge className="p-4 rounded-sm text-lg">
                                HTML
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                CSS
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                JavaScript
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                React
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                Nextjs
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                Docker
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                Git / GitHub
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                Tailwindcss
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                Responsive Design
                            </Badge>
                            <Badge className="p-4 rounded-sm text-lg">
                                TypeScript
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mb-10">
                <ProjectCarousel />
            </div>
        </>
    )
}

export default Home