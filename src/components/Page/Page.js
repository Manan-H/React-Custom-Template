import React, { useState } from "react";
import TemplateType from "../TemplateType/TemplateType";
import SingleImg from "./SingleImage/SingleImage";
import TwoImgs from "./TwoImages/TwoImages";
import Slider from "./Slider/Slider";
import SliderSvg from "../../assets/svgs/page-layout1.svg";
import TwoImgsSvg from "../../assets/svgs/page-layout2.svg";
import SingleImgSvg from "../../assets/svgs/page-layout3.svg";

const Page = () => {
  const alignOptions = [
    { title: "Single image grid", svg: SingleImgSvg },
    { title: "2 images grid", svg: TwoImgsSvg },
    { title: "Slider grid", svg: SliderSvg }
  ];

  const [selectedLayout, setSelectedLayout] = useState(alignOptions[0].title);
  return (
    <>
      <TemplateType
        options={alignOptions}
        setSelected={setSelectedLayout}
        selected={selectedLayout}
      />
      {selectedLayout === "Single image grid" && <SingleImg />}
      {selectedLayout === "2 images grid" && <TwoImgs />}
      {selectedLayout === "Slider grid" && <Slider />}
    </>
  );
};

export default Page;
