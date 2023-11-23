import gsap from "gsap"
import { files } from "./fileData"

const frameCount = 300
const images: any[] = []
const imageSequence = {
    frame: 1
}
function scaleImage(img: any, ctx: any) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

export function initCanvas() {
    const canvas = document.querySelector("canvas")
    let context = canvas?.getContext("2d")
    function render() {
        console.log('rendered',imageSequence.frame)
        scaleImage(images[imageSequence.frame], context)
    
    }
    if (canvas != null) {
        context = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        //resize
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            //render
            render()
        })

        for (let i = 0; i < frameCount; i++) {
            const img = new Image()
            let srcStr: string = "/face/" + files(i)
            img.src = srcStr
            images.push(img)
        }

        gsap.to(imageSequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                scrub: 0.15,
                trigger: `#page>canvas`,
                //   set start end according to preference
                start: `top top`,
                end: `1100% top`,
                scroller: `#main`,
            },
            onUpdate: render,
        });

        images[1].onload = render;
    }
}