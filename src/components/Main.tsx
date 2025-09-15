export const Main:React.FC = () => {
    return(
        <div className="h-auto w-full h-screen flex flex-col justify-between p-10">
            <div className="flex w-full h-auto justify-between items-center">
                <div className="w-2 h-16 bg-[#A2CCFF]"></div>
                <p className="font-light text-2xl">Kang Yubin</p>
            </div>
            <div className="flex flex-col w-full items-center gap-y-2.5 pb-20">
                <p className="text-2xl">Nule's</p>
                <p className="font-bold text-9xl">PORTFOLIO</p>
            </div>
            <div className="flex gap-x-20 w-full justify-center items-center">
                <p className="text-2xl">SENSE</p>
                <p className="text-2xl">·</p>
                <p className="text-2xl">TRENDEY</p>
            </div>
        </div>
    );
}

export default Main;