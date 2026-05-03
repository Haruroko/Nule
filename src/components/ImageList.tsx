import classNames from "classnames";
import Image from "next/image"
import { useState } from "react";
import { twMerge } from "tailwind-merge";
const basePath = process.env.NODE_ENV === "production" ? "/Nule" : "";

export interface ImageListType {
    src: string;
    className?: string;
    href?: string;
}


export default function ImageList(props: ImageListType) {
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    return (
        <div
            onClick={() => {
                if (props.href) {
                    window.open(props.href, "_blank", "noopener,noreferrer");
                }
            }}
            onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            className={twMerge(classNames("w-full h-auto cursor-pointer aspect-video relative bg-gray-100 hover:scale-102 trnasition-all ease-in-out duration-300",
                props.className
            ))}
        >
            <Image
                fill
                src={basePath+props.src}
                alt="썸네일이미지_2"
                className={twMerge(classNames("brightness-100", { ["brightness-50"]: mouseOver}))}
            />
            <p 
                className={twMerge(classNames("absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 transition-opacity duration-300 z-50", {
                    ["opacity-100"]: mouseOver
                }))}
            >
                영상 보러가기
            </p>
        </div>
    )
}