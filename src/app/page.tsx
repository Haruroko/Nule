"use client"
import { ITEMS } from "@/components/Items";
import ViewAsideList from "@/utils/ViewAsideList";
import ViewMain from "@/utils/ViewMain";
import { JSX, ReactElement, useEffect, useRef, useState } from "react";


export default function Home() {
  const [currentViewItem, setCurrentViewItem] = useState<JSX.Element>(ITEMS[0]);
  return (
    <>
      <ViewAsideList setCurrentViewItem={setCurrentViewItem} />
      <ViewMain item={currentViewItem} />
    </>
  );
}
