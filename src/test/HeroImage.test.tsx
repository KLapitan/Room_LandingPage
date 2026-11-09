import {describe , it , expect} from "vitest"
import {render, screen} from "@testing-library/react"
import { roomMobileImageData } from "../Components/HeroSection"

import { roomDesktopImageData } from "../Components/HeroSection"

import HeroImage from "../Components/HeroImage"

describe("HeroImage" , () => {
  it("should display correct initial image on Mobile" , () => {
    expect(roomMobileImageData[0].src).toBe("images/mobile-image-hero1.webp")
    
    
  
  })

})

describe("HeroImage" , () => {
it("should display correct initial image on Desktop",() =>{
expect(roomDesktopImageData[0].src).toBe("images/desktop-image-hero1.webp")

})

})


describe("HeroImage" , () => {
it("should display correct image on Mobile and Desktop" , () => {
  const mobileImage = {
      id: 0,
      src: "images/mobile-image-hero1.webp",
      altName: "mobilehero-1",
    };


     const desktopImage = {
      id: 0,
      src: "images/desktop-image-hero1.webp",
      altName: "desktophero-1",
    };

    
    render(
      <HeroImage
        activeDesktopImage={desktopImage}
        activeMobileImage={mobileImage}
        handleNextImage={() =>{}}
        handlePreviousImage={() => {}}
      
      />
    
      )

      // to check if the alt name of iamge is correctly passed or it is rendered
      const MobileImg = screen.getByAltText("mobilehero-1");
      const DesktopImg = screen.getByAltText("desktophero-1");

      // checks if it is image exist on document
      expect(MobileImg).toBeInTheDocument();
      expect(DesktopImg).toBeInTheDocument();
      
      // checks whether the correct src was passed.
      expect(MobileImg).toHaveAttribute("src" , "images/mobile-image-hero1.webp")
      expect(DesktopImg).toHaveAttribute("src" , "images/desktop-image-hero1.webp")


})


})

