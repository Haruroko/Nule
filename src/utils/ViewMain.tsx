import { JSX } from "react";

type ViewMainProps = { item: JSX.Element };

export default function ViewMain({ item: Item }: ViewMainProps) {
  return Item;
}