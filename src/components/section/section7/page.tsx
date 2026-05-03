import { useState } from "react"
import useIsMobile from "@/hooks/mobile/isMobile"
import Image from "next/image";
import ImageList, { ImageListType } from "@/components/ImageList";
import Footer from "@/components/footer/Footer";
export default function SectionSwiper() {
    const CONST_IMAGE : ImageListType[] = [
        {
            src: "/images/profile5/thumb_1.jpg",
            className: "",
            href: "https://youtu.be/w2WUscRkdXo?si=g3tqVD3qWkCi1LKu",
        },
        {
            src: "/images/profile5/thumb_2.jpg",
            className: "",
            href: "https://youtu.be/c-_rJh6iTdE?si=vHH9rWLqj0Ek_1tY",
        },
        {
            src: "/images/profile5/thumb_3.jpg",
            className: "",
            href: "https://youtu.be/ZBJKoG5gri0?si=j6JXXBDcRqLjlneJ",
        },
    ]
   const isMobile = useIsMobile();
    return(
        <div className="w-full min-h-screen p-5 lg:p-10 xl:p-14 pb-0! flex lg:flex-row flex-col gap-x-20 xl:gap-x-40 lg:justify-between items-start relative">
            <div className="flex flex-col gap-y-3 lg:gap-y-5 relative w-full h-full justify-start mt-0">
                <div className="flex gap-x-5 items-center">
                    <div className="bg-[#A2CCFF] h-10 w-1" />
                    <p className="font-medium">MAIN TASK</p>
                </div>
                <div className="flex flex-col p-1.5 lg:p-3 xl:p-5 flex-wrap">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">외 각종 크리에이터 광고 영상 편집 담당</p>
                </div>
                <div className="flex md:flex-row flex-col flex-1 w-full max-w-full h-full gap-3 mt-6 lg:mt-auto">
                    {CONST_IMAGE.map((data, index) => {
                        return (
                            <ImageList key={index} {...data} />
                        )
                    })}
                </div>
                <Footer/>
            </div>
            <p className="font-semibold text-[200px] sm:text-[350px] lg:text-[450px] xl:text-[550px] fixed right-0 lg:left-20 bottom-0 -z-10 bg-gradient-to-r from-white to-black opacity-30 bg-clip-text text-transparent pointer-events-none leading-none">
                05
            </p>
            <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-gradient-to-r from-white to-[#A2CCFF]/20 clip-triangle -z-10"></div>
        </div>
    )
}