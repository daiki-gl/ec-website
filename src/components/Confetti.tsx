'use client'
import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { useWindowSize } from "react-use"
const Confetti = () => {
const [loaded, setLoaded] = useState(false)
    const { width, height } = useWindowSize()
    useEffect(() => {
        setLoaded(true)
    }, [])
    return loaded && <ReactConfetti width={width} height={height} />
}

export default Confetti