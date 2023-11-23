'use client'
import React, { useLayoutEffect, useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { initCanvas } from "@/lib/canvas"
import { motion, useAnimation } from 'framer-motion';
import { initLenis } from "./clientWrapper"
function HomeClient() {
    const scrollContainerRef = useRef(null);
    const { lenis } = initLenis()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        if (scrollContainerRef.current != null) {

            // lenis.on("scroll", (obj:any) => {
            //     const yPosition = obj?.scroll
            //     const yPosLenis=lenis.scroll
            //     console.log('scroll in',{yPositionLoco:yPosition,YPOsLeni:yPosLenis})
            //     ScrollTrigger.update
            //     console.log("lennis scroll");

            // });

            // locoScroll.on("scroll", function(){
            //     ScrollTrigger.update
            //     console.log("scrolling")
            // });
        }
        const imagess = []
        for (let i = 0; i < 50; i++) {
            let str = "ezgif-frame-0" + i + ".jpg"
            imagess.push(str)
        }
        console.log(imagess)

        const mainElement = document.querySelector("#main") as HTMLElement;
        const pinType = mainElement?.style.transform ? "transform" : "fixed";
        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value: any) {
                return lenis.scroll
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: pinType
            // scrollTop(value: any) {
            //     console.log(arguments.length)
            //     return arguments.length
            //         ? lenis.scrollTo(value, {
            //             offset: 0
            //         })
            //         : lenis.scroll
            // },

        })
        // ScrollTrigger.addEventListener("refresh", function () {
        //     locoScroll.update()
        // });

        ScrollTrigger.refresh();

        initCanvas()

        ScrollTrigger.create({
            trigger: "#page>canvas",
            pin: true,
            markers: true,
            scroller: `#main`,
            //   set start end according to preference
            start: `top top`,
            end: `1100% top`,
        });
        // gsap.to(
        //     "#page1",
        //     {
        //         scrollTrigger: {
        //             trigger: "#page1",
        //             start: 'top top',
        //             end: "bottom top",
        //             // markers: true,
        //             pin: true,
        //             scroller: "#main"
        //         }
        //     }
        // )
        // gsap.to(
        //     "#page2",
        //     {
        //         scrollTrigger: {
        //             trigger: "#page2",
        //             start: 'top top',
        //              end: "bottom top",
        //             // markers: true,
        //             pin: true,
        //             scroller: "#main"
        //         }
        //     }
        // )
        // gsap.to(
        //     "#page3",
        //     {
        //         scrollTrigger: {
        //             trigger: "#page3",
        //             start: 'top top',
        //              end: "bottom top",
        //             // markers: true,
        //             pin: true,
        //             scroller: "#main"
        //         }
        //     }
        // )


    }, [])
    return (
        <div ref={scrollContainerRef} id="main">
            <div id="page">
                <canvas id="page_canvas"></canvas>
            </div>
            <div id="page1">hi</div>
            <div id="page2">hi</div>
            <div id="page3">hi</div>

        </div>
    )
}



export default HomeClient