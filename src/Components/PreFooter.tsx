const PreFooter = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 ">
{/* 2xl:h-67 */}
      {/* Div 1: Image */}
      <div className="lg:h-63">
        <img
          src="/images/image-about-dark.jpg"
          alt="Furniture dark"
          className="w-full h-full "
        />
      </div>

      {/* Div 2: Text */}
      <div className="w-full  flex flex-col gap-5  p-3 lg:h-63">
        <span className="hidden md:flex flex-row gap-3  font-bold text-lg mt-5 ">
          <span>A B O U T</span>
          <span>O U R</span>
          <span>F U R N I T U R E</span>
        </span>

          <span className="flex flex-row gap-2 text-md   font-bold place-self-start md:hidden">
            <span>
              A B O U T 
            </span>
          <span>O U R </span>
          <span>F U R N I T U R E</span>
          </span>

        <p className="text-Pgrey-500 text-sm w-auto  sm:w-auto place-self-start ">
          Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>

      {/* Div 3: Image */}
      <div className=" w-full  lg:h-63">
        <img
          src="/images/image-about-light.jpg"
          alt="Furniture light"
          className="w-full  h-full "
        />
      </div>

    </section>
  );
};

export default PreFooter;