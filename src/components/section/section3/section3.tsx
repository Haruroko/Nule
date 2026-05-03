import ImageList, { ImageListType } from "@/components/ImageList";
import useIsMobile from "@/hooks/mobile/isMobile"
import Image from "next/image";
export default function Section3() {
    const CONST_IMAGE: ImageListType[] = [
        {
            src: "/images/profile1/koreajp_1.png",
            className: "lg:col-span-2",
            href: "https://youtu.be/zVJlOjUtw-Y?si=v3K5fH2aUPd2WrWN",
        },
        {
            src: "/images/profile1/koreajp_2.png",
            className: "",
            href: "https://youtu.be/hpnqq1GifBg?si=S9bmXkOCROp81lyQ",
        },
        {
            src: "/images/profile1/koreajp_3.png",
            className: "",
            href: "https://youtu.be/NxjHG9JQuRs?si=vn9zfUsgy6rSz5Z1",
        },
    ]
    const isMobile = useIsMobile();
    return (
        <div className="w-full min-h-screen p-5 lg:p-10 xl:p-14 flex lg:flex-row flex-col gap-x-20 xl:gap-x-20 lg:justify-between items-start relative">
            <div className="flex flex-col gap-y-3 lg:gap-y-5 relative w-full h-full lg:max-w-[500px] xl:max-w-[750px] justify-start mt-0">
                <div className="flex gap-x-5 items-center">
                    <div className="bg-[#A2CCFF] h-10 w-1" />
                    <p className="font-medium">MAIN TASK</p>
                </div>
                <div className="flex flex-col p-1.5 lg:p-3 xl:p-5 flex-wrap">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">주일한국대사관</p>
                    <ul className="list-disc pl-6 xl:pl-8 mt-3 lg:mt-6 text-sm md:text-base lg:text-lg xl:text-xl  break-keep">
                        <li>총 10편 제작 진행</li>
                        <li>직접 촬영 참여</li>
                        <li>편집감독으로 프로젝트 담당 및 진행</li>
                    </ul>
                </div>
                <div className="flex flex-col p-1.5 lg:p-3 xl:p-5">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">담당 역할</p>
                    <p className="list-disc pl-2 xl:pl-4 mt-3 lg:mt-6 text-sm md:text-base lg:text-lg xl:text-xl">
                        총 10편의 콘텐츠 제작을 주도하며 프로젝트 전반의 완성도와 일관성을 관리했습니다.<br />
                        서브 촬영에 참여해 현장 흐름을 파악하고 이를 편집에 반영했으며, 편집 감독으로서 컷, 자막, BGM, 효과음 등 전반적인 편집을 총괄해 결과물을 완성했습니다.
                    </p>
                </div>
            </div>
            <p className="font-semibold text-[200px] sm:text-[350px] lg:text-[450px] xl:text-[550px] fixed right-0 lg:left-20 bottom-0 -z-10 bg-gradient-to-r from-white to-black opacity-30 bg-clip-text text-transparent pointer-events-none leading-none">
                01
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