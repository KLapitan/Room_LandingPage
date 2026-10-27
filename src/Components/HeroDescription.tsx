

const HeroDescription = () => {




  return (
    <section className="p-3 flex flex-col justify-center items-start gap-3">
        <h2 className="mt-10 text-3xl  tracking-tight leading-8 font-bold w-70 p-1  border text-left">Discover innovative ways to decorate</h2>


        <p className="text-sm p-1 text-Pgrey-500 w-74 text-left border"> We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.</p>

        <div className="flex flex-row gap-6 ">
          <span className="text-md tracking-widest  flex flex-row gap-4 font-League-Spartan-500 p-1"><p>S  H  O  P </p><p>N  O  W  </p> </span>
          <button >
          <picture>
              <img src="/images/icon-arrow.svg" alt="" />
          </picture>
          </button>
        </div>

    </section>
  );
}

export default HeroDescription;
