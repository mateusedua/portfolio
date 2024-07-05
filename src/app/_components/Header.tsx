"use client"

import { Avatar, AvatarFallback } from "./ui/avatar"
import { Card } from "./ui/card"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "./ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

const Header = () => {

    const { setTheme } = useTheme()

    return (
        <Card className="p-4 rounded-t-none">
            <div className="flex justify-between items-center">
                <Link className="flex items-center gap-2" href="/">
                    <Avatar className="size-16">
                        <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <span className="font-bold text-lg">Mateus Eduardo</span>
                </Link>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-5 text-lg font-bold">
                        <li>Inicio</li>
                        <li>Quem sou</li>
                    </ul>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Claro
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Escuro
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </Card>
    )
}

export default Header