"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("79dddb64-bafb-4fee-a738-162b7827ccff")
    }, [])

    return null
}
