import HeroSection from "./Components/HeroSection";
import PreFooter from "./Components/PreFooter";
import RoomNav from "./Components/Room-Nav";


const RoomLayout = () => {
  return (
  <div className="relative  z-10">
  <nav className="absolute top-1 left-0 md:left-14 h-30 max-w-lg w-full  flex items-center  z-40">
  <RoomNav/>
  </nav>

    <main className="h-auto font-League-Spartan max-w-full">
    <div className="flex flex-col ">
    
    <HeroSection/> 
    <PreFooter/>
    </div>
 
  </main>
  </div>
  );
}

export default RoomLayout;
