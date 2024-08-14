"use client"

import { useState } from "react";

const Footer = () => {
    const [date, _] = useState(new Date())

    return (
        <footer className="container max-w-7xl h-20 flex text-center justify-center items-center">
            <text>Copyright {date.getFullYear()} - Todos os direitos reservados a Mateus Eduardo Benedito dos Santos</text>
        </footer>
    )
}

export default Footer