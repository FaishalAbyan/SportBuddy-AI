import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#121212] border-b border-sport-neon/20 p-4 shadow-lg flex items-center justify-center shrink-0 z-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sport-neon flex items-center justify-center text-sport-dark shadow-[0_0_15px_rgba(57,255,20,0.5)]">
          <Dumbbell size={22} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="font-sport font-bold text-2xl tracking-wider text-white uppercase leading-none mt-1">
            Sport<span className="text-sport-neon">Buddy</span> AI
          </h1>
          <p className="text-[11px] text-gray-400 font-medium tracking-wide">PELATIH PRIBADI & PAKAR KESEHATAN</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
