"use client";
import Lenis from "@studio-freight/lenis";
import { useCallback, useEffect, useState } from "react";
export function initLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    // const { scrollXProgress, scrollYProgress } = useScroll({ container: slider });

    // lenis.on("scroll", (e: any) => {
    //     console.log("lennis scroll");

    // });
    function raf(time: any) {
        lenis.raf(time);
        // ScrollTrigger.update();
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return {lenis,raf}
}
const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isPage, setIsPage] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            initLenis();
            setIsPage(true);
            // console.log(initLenis());
        }
    }, []);
    return (
        <>
            {isPage && <div>
                {children}</div>}
        </>
    );
};

export default ClientWrapper;