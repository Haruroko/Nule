import classNames from "classnames";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { twMerge } from "tailwind-merge";
import AnimatedProgress from "./AnimatedProgress";

interface DataListType {
    text: string;
    level?: number;
}

interface DataType {
  title: string;
  data: DataListType[];
}

// SectionList가 받을 props 타입
interface SectionListProps {
  data: DataType;
}
export const SectionList: React.FC<SectionListProps> = ({data}) => {
    return (
        <div className="flex flex-col gap-y-4 sm:gap-y-5">
            <p className="font-bold text-lg sm:text-xl xl:text-2xl">
                {data.title}
            </p>

            <div className="flex gap-x-4 sm:gap-x-5 items-start">
                <div className="bg-[#A2CCFF] w-1 min-h-full" />

                <div className="flex flex-col gap-y-3 sm:gap-y-4">
                    {data.data.map((data, index) => (
                        <div key={index} className="flex items-center gap-x-3 sm:gap-x-5">
                            <p className="text-base sm:text-lg xl:text-xl">
                                {data.text}
                            </p>

                            {data.level !== undefined && (
                                <div className="w-10 h-10 sm:w-12 sm:h-12">
                                    <AnimatedProgress value={data.level} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default SectionList;