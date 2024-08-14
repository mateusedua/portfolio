"use client"

import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import {
    Carousel,
    CarouselContent,
    type CarouselApi,
    CarouselNext,
    CarouselPrevious,
    CarouselItem
} from "@/app/_components/ui/carousel"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/app/_components/ui/badge"
import { Github } from 'lucide-react';

interface dataProps {
    title: string,
    descricao: string,
    image: string,
    url_git: string,
    url_project: string
}

const data: Array<dataProps> = [
    {
        title: "Lista Contato",
        descricao: "Gerencimaneto de contato, sendo possive adicionar, editar e deletar contato.",
        image: "/lista_contato.png",
        url_git: "https://github.com/mateusedua/lista-contato",
        url_project: "https://lista-contato-swart.vercel.app/"
    }
]

const ProjectCarousel = () => {

    const [api, setApi] = useState<CarouselApi>()

    return (
        <Carousel setApi={setApi} className="mt-5">
            <CarouselContent>
                {
                    data.map((item, index) => (
                        <CarouselItem key={index} className="flex gap-10 max-lg:gap-5 max-lg:flex-col">
                            <Image src={item.image} alt="" width={900} height={600} style={{
                                borderRadius: 5
                            }} />
                            <div className="flex flex-col gap-4 mt-10 max-lg:mt-6">
                                <text className="text-xl">{item.title}</text>
                                <text className="text-lg">{item.descricao}</text>
                                <Link href={item.url_git} target="_blank">
                                    <Badge variant="secondary" className="rounded-md p-2">
                                        <Github className="max-lg:w-10 max-lg:h-10" />
                                    </Badge>
                                </Link>
                                <Button asChild>
                                    <Link href={item.url_project} target="_blank">Ver Projeto</Link>
                                </Button>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="max-lg:hidden" />
            <CarouselNext className="max-lg:hidden" />
        </Carousel>
    )
}

export default ProjectCarousel