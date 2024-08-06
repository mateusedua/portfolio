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
        url_project: "https://github.com/mateusedua/lista-contato"
    }
]

const ProjectCarousel = () => {

    const [api, setApi] = useState<CarouselApi>()

    return (
        <div className=" w-[70%]">
            <text>Meus Cases</text>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {
                        data.map((item, index) => (
                            <CarouselItem key={index} className="flex gap-10">
                                <Image src={item.image} alt="" width={900} height={600} style={{
                                    borderRadius: 5
                                }} />
                                <div className="flex flex-col gap-4 mt-10">
                                    <text>{item.title}</text>
                                    <text>{item.descricao}</text>

                                    <Button>Ver Projeto</Button>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ProjectCarousel