type NavProps = {
roomLinks:string[]
handleShowModal:( ) => void ;


}




const NavModal = ({roomLinks, handleShowModal} : NavProps) => {
  return (
    <div className="fixed inset-0 top-0 left-0  bg-black/50 w-full sm:hidden ">
    <div className="bg-white h-31 w-full flex flex-row items-center justify-between p-4">
        <picture>
          <img src="/images/icon-close.svg" alt="close icon" onClick={handleShowModal}  />
        
        </picture>
        <ul className="flex flex-row gap-5">
            {roomLinks.map((item) => (
            <li className="text-md font-League-Spartan font-bold">{item}</li>
            ))}
        </ul>
    </div>
    </div>
  );
}

export default NavModal;
