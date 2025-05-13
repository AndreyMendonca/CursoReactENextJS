"use client"
import { Header } from "@/components/Header";
import { CountProvider } from "@/context/CounterContext";
import { useState } from "react";

export default function () {
    const [onlineCount, setOnlineCount] = useState(92);

    return (
        <div className="container mx-auto">
            <CountProvider>
                <Header/>
            </CountProvider>
        </div>

    )
}