

import Button from "./Button";
import type { MouseEvent } from "react";

type ImageProps = {
activeMobileImage:{
id:number;
src:string;
altName:string;

} | undefined;
activeDesktopImage:{
id:number;
src:string;
altName:string;
} |undefined;
handleNextImage: (e: React.MouseEvent<HTMLButtonElement>) =>void;
handlePreviousImage:(e: React.MouseEvent<HTMLButtonElement>) =>void;
}



const HeroImage = ({activeMobileImage,activeDesktopImage,handleNextImage, handlePreviousImage}:ImageProps) => {


  return (
  <section className="border-green-300 border h-auto md:h-110 2xl:h-123 w-full max-w-4xl relative">

        {/* dynamic */}
      <picture className="w-auto h-70">
          <img src={activeMobileImage.src} alt={activeMobileImage.altName} className="md:hidden w-full h-full" />
          <img src={activeDesktopImage.src} alt={activeDesktopImage.altName} className="hidden md:flex w-full h-full" />
      </picture>

      <Button  handleNextImage={handleNextImage}  handlePreviousImage={handlePreviousImage}/>
    
   
  </section>
  );
}

export default HeroImage;
