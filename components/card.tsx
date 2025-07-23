import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="w-full h-72 [perspective:1200px] group">
      <div className="h-full rounded-[40px] bg-gradient-to-br from-[#d8daf0] to-[#a4aee8] [transition:all_0.3s_ease-in-out] [transform-style:preserve-3d] shadow-[rgba(43,51,126,0)_40px_50px_25px_-40px,rgba(43,51,126,0.1)_0px_25px_25px_-5px] group-hover:[transform:rotate3d(1,-1,0,15deg)] group-hover:shadow-[rgba(43,51,126,0.2)_30px_50px_25px_-40px,rgba(43,51,126,0.1)_0px_25px_30px_0px]">
        {/* Glass effect */}
        <div className="absolute inset-[10px] rounded-[45px] rounded-tl-[100%] bg-gradient-to-t from-white/20 to-white/70 [transform:translate3d(0px,0px,30px)] border-r border-b border-white/50 [transition:all_0.6s_ease-in-out] [transform-style:preserve-3d]" />

        {/* Icon in top left */}
        <div className="absolute left-0 top-0 [transform-style:preserve-3d]">
          <div className="absolute w-[40px] aspect-square rounded-full top-[30px] left-[35px] bg-[#a4aee8]/30 shadow-[rgba(100,100,111,0.2)_10px_10px_20px_0px] [transform:translate3d(0,0,105px)] [transition:all_0.6s_ease-in-out] delay-[1.2s] flex items-center justify-center group-hover:[transform:translate3d(0,0,125px)]">
            <Icon className="w-8 h-8 text-[#2b337e]" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-0 [transform:translate3d(0,0,31px)]">
          <h3 className="block text-[#2b337e] font-bold text-xl mb-4 font-montserrat">
            {title}
          </h3>
          <p className="block text-[#2b337e]/80 text-sm leading-relaxed font-open-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
