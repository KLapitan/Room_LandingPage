

import Button from "./Button";


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
  <section className="h-auto md:h-135  w-full max-w-4xl relative">

        {/* dynamic */}
      <picture className="w-auto h-80">
          {/* <img src={activeMobileImage.src} alt={activeMobileImage.altName} className="md:hidden w-full h-full" />
          <img src={activeDesktopImage.src} alt={activeDesktopImage.altName} className="hidden md:flex w-full h-full" /> */}

          {/* we flagge so in our test we can prevent errors if the image doesnt passed */}
          {activeMobileImage && (
  <img
    src={activeMobileImage.src}
    alt={activeMobileImage.altName}
    className="md:hidden w-full h-full"
  />
)}

{activeDesktopImage && (
  <img
    src={activeDesktopImage.src}
    alt={activeDesktopImage.altName}
    className="hidden md:flex w-full h-full"
  />
)}
      </picture>

      <Button  handleNextImage={handleNextImage}  handlePreviousImage={handlePreviousImage}/>
    
   
  </section>
  );
}

export default HeroImage;
