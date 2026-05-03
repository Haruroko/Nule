
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-24 md:backdrop-blur-2xl pb-20 md:pb-30 md:bg-neutral-100/20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8 pt-10 md:pt-30">

        {/* 상단 */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
          
          <div>
            <p className="text-xl font-bold">Kang Yubin</p>
            <p className="text-gray-500 text-sm mt-1">
              콘텐츠 제작 · 편집
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:tivmfks13@naver.com" className="hover:underline">
              tivmfks13@naver.com
            </a>
            <a href="tel:010-6509-4628" className="hover:underline">
              010-6509-4628
            </a>
          </div>
        </div>

        {/* 하단 */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t pt-6 text-sm text-gray-500 gap-4">
          
          <div>@ Kang Yubin. </div>

        </div>
      </div>
    </footer>
  );
}