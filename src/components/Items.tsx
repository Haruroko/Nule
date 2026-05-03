import { JSX } from "react";
import Main from "./Main";
import Section1 from "./section/section1/Section1";
import Section2 from "./section/section2/Section2";
import Section3 from "./section/section3/section3";
import Section4 from "./section/section4/section4";
import Section5 from "./section/section5/section5";
import Section6 from "./section/section6/Section6";
import SectionSwiper from "./section/section7/page";

export const ITEMS: JSX.Element[] = [
    <Main />,
    <Section1/>,
    <Section2/>,
    <Section3/>,
    <Section4/>,
    <Section5/>,
    <Section6/>,
    <SectionSwiper/>
];
