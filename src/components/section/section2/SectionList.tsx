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
        <div className="flex flex-col gap-y-5">
            <p className="font-bold text-2xl">{data.title}</p>
            <div className="flex gap-x-5">
                <div className="bg-[#A2CCFF] h-auto w-1" />
                <div className="flex flex-col gap-y-2">
                    {data.data.map((data, index) => {
                        return (
                            <div className="flex items-center gap-x-5">
                                <p key={index} className="text-xl">{data.text}</p>
                                 {data.level !== undefined && <AnimatedProgress value={data.level} />}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default SectionList;