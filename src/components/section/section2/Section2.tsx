import SectionList from "./SectionList";
import { data } from './data';
import Image from "next/image";
const basePath = process.env.NODE_ENV === "production" ? "/Nule" : "";

export default function Section2() {
    return(
        <div className="
            flex flex-col xl:flex-row
            p-6 sm:p-10 xl:py-28 xl:px-32
            gap-10 xl:gap-x-36
            w-full
        ">
            {/* 왼쪽 프로필 */}
            <div className="flex flex-col items-start w-full xl:w-auto">
                <p className="font-bold text-xl sm:text-2xl xl:text-4xl">강유빈</p>
                <p className="font-bold text-xl sm:text-2xl xl:text-4xl whitespace-nowrap">Kang Yubin</p>

                <div className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] aspect-square relative mt-6 sm:mt-10 xl:mt-20">
                    <Image
                        fill
                        src={`${basePath}/images/profileImage.webp`}
                        alt="프로필 이미지"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* 오른쪽 리스트 */}
            <div className="
                grid grid-cols-1 sm:grid-cols-2
                gap-8 sm:gap-10 xl:gap-15
                w-full
            ">
                {data.map((data) => (
                    <SectionList key={data.title} data={data} />
                ))}
            </div>
        </div>
    );
}