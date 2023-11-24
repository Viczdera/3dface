'use client'
import React, { useLayoutEffect, useRef, useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

function Nav() {
    const [isSide, setIsSide] = useState(false)
    const [reverse, setReverse] = useState([false, false, false, false])
    const variantGray = {
        hidden: {
            y: '100%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.3 },
        },
        visible: {
            y: '-100%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.3 },
        },
        // exit: {
        //     y: '100%',
        //     rotate: 0.001,
        //     transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0},
        // },
    }
    const variantRed = {
        hidden: {
            y: '100%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.15 },
        },
        visible: {
            y: '-100%',
            rotate: 0.001,
            transition: { duration: 0.9, ease: [0.5, 0, 0.15, 1], delay: 0.15 },
        },
        // exit: {
        //     y: '100%',
        //     rotate: 0.001,
        //     transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.15 },
        // },
    }
    const variantBody = {

        hidden: {
            y: '100%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.3 },
        },
        visible: {
            y: '0%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.3 },
        },
        exit: {
            y: '100%',
            rotate: 0.001,
            transition: { duration: 0.8, ease: [0.5, 0, 0.15, 1], delay: 0.3 },
        },
    }
    const varaintSingleText = {
        initial: {
            y: '0%',
            rotate: 0.001,
            scale: 1.1,
            // transform: 'translateY(0%) scale(1) rotate(0.001deg)',
            transition: { duration: 0.5, ease: [0.6, 0, 0.1, 1] },
        },
        // hover: {
        //     y: '-10%',
        //     rotate: 0.001,
        //     scale: 1.1,
        //     // transform: 'translateY(-10%) scale(1.1) rotate(0.001deg)',
        //     transition: { duration: 0.5, ease: [0.6, 0, 0.1, 1] },
        // },
    }

    const navItems: string[][] = [
        ["H", "O", "M", "E"],
        ["W", "O", "R", "K"],
        ["A", "B", "O", "U", "T"],
        ["C", "O", "N", "T", "A", "C", "T"]
    ]
    console.log(reverse)
    return (
        <div className="navMain" >

            <div onClick={() => {
                setIsSide(!isSide)
            }} className="navIcon">
                .
            </div>
            <AnimatePresence>

                {isSide &&
                    <>

                        <motion.div className="navBody" variants={variantBody}
                            initial="hidden"
                            animate="visible"
                            exit='exit'
                        >
                            <div className="row navRow">
                                <div className="col navImages">

                                </div>
                                <ul className="col navLinks">
                                    {navItems.map((item, i) => (
                                        <li key={i} >
                                            <h3>
                                                <motion.div className="chars"
                                                    initial="end"
                                                    whileHover="hover"
                                                    // onHoverStart={()=>{
                                                    //     let n=[...reverse]
                                                    //     n[i]=false
                                                    //     setReverse(n)
                                                    // }}
                                                    onHoverEnd={() => {
                                                        let n = [...reverse]
                                                        n[i] = true
                                                        setReverse(n)
                                                    }}
                                                    animate={reverse[i] ? 'end' : 'initial'}
                                                >

                                                    <div className="split-chars first">
                                                        <motion.div className="single-word"

                                                        >
                                                            {
                                                                item.map((s, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className="single-char"
                                                                        variants={{
                                                                            ...varaintSingleText,
                                                                            hover: {
                                                                                y: '-100%',
                                                                                rotate: 0.001,
                                                                                scale: 1.1,
                                                                                transition: { duration: 0.3 + i * 0.1, ease: [0.6, 0, 0.1, 1] },
                                                                            },
                                                                            end: {
                                                                                y: 0,
                                                                                rotate: 0.001,
                                                                                scale: 1,
                                                                                transition: { duration: 0.3 + (item.length-i) * 0.1, ease: [0.6, 0, 0.1, 1] },
                                                                            },
                                                                        }}


                                                                    >
                                                                        <motion.div
                                                                            className="single-char-inner"
                                                                        >
                                                                            {s}
                                                                        </motion.div>
                                                                    </motion.div>
                                                                ))
                                                            }
                                                        </motion.div>
                                                    </div>
                                                    <div className="split-chars second">
                                                        <motion.div className="single-word"
                                                        >
                                                            {
                                                                item.map((s, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className="single-char"
                                                                        variants={{
                                                                            initial: {
                                                                                y: "100%",
                                                                                rotate: 0.001,
                                                                                scale: 1.1,
                                                                                // transform: 'translateY(0%) scale(1) rotate(0.001deg)',
                                                                                transition: { duration: 0.3, ease: [0.6, 0, 0.1, 1] },
                                                                            },
                                                                            hover: {
                                                                                y: '0%',
                                                                                rotate: 0.001,
                                                                                scale: 1.1,
                                                                                transition: { duration: 0.3 + i * 0.1, ease: [0.6, 0, 0.1, 1] },
                                                                            },
                                                                            end: {
                                                                                y: "100%",
                                                                                rotate: 0.001,
                                                                                scale: 1,
                                                                                transition: { duration: 0.3 + (item.length-i) * 0.1, ease: [0.6, 0, 0.1, 1] },
                                                                            },
                                                                        }}


                                                                    >
                                                                        <motion.div
                                                                            className="single-char-inner"
                                                                        >
                                                                            {s}
                                                                        </motion.div>
                                                                    </motion.div>
                                                                ))
                                                            }
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="navBody1"
                            variants={variantGray}
                            initial="hidden"
                            animate="visible"
                            exit='exit'

                        >
                            hi
                        </motion.div>
                        <motion.div className="navBody2" variants={variantRed}
                            initial="hidden"
                            animate="visible"
                            exit='exit'

                        >

                        </motion.div>
                    </>

                }
            </AnimatePresence>
        </div>

    )
}



export default Nav