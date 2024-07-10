"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Drawer, DrawerContent, DrawerOverlay, DrawerTrigger } from "./ui/drawer"
import Theme from "./Theme"

const links = [
    {
        link: 'Inicio',
        href: '/'
    },
    {
        link: 'Quem sou',
        href: '/'
    },
    {
        link: 'Projetos',
        href: '/'
    }
]

const Header = () => {

    return (
        <Card className="p-4 rounded-t-none w-full fixed top-0 left-0 z-[999]">
            <div className="flex justify-between items-center">
                <div className="lg:hidden md:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="mx-auto w-full p-6 flex flex-col">
                                <div className="flex items-center gap-2">
                                    <Avatar className="size-16">
                                        <AvatarImage src="./Logo.jpg" alt="Mateus Eduardo"></AvatarImage>
                                        <AvatarFallback>MT</AvatarFallback>
                                    </Avatar>
                                    <span className="font-bold text-lg">Mateus Eduardo</span>
                                </div>
                                <div className="flex flex-col gap-6 text-lg font-bold mt-10">
                                    {
                                        links.map((item, index) => (
                                            <Link href={item.href} key={index} className="text-2xl">{item.link}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
                <Link className="flex max-sm:hidden items-center gap-2" href="/">
                    <Avatar className="size-16">
                        <AvatarImage src="./Logo.jpg" alt="Mateus Eduardo"></AvatarImage>
                        <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <span className="font-bold text-lg">Mateus Eduardo</span>
                </Link>
                <div className="flex items-center gap-5">
                    <ul className="flex max-sm:hidden gap-5 text-lg font-bold">
                        <li>Inicio</li>
                        <li>Quem sou</li>
                        <li>Projetos</li>
                    </ul>
                    <Theme />
                </div>
            </div>
        </Card>
    )
}

export default Header