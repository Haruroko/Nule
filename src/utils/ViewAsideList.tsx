import { JSX, useEffect, useRef, useState } from "react";
import { ITEMS } from "@/components/Items";

type Props = {
  setCurrentViewItem: (item: JSX.Element) => void;
};

export default function ViewAsideList({ setCurrentViewItem }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  // ✅ 스크롤 가능한 부모 찾기
  const getScrollableParent = (el: HTMLElement | null): HTMLElement | null => {
    while (el) {
      const style = window.getComputedStyle(el);
      const overflowY = style.overflowY;

      if (
        (overflowY === "auto" || overflowY === "scroll") &&
        el.scrollHeight > el.clientHeight
      ) {
        return el;
      }

      el = el.parentElement;
    }

    return document.documentElement; // fallback
  };

  // ✅ 맨 위
  const isAtTop = (el: HTMLElement) => el.scrollTop <= 0;

  // ✅ 맨 아래 (오차 허용)
  const isAtBottom = (el: HTMLElement) =>
    Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;

  // ✅ 페이지 전환
  const scrollToItem = (index: number) => {
    if (isScrolling.current || index < 0 || index >= ITEMS.length) return;

    isScrolling.current = true;
    setCurrentIndex(index);

    document.startViewTransition(() => {
      setCurrentViewItem(ITEMS[index]);
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      const target = e.target as HTMLElement;
      const scrollEl = getScrollableParent(target);

      if (!scrollEl) return;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      // 🔥 핵심: 끝에 도달했을 때만 페이지 전환
      if (goingDown && isAtBottom(scrollEl)) {
        scrollToItem(currentIndex + 1);
      } else if (goingUp && isAtTop(scrollEl)) {
        scrollToItem(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  return null;
}