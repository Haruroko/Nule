export const Section1:React.FC = () => {
    return(
        <div className="w-full h-screen p-10 flex items-center justify-center">
            <p className="absolute top-10 left-10 font-bold text-3xl">Introduce</p>
            <div className="flex gap-x-10 justify-start">
                <p className="font-bold text-4xl">Sense & Trendy</p>
                <div className="w-1.5 h-auto bg-[#A2CCFF]"/>
                <p className="text-2xl">
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