'use client'

import { notFound } from "next/navigation"
import { useEffect } from "react"

export default function Error({
    error, reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.log("error", error)
    }, [error])
    // if(error)
    return (
        <div className="">
            oops
        </div>
    )
}