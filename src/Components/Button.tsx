type ButtonProps = {
  handleNextImage: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;

  handlePreviousImage: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
};

const Button = ({handleNextImage , handlePreviousImage}:ButtonProps) => {
  return (
  <div className="absolute bottom-0 right-0 md:-right-34 ">
  <div className="flex flex-row w-20 h-10  bg-white md:h-18 md:w-34   ">
   <button onClick={handlePreviousImage} className="bg-black w-17">
    <picture>
      <img src="/images/icon-angle-left.svg" alt="previous icon" className="place-self-center w-2  h-3 md:w-4 md:h-5" />
    </picture>
    </button>
    <button onClick={handleNextImage} className="bg-black w-17">
    <picture>
        <img src="/images/icon-angle-right.svg" alt=" next icon" className="place-self-center w-2  h-3 md:w-4 md:h-5" />

    </picture>
    </button>
   
  </div>
  </div>
  );
}

export default Button;
