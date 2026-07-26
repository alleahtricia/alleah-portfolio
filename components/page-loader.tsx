"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Flower2 } from "lucide-react"
import Image from "next/image"

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let loaded = document.readyState === "complete"
    let minTimeElapsed = false

    const tryHide = () => {
      if (loaded && minTimeElapsed) setLoading(false)
    }

    const handleLoad = () => {
      loaded = true
      tryHide()
    }

    if (!loaded) {
      window.addEventListener("load", handleLoad)
    }

    const timer = setTimeout(() => {
      minTimeElapsed = true
      tryHide()
    }, 700)

    return () => {
      window.removeEventListener("load", handleLoad)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flower2
                aria-hidden="true"
                className="size-7 text-purple-500 dark:text-purple-400"
              />
            </motion.div>
            <Image
              src="/leys-icon.svg"
              alt="Loading"
              width={40}
              height={40}
              priority
              className="size-10"
            />
          </div>

          <div className="h-1 w-40 overflow-hidden rounded-full bg-purple-100 dark:bg-purple-950">
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
