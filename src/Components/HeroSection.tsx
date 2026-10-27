import { useState } from "react";
import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";

type Image = {
id:number;
src:string;
altName:string;
}




const roomMobileImageData:Image[] = [
    {id:0, src:"images/mobile-image-hero1.webp",altName:"mobilehero-1"},
    {id:1,src:"images/mobile-image-hero2.webp",altName:"mobilehero-2"},
    {id:1, src:"images/mobile-image-hero3.webp",altName:"mobilehero-3"},
];

const roomDesktopImageData:Image[] = [
      {id:0, src:"images/desktop-image-hero1.webp",altName:"mobilehero-1"},
    {id:1,src:"images/desktop-image-hero2.webp",altName:"mobilehero-2"},
    {id:1,src:"images/desktop-image-hero3.webp",altName:"mobilehero-3"},
]


const HeroSection = () => {
const [mobileImage,setMobileImage]=useState<Image[]>(roomMobileImageData)
const [desktopImage,setDsktopImage]=useState<Image[]>(roomDesktopImageData)
const [currentImageIndex ,setCurrentImageIndex]=useState<number>(0)

let activeMobileImageIndex = mobileImage?.[currentImageIndex]
let activeDesktopImageIndex = desktopImage?.[currentImageIndex]

const handleNextImage = () => {
setCurrentImageIndex((prev) => (prev + 1 ) % roomMobileImageData.length)
}

const handlePreviousImage = () => {

setCurrentImageIndex((prev) => (prev - 1 + roomMobileImageData.length ) % roomMobileImageData.length)
}





  return (
      <div className="relative flex flex-col md:flex-row w-full h-auto ">
      <HeroImage activeMobileImage={activeMobileImageIndex} activeDesktopImage={activeDesktopImageIndex} handleNextImage={handleNextImage} handlePreviousImage={handlePreviousImage}/>
      <HeroDescription/>
    </div>
  );
}

export default HeroSection;
