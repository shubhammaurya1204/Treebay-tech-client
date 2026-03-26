import React from 'react';

const ProjectShowcase = () => {
    let primaryCTA = { label: "View All Projects", href: "/projects" };
    let secondaryCTA = { label: "Hydrogen Projects", href: "/projects/hydrogen" };
  return (
    <section className="bg-[#1a3a2a] py-20 px-[6%] flex items-center justify-between gap-12 max-[1100px]:flex-col max-[1100px]:text-center max-[1100px]:items-center max-[640px]:py-16 max-[640px]:px-6 text-left">
      
      {/* Text Content Area */}
      <div className="max-w-[720px]">
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,4vw,2.8rem)] text-white leading-tight mb-4 font-semibold">
         250+ Projects Delivered. Across Industries. Across India.
        </h2>
        <div className="text-[rgba(255,255,255,0.7)] text-[1.05rem] leading-[1.8]">
          {<p>We have expanded our operations to include <strong>South East Asia</strong> and the <strong>Middle East</strong>.</p> || (
            <p>
              From <a href="/projects/hydrogen" className="text-white no-underline hover:text-[#a8d5b5] font-bold transition-colors">green hydrogen plant commissioning</a> to large-scale <a href="/projects/food-processing" className="text-white no-underline hover:text-[#a8d5b5] font-bold transition-colors">food processing</a> plant installations and multi-site <a href="/projects/fabrication" className="text-white no-underline hover:text-[#a8d5b5] font-bold transition-colors">fabrication works</a> — our portfolio speaks for itself.
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap shrink-0 max-[1100px]:justify-center">
        <a 
          href={primaryCTA.href} 
          className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]"
        >
          {primaryCTA.label}
        </a>
        
        <a 
          href={secondaryCTA.href} 
          className="border-[1.5px] border-[#1a3a2a] text-[#1a3a2a] px-[2.2rem] py-[0.95rem] rounded-[30px] font-medium text-[0.92rem] no-underline transition-all duration-250 hover:border-white hover:text-white hover:bg-[#a8d5b5] inline-block"
        >
          {secondaryCTA.label}
        </a>
      </div>
    </section>
  );
};

export default ProjectShowcase;