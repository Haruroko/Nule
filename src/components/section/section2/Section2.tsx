import SectionList from "./SectionList";
import { data } from './data';

export const Section2:React.FC = () => {
    return(
        <div className="py-28 px-32 flex justify-start items-start gap-x-36">
            <div className="flex flex-col min-w-52">
                <p className="font-bold text-3xl">강유빈</p>
                <p className="font-bold text-3xl">Kang Yubin</p>
            </div>
            <div className="flex flex-col w-full h-auto flex-wrap gap-y-16">
                {data.map((data) => {
                    return (
                        <SectionList key={data.title} data={data} />
                    )
                })}
            </div>
        </div>
    );
}

export default Section2;