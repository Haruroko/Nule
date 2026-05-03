import ImageList, { ImageListType } from "@/components/ImageList";
import useIsMobile from "@/hooks/mobile/isMobile"
import Image from "next/image";

 const CONST_IMAGE : ImageListType[] = [
        {
            src: "/images/profile4/thumb_1.jpeg",
            className: "aspect-[9/16] w-auto",
            href: "https://www.instagram.com/reel/DMnGmoWh90j/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        },
        {
            src: "/images/profile4/thumb_2.jpeg",
            className: "aspect-[9/16] w-auto",
            href: "https://www.instagram.com/reel/DK3Eovgha0n/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA== ",
        },
        {
            src: "/images/profile4/thumb_3.jpeg",
            className: "aspect-[9/16] w-auto",
            href: "https://www.instagram.com/reel/DLORceCBbcg/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        },
        {
            src: "/images/profile4/thumb_4.jpeg",
            className: "aspect-[9/16] w-auto",
            href: "https://www.instagram.com/reel/DSEAtedEulQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
    ]
    




export default function Section6() {
    const isMobile = useIsMobile();
    return (
        <div className="w-full min-h-screen p-5 lg:p-10 xl:p-14 flex lg:flex-row flex-col gap-x-20 xl:gap-x-20 lg:justify-between items-start relative">
            <div className="flex flex-col gap-y-3 lg:gap-y-5 relative w-full h-full justify-start mt-0">
                <div className="flex gap-x-5 items-center">
                    <div className="bg-[#A2CCFF] h-10 w-1" />
                    <p className="font-medium">MAIN TASK</p>
                </div>
                <div className="flex flex-col p-1.5 lg:p-3 xl:p-5 flex-wrap gap-y-5">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">수연이네</p>
                    <ul className="list-disc pl-6 mt-3 lg:mt-4 text-sm md:text-base lg:text-lg xl:text-xl  break-keep flex flex-col">
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold whitespace-nowrap">담당 역할</p>
                        <li className="list-disc pl-2 mt-3 text-sm md:text-base lg:text-lg xl:text-xl">
                            수연이네 채널의 틱톡 운영을 총괄하며, 광고 및 일상 콘텐츠의 기획부터 촬영, 편집까지 전반적인 제작 과정을 담당했습니다.
                        </li>
                    </ul>
                </div>
                <div className="grid! grid-cols-2 sm:grid-cols-4! w-full h-full gap-3 mt-6 lg:mt-auto">
                    {CONST_IMAGE.map((data, index) => {
                        return (
                            <ImageList key={index} {...data} />
                        )
                    })}
                </div>
            </div>
            <p className="font-semibold text-[200px] sm:text-[350px] lg:text-[450px] xl:text-[550px] fixed right-0 lg:left-20 bottom-0 -z-10 bg-gradient-to-r from-white to-black opacity-30 bg-clip-text text-transparent pointer-events-none leading-none">
                04
            </p>
            <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-gradient-to-r from-white to-[#A2CCFF]/20 clip-triangle -z-10"></div>
        </div>
    )
}