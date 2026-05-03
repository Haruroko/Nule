import ImageList, { ImageListType } from "@/components/ImageList";
import useIsMobile from "@/hooks/mobile/isMobile"
import Image from "next/image";
export default function Section5() {
    const CONST_IMAGE : ImageListType[] = [
            {
                src: "/images/profile3/image_1.jpg",
                className: "lg:col-span-2",
                href: "https://youtu.be/hxrknltBjYk?si=eVixpyIn1R1H3FAB",
            },
            {
                src: "/images/profile3/image_2.jpg",
                className: "",
                href: "https://youtu.be/-DiNyzJn5ew?si=s-uA2LWkxbZcIjK6",
            },
            {
                src: "/images/profile3/image_3.jpg",
                className: "",
                href: "https://youtu.be/SbZlz3XJco0?si=-aAJu6hHoV3V_b0Y",
            },
        ]
    return (
        <div className="w-full min-h-screen p-5 lg:p-10 xl:p-14 flex lg:flex-row flex-col gap-x-20 xl:gap-x-20 lg:justify-between items-start relative">
            <div className="flex flex-col gap-y-3 lg:gap-y-5 relative w-full h-full lg:max-w-[500px] xl:max-w-[750px] justify-start mt-0">
                <div className="flex gap-x-5 items-center">
                    <div className="bg-[#A2CCFF] h-10 w-1" />
                    <p className="font-medium">MAIN TASK</p>
                </div>
                <div className="flex flex-col p-1.5 lg:p-3 xl:p-5 flex-wrap gap-y-5">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">걱정말아요 서울</p>
                    <ul className="list-disc pl-6 mt-3 lg:mt-4 text-sm md:text-base lg:text-lg xl:text-xl  break-keep flex flex-col">
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold whitespace-nowrap">담당 역할</p>
                        <li className="list-disc pl-2 mt-3 text-sm md:text-base lg:text-lg xl:text-xl">
                            컷, 자막, 효과음 등 편집 전반을 담당하며 결과물을 완성했습니다.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="font-semibold text-[200px] sm:text-[350px] lg:text-[450px] xl:text-[550px] fixed right-0 lg:left-20 bottom-0 -z-10 bg-gradient-to-r from-white to-black opacity-30 bg-clip-text text-transparent pointer-events-none leading-none">
                03
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:min-w-[400px] xl:min-w-[500px] w-full h-full lg:my-auto lg:w-[700px] gap-3 mt-6 lg:mt-auto">
                {CONST_IMAGE.map((data, index) => {
                    return (
                        <ImageList key={index} {...data} />
                    )
                })}
            </div>
            <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-gradient-to-r from-white to-[#A2CCFF]/20 clip-triangle -z-10"></div>
        </div>
    )
}