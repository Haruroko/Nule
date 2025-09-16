import { JSX, useEffect, useRef, useState } from "react";
import { ITEMS } from "@/components/Items";

type Props = {
  setCurrentViewItem: (item: JSX.Element) => void;
};

export default function ViewAsideList({ setCurrentViewItem }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  const scrollToItem = (index: number) => {
    if (isScrolling.current || index < 0 || index >= ITEMS.length) return;

    isScrolling.current = true;
    setCurrentIndex(index);

    document.startViewTransition(() => {
      setCurrentViewItem(ITEMS[index]);
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) scrollToItem(currentIndex + 1);
      else if (e.deltaY < 0) scrollToItem(currentIndex - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);
  return null;
}
