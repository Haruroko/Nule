import useIsMobile from "@/hooks/mobile/isMobile";

export const Section1:React.FC = () => {
    const isMobile = useIsMobile();
    return(
        <div className="w-full h-screen p-5 md:p-10 flex items-center justify-center">
            {
                isMobile ? 
                null :
                <p className="absolute top-5 md:top-10 left-5 md:left-10 font-bold text-lg md:text-3xl">Introduce</p>
            }
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-start">
                <p className="font-bold text-2xl md:text-4xl">Sense & Trendy</p>
                <div className="w-16 md:w-1.5 h-1 md:h-auto bg-[#A2CCFF]"/>
                <p className="text-sm md:text-2xl text-center md:text-start">
                    영상 속 작은 디테일 하나에도 분위기를 담고,<br/>
                    <b>센스 있는 편집</b>으로 보는 이로 하여금 영상속으로 빠져들게 합니다.<br/>
                    또한, <b>트렌드를</b> 읽는 <b>감각과 섬세한 시선,</b><br/>
                    <b>”영상에 생명을 불어넣는다”</b>는 마음가짐으로 스타일리시하게 편집하는 편집자입니다.<br/>
                </p>
            </div>
        </div>
    );
}

export default Section1;