import React from 'react';

interface GivingHeroTextProps {
  title?: string;
  subtitle?: string;
  showDecorations?: boolean;
  backgroundColor?: string;
}

const GivingHeroText: React.FC<GivingHeroTextProps> = ({
  title = "You Belong Here ",
  subtitle = "Thank you for partnering with us through your giving. Your seed helps the growth of the church.",
  showDecorations = true,
  backgroundColor = "transparent"
}) => {
  return (
    <section 
      className={`w-full relative px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-12 xl:py-28`}
      style={{ backgroundColor }}
    >
      {/* Decorative elements */}
      {showDecorations && (
        <>
        <div>
            
        </div>

        </>
      )}

      <div className="max-w-[844px] mx-auto text-center relative z-10">
        {/* Title with gradient option */}
        <h1 className="
          text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 
          font-medium leading-[120%] text-[#1E1E1E] 
          mb-4 sm:mb-5 md:mb-6 lg:mb-8
          hover:scale-105 transition-transform duration-300
        ">
          {title}
        </h1>
        
        {/* Subtitle with hover effect */}
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[36px] 
          font-normal leading-[120%] sm:leading-[130%] md:leading-[120%]
          text-black max-w-full
          transition-all duration-300
          hover:text-[#1E1E1E]
        ">
          {subtitle}
        </p>

     
      </div>
    </section>
  );
};

export default GivingHeroText;