import { useState } from "react";

import NavModal from "./modal/NavModal";

const roomLinks: string[] = ["home" ,"shop" , "about" , "contact"];

const RoomNav = () => {

// const [links , setLinks] = useState(roomLinks)

const [showModal,setShowModal]=useState<boolean>(false)

const handleShowModal = () => {
setShowModal(prev =>  !prev)



}

  return (
  <section className="flex flex-row  p-2 gap-24 md:gap-0 items-center w-full border">

      <div className="relative  " >
              <picture>
                <img src="/images/icon-hamburger.svg" alt="hamburger-icon" className="border md:hidden" onClick={handleShowModal}  />
            </picture>

            {showModal &&  <NavModal roomLinks={roomLinks} handleShowModal={handleShowModal} />}
          </div>
          
          <div className="flex flex-row items-center gap-18">
            <picture>
                <img src="/images/logo.svg" alt=" room logo" />
            </picture>

            <ul className="hidden md:flex md:flex-row md:gap-6 border w-full">
            {roomLinks.map((link) => (
              <li className=" relative text-white font-League-Spartan font-bold 
              hover:underline decoration-bg-white  underline-offset-4 hover:cursor-pointer">
              
                {link}
              </li>
            
            
            ))}
          
                      </ul>
                  </div>
    
  </section>
  );
}

export default RoomNav;
